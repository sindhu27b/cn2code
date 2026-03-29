import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Layers, FileText, Grid } from 'lucide-react';

export default function Sidebar({ course, selectedTopicId, onSelectTopic }) {
  const [expandedModules, setExpandedModules] = useState([]);

  // Auto-expand module containing selected topic
  useEffect(() => {
    if (selectedTopicId && course?.modules) {
      const moduleWithTopic = course.modules.find(m => 
        m.topics?.some(t => t.id === selectedTopicId)
      );
      if (moduleWithTopic && !expandedModules.includes(moduleWithTopic.id)) {
        setExpandedModules(prev => [...prev, moduleWithTopic.id]);
      }
    }
  }, [selectedTopicId, course]);

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) ? prev.filter(id => id !== moduleId) : [...prev, moduleId]
    );
  };

  if (!course) return null;

  return (
    <aside className="w-80 bg-white border-r border-slate-200 h-[calc(100vh-56px)] overflow-y-auto flex flex-col shrink-0">
      <div className="p-4 border-b border-indigo-50 bg-indigo-50/50 sticky top-0 z-10 flex items-center justify-between shadow-sm">
        <label className="text-xs font-black tracking-widest text-indigo-700 uppercase flex items-center gap-2">
          <Grid size={14} className="text-indigo-400" />
          Course Plan
        </label>
        <div className="bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded-full font-bold">
          {course.modules?.length || 0} Modules
        </div>
      </div>

      <nav className="p-3 space-y-1">
        {(!course.modules || course.modules.length === 0) && (
          <div className="p-4 text-center text-sm text-slate-400 border border-dashed rounded-lg bg-slate-50 mt-4">
            No modules available in this course.
          </div>
        )}
        
        {course.modules && course.modules.map((mod) => {
          const isModuleExpanded = expandedModules.includes(mod.id);
          const hasSelectedTopic = mod.topics?.some(t => t.id === selectedTopicId);

          return (
            <div key={mod.id} className="mb-1">
              <button
                onClick={() => toggleModule(mod.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all shadow-sm ${
                  hasSelectedTopic 
                    ? 'bg-gradient-to-r from-indigo-50 to-indigo-100/50 font-semibold text-indigo-900 border border-indigo-200 shadow-indigo-100' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-transparent hover:border-slate-200'
                }`}
              >
                <div className="flex items-center space-x-3 text-left pr-2">
                  <div className={`p-1.5 rounded-md ${hasSelectedTopic ? 'bg-indigo-200/50 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                    <Layers size={14} />
                  </div>
                  <span className="line-clamp-2 leading-tight flex-1">{mod.title}</span>
                </div>
                {mod.topics && mod.topics.length > 0 && (
                  isModuleExpanded 
                    ? <ChevronDown size={18} className={`shrink-0 ${hasSelectedTopic ? 'text-indigo-600' : 'text-slate-400'}`} /> 
                    : <ChevronRight size={18} className={`shrink-0 ${hasSelectedTopic ? 'text-indigo-600' : 'text-slate-400'}`} />
                )}
              </button>

              {/* Topics Level */}
              {isModuleExpanded && mod.topics && (
                <div className="mt-2 ml-[19px] pl-[18px] border-l-2 border-slate-100 space-y-1 mb-3 relative">
                  <div className="absolute inset-y-0 left-[-2px] w-[2px] bg-gradient-to-b from-indigo-200 via-indigo-100 to-transparent transition-all" />
                  
                  {mod.topics.map((topic) => {
                    const isTopicSelected = selectedTopicId === topic.id;

                    return (
                      <button
                        key={topic.id}
                        onClick={() => onSelectTopic(topic.id)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all ${
                          isTopicSelected
                            ? 'bg-indigo-600 text-white font-medium shadow-md shadow-indigo-200 translate-x-1'
                            : 'hover:bg-indigo-50 hover:text-indigo-800 text-slate-500 hover:translate-x-1'
                        }`}
                      >
                        <FileText size={14} className={`shrink-0 ${isTopicSelected ? 'text-indigo-200' : 'text-slate-300'}`} />
                        <span className="line-clamp-2 leading-snug">{topic.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
