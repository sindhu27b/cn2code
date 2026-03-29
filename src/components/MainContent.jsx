import { useState, useEffect } from 'react';
import { Layout, FileText, PlusCircle, Sparkles, Loader2 } from 'lucide-react';
import { topicContent } from '../data/content';

export default function MainContent({ topic }) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (topic?.id) {
      const loader = topicContent[topic.id];
      if (typeof loader === 'function') {
        setIsLoading(true);
        loader()
          .then(module => {
            setContent(module.CONTENT);
            setIsLoading(false);
          })
          .catch(err => {
            console.error('Failed to load topic content:', err);
            setContent('Failed to load content.');
            setIsLoading(false);
          });
      } else {
        setContent(topic.content || '');
        setIsLoading(false);
      }
    } else {
      setContent('');
      setIsLoading(false);
    }
  }, [topic?.id, topic?.content]);

  if (!topic) {
    return (
      <div className="flex-1 bg-slate-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Layout className="w-10 h-10 text-indigo-50" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Select a Topic</h2>
            <p className="text-slate-500 text-lg">
              Choose a topic from the sidebar menu to view or edit its content.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Simple Markdown-like Renderer
  const renderContent = (content) => {
    if (!content || typeof content !== 'string') return null;

    const lines = content.split('\n');
    let inCodeBlock = false;
    let codeBlockContent = [];

    return lines.map((line, index) => {
      const trimmedLine = line.trim();

      // Handle Code Blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          inCodeBlock = false;
          const code = codeBlockContent.join('\n');
          codeBlockContent = [];
          return (
            <div key={index} className="my-6 bg-slate-900 rounded-xl p-6 overflow-x-auto shadow-lg border border-slate-800">
              <pre className="text-emerald-400 font-mono text-sm leading-relaxed"><code>{code}</code></pre>
            </div>
          );
        } else {
          inCodeBlock = true;
          return null;
        }
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return null;
      }

      // Handle Headers
      if (trimmedLine.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight border-b-2 border-indigo-100 pb-2">{trimmedLine.replace('# ', '')}</h1>;
      }
      if (trimmedLine.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-slate-800 mt-10 mb-5 tracking-tight">{trimmedLine.replace('## ', '')}</h2>;
      }
      if (trimmedLine.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-slate-700 mt-8 mb-4">{trimmedLine.replace('### ', '')}</h3>;
      }

      // Handle Horizontal Rule
      if (trimmedLine === '---') {
        return <hr key={index} className="my-12 border-slate-200" />;
      }

      // Handle Lists
      if (trimmedLine.startsWith('* ')) {
        return (
          <div key={index} className="flex items-start space-x-3 my-2 ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
            <p className="text-slate-600 leading-relaxed text-[15px]">{parseBold(trimmedLine.replace('* ', ''))}</p>
          </div>
        );
      }

      // Handle Regular Paragraphs
      if (trimmedLine) {
        return <p key={index} className="text-slate-600 leading-relaxed my-4 text-[15px]">{parseBold(trimmedLine)}</p>;
      }

      return <div key={index} className="h-2" />;
    });
  };

  // Helper to parse **bold** text
  function parseBold(text) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  }

  return (
    <div className="flex-1 bg-white overflow-y-auto w-full">
      <div className="max-w-4xl mx-auto px-10 py-12 pb-32">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black tracking-widest uppercase border border-indigo-100">
                Course Module
              </span>
              <div className="flex items-center text-slate-400 text-xs font-medium">
                <FileText size={12} className="mr-1" />
                <span>Reading Material</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            {topic.title}
          </h1>
        </header>

        {/* Content Area */}
        <div className="relative min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4 animate-pulse">
              <Loader2 className="w-12 h-12 text-indigo-200 animate-spin" />
              <p className="text-slate-300 font-medium tracking-wide">Loading content...</p>
            </div>
          ) : content ? (
            <div className="prose prose-slate max-w-none">
              {renderContent(content)}
              
              {/* Encouragement Footer */}
              <div className="mt-20 p-8 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-indigo-100 shrink-0">
                  <Sparkles className="text-indigo-600 w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-900 mb-1">Great job finishing this section!</h4>
                  <p className="text-indigo-700/70 text-sm">Keep up the momentum. The next section awaits your curious mind.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 dashed-border rounded-xl p-8 shadow-inner min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center border border-slate-200">
                <FileText className="w-6 h-6 text-slate-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-700">Topic Content Coming Soon</h3>
                <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                  We are currently preparing high-quality learning material for this topic. Stay tuned for expert insights and practical examples.
                </p>
              </div>
              <button className="flex items-center space-x-2 py-3 px-6 bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-600 font-bold rounded-xl transition-all shadow-sm">
                <PlusCircle size={18} />
                <span>Request Update</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
