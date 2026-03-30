import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { FileText, PlusCircle, Loader2, ChevronRight, List, CheckCircle2, BookOpen, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { topicContent } from '../data/content';

export default function MainContent({ topic, course, onNavigate }) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState('');
  const contentRef = useRef(null);

  // Compute flat topic list and find prev/next
  const { prevTopic, nextTopic } = useMemo(() => {
    if (!course?.modules || !topic) return { prevTopic: null, nextTopic: null };
    const allTopics = course.modules.flatMap(m => 
      (m.topics || []).map(t => ({ ...t, moduleName: m.title }))
    );
    const currentIndex = allTopics.findIndex(t => t.id === topic.id);
    return {
      prevTopic: currentIndex > 0 ? allTopics[currentIndex - 1] : null,
      nextTopic: currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null,
    };
  }, [course, topic]);

  // Extract ## headings from markdown content
  const headings = useMemo(() => {
    if (!content) return [];
    const regex = /^##\s+\*{0,2}(.+?)\*{0,2}\s*$/gm;
    const matches = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      const text = match[1].replace(/\*{1,2}/g, '').replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}]/gu, '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').slice(0, 50);
      if (text) matches.push({ text, id });
    }
    return matches;
  }, [content]);

  // Track active heading via IntersectionObserver
  useEffect(() => {
    if (!contentRef.current || headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: contentRef.current, rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );
    const timer = setTimeout(() => {
      const elements = contentRef.current?.querySelectorAll('h2[id]');
      if (elements) elements.forEach(el => observer.observe(el));
    }, 500);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [headings, content]);

  const scrollToHeading = useCallback((id) => {
    if (!contentRef.current) return;
    const el = contentRef.current.querySelector(`#${CSS.escape(id)}`);
    if (el) {
      const container = contentRef.current;
      const elTop = el.offsetTop;
      container.scrollTo({ top: elTop - 80, behavior: 'smooth' });
      setActiveId(id);
    }
  }, []);

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
  }, [topic]);

  // Empty state when no topic is selected
  if (!topic) {
    return (
      <div className="flex-1 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-200/50">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Select a Topic</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Choose a topic from the sidebar to start learning. Each topic contains structured content with examples, diagrams, and code.
          </p>
        </div>
      </div>
    );
  }

  // Helper to extract plain text from React children
  const getTextFromChildren = (children) => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return String(children);
    if (!children) return '';
    if (Array.isArray(children)) return children.map(getTextFromChildren).join('');
    if (children.props?.children) return getTextFromChildren(children.props.children);
    return '';
  };

  const makeId = (text) => text
    .replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}]/gu, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 50);

  // Custom components for ReactMarkdown
  const MarkdownComponents = {
    h1: ({node, ...props}) => (
      <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-14 mb-6 tracking-tight pb-4 border-b border-slate-200/60" {...props} />
    ),
    h2: ({node, ...props}) => {
      const text = getTextFromChildren(props.children);
      const id = makeId(text);
      return (
        <h2 id={id} className="text-xl md:text-2xl font-bold text-slate-800 mt-12 mb-4 tracking-tight flex items-center gap-3 scroll-mt-20" {...props}>
          <span className="w-1 h-7 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full shrink-0"></span>
          {props.children}
        </h2>
      );
    },
    h3: ({node, ...props}) => <h3 className="text-lg font-bold text-slate-700 mt-8 mb-3" {...props} />,
    p: ({node, ...props}) => <p className="text-slate-600 leading-[1.85] my-4 text-[15px]" {...props} />,
    ul: ({node, ...props}) => <ul className="space-y-2 my-4 ml-4 list-none" {...props} />,
    ol: ({node, ...props}) => <ol className="space-y-2 my-4 ml-4 list-none" {...props} />,
    li: ({node, ordered, className, checked, ...props}) => {
      if (checked !== null && checked !== undefined) {
        return (
          <li className="flex items-start gap-3 my-1.5 text-slate-600">
             <input type="checkbox" checked={checked} readOnly className="mt-1" />
             <span>{props.children}</span>
          </li>
        )
      }
      return (
        <li className="text-slate-600 leading-[1.85] text-[15px] pl-1 py-0.5">
          {props.children}
        </li>
      )
    },
    hr: ({node, ...props}) => (
      <div className="my-10 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
    ),
    a: ({node, ...props}) => <a className="text-emerald-600 hover:text-emerald-700 font-medium underline decoration-emerald-200 hover:decoration-emerald-400 underline-offset-4 transition-all" {...props} />,
    blockquote: ({node, ...props}) => (
      <blockquote className="p-5 my-6 border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50/80 to-teal-50/40 rounded-r-xl text-slate-700 relative backdrop-blur-sm" {...props}>
         <div className="text-[15px] leading-[1.85] italic">{props.children}</div>
      </blockquote>
    ),
    table: ({node, ...props}) => (
      <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl bg-white shadow-sm">
        <table className="w-full text-left border-collapse text-[14px]" {...props} />
      </div>
    ),
    thead: ({node, ...props}) => <thead className="bg-slate-900 text-white" {...props} />,
    th: ({node, ...props}) => <th className="px-5 py-3 font-bold text-xs tracking-wider uppercase" {...props} />,
    td: ({node, ...props}) => <td className="px-5 py-3.5 border-b border-slate-100/80 text-slate-600 text-sm align-top leading-relaxed" {...props} />,
    tr: ({node, ...props}) => <tr className="hover:bg-emerald-50/30 transition-colors" {...props} />,
    code: ({node, inline, className, children, ...props}) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline ? (
        <div className="my-6 bg-[#0d1117] rounded-xl overflow-hidden shadow-xl border border-slate-800/50 relative group">
          {/* Mac-like Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/5">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
              {match ? match[1] : 'code'}
            </span>
          </div>
          {/* Code */}
          <div className="p-5 overflow-x-auto">
            <pre className="text-[#e6edf3] font-mono text-[13px] leading-[1.8]">
              <code className={className} {...props}>{children}</code>
            </pre>
          </div>
        </div>
      ) : (
        <code className="bg-slate-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-mono text-[13px] border border-slate-200/80 font-medium" {...props}>
          {children}
        </code>
      );
    },
    strong: ({node, ...props}) => <strong className="font-extrabold text-slate-800" {...props} />,
    details: ({node, ...props}) => (
      <details className="my-4 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden group/details hover:border-emerald-200 hover:shadow-md transition-all duration-200 details-padded" {...props} />
    ),
    summary: ({node, ...props}) => (
      <summary className="px-5 py-3.5 bg-gradient-to-r from-slate-50 to-white font-semibold text-slate-700 cursor-pointer hover:from-emerald-50/50 hover:to-white transition-all duration-200 list-none flex items-center text-[15px] select-none" {...props}>
        <ChevronRight className="w-4 h-4 text-emerald-500 group-open/details:rotate-90 transition-transform duration-200 shrink-0 mr-3" />
        <span className="flex-1">{props.children}</span>
      </summary>
    )
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-white via-white to-emerald-50/10 overflow-y-auto w-full" ref={contentRef}>
      <div className="flex max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 min-w-0 px-10 lg:px-14 py-10 pb-28">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center space-x-3 mb-5">
              <span className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-[10px] font-bold tracking-widest uppercase shadow-sm">
                Course Module
              </span>
              <div className="flex items-center text-slate-400 text-xs font-medium gap-3">
                <div className="flex items-center gap-1">
                  <FileText size={12} />
                  <span>Reading Material</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>Self-paced</span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
              {topic.title}
            </h1>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
          </header>

          {/* Content Area */}
          <div className="relative min-h-[400px]">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <Loader2 className="w-7 h-7 text-emerald-500 animate-spin" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-slate-500 font-semibold text-sm">Loading content</p>
                  <p className="text-slate-400 text-xs mt-1">Preparing your learning material...</p>
                </div>
              </div>
            ) : content ? (
              <div className="max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={MarkdownComponents}
                >
                  {content}
                </ReactMarkdown>
                
                {/* Section Complete Footer */}
                <div className="mt-16 p-7 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl flex items-center space-x-5 shadow-xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 shrink-0">
                    <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-0.5">Section Complete!</h4>
                    <p className="text-slate-400 text-sm">Great progress. Continue to the next topic when you're ready.</p>
                  </div>
                </div>

                {/* Previous / Next Navigation */}
                {(prevTopic || nextTopic) && (
                  <div className="mt-8 flex items-center justify-between border-t border-slate-200/60 pt-6">
                    {prevTopic ? (
                      <button
                        onClick={() => { onNavigate(prevTopic.id); contentRef.current?.scrollTo({ top: 0 }); }}
                        className="group flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-md transition-all font-semibold text-sm shadow-sm"
                      >
                        <ArrowLeft size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                        <span>Previous</span>
                      </button>
                    ) : <div></div>}

                    {nextTopic ? (
                      <button
                        onClick={() => { onNavigate(nextTopic.id); contentRef.current?.scrollTo({ top: 0 }); }}
                        className="group flex items-center gap-2 px-6 py-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all font-bold text-sm shadow-md shadow-emerald-500/25 hover:shadow-lg"
                      >
                        <span>Next Topic</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : <div></div>}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-dashed border-slate-200 rounded-2xl p-10 min-h-[400px] flex flex-col items-center justify-center text-center space-y-5">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center border border-slate-200">
                  <FileText className="w-7 h-7 text-slate-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-700">Content Coming Soon</h3>
                  <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
                    We're preparing high-quality learning material for this topic. Check back soon!
                  </p>
                </div>
                <button className="flex items-center space-x-2 py-2.5 px-6 bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-200 hover:bg-emerald-600 hover:shadow-lg text-sm">
                  <PlusCircle size={16} />
                  <span>Request Update</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right TOC Sidebar */}
        {headings.length > 2 && !isLoading && content && (
          <aside className="hidden xl:block w-56 shrink-0 py-10 pr-6">
            <div className="sticky top-4">
              <div className="flex items-center gap-2 mb-4 text-[10px] font-black tracking-[0.15em] text-slate-400 uppercase">
                <List size={12} className="text-emerald-500" />
                On This Page
              </div>
              <nav className="space-y-0.5 border-l border-slate-200">
                {headings.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => scrollToHeading(h.id)}
                    className={`block w-full text-left pl-3 py-1.5 text-[12px] leading-snug transition-all border-l-2 -ml-px ${
                      activeId === h.id
                        ? 'border-emerald-500 text-emerald-700 font-semibold'
                        : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {h.text.length > 35 ? h.text.slice(0, 35) + '…' : h.text}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
