import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Layers, FileText, Grid } from 'lucide-react';

export default function Sidebar({ course, selectedTopicId, onSelectTopic, isOpen = true }) {
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
    <aside className={`bg-slate-900 h-[calc(100vh-56px)] overflow-y-auto flex flex-col shrink-0 transition-all duration-300 ease-in-out ${isOpen ? 'w-80 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700/50 bg-slate-800/50 sticky top-0 z-10 flex items-center justify-between backdrop-blur-sm">
        <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase flex items-center gap-2">
          <Grid size={13} className="text-emerald-500" />
          Course Plan
        </label>
        <div className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2.5 py-1 rounded-full font-bold border border-emerald-500/20">
          {course.modules?.length || 0} Modules
        </div>
      </div>

      <nav className="p-2.5 space-y-0.5 flex-1">
        {(!course.modules || course.modules.length === 0) && (
          <div className="p-4 text-center text-sm text-slate-500 border border-dashed border-slate-700 rounded-lg bg-slate-800/50 mt-4">
            No modules available in this course.
          </div>
        )}
        
        {course.modules && course.modules.map((mod) => {
          const isModuleExpanded = expandedModules.includes(mod.id);
          const hasSelectedTopic = mod.topics?.some(t => t.id === selectedTopicId);

          return (
            <div key={mod.id} className="mb-0.5">
              <button
                onClick={() => toggleModule(mod.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] transition-all ${
                  hasSelectedTopic 
                    ? 'bg-emerald-500/10 font-semibold text-emerald-300 border border-emerald-500/20' 
                    : 'hover:bg-slate-800 text-slate-300 border border-transparent hover:border-slate-700/50'
                }`}
              >
                <div className="flex items-center space-x-2.5 text-left pr-2">
                  <div className={`p-1 rounded-md ${hasSelectedTopic ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                    <Layers size={13} />
                  </div>
                  <span className="line-clamp-2 leading-tight flex-1">{mod.title}</span>
                </div>
                {mod.topics && mod.topics.length > 0 && (
                  isModuleExpanded 
                    ? <ChevronDown size={16} className={`shrink-0 ${hasSelectedTopic ? 'text-emerald-400' : 'text-slate-500'}`} /> 
                    : <ChevronRight size={16} className={`shrink-0 ${hasSelectedTopic ? 'text-emerald-400' : 'text-slate-500'}`} />
                )}
              </button>

              {/* Topics Level */}
              {isModuleExpanded && mod.topics && (
                <div className="mt-1 ml-[18px] pl-4 border-l border-slate-700/50 space-y-0.5 mb-2">
                  {mod.topics.map((topic) => {
                    const isTopicSelected = selectedTopicId === topic.id;

                    return (
                      <button
                        key={topic.id}
                        onClick={() => onSelectTopic(topic.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-left transition-all ${
                          isTopicSelected
                            ? 'bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-500/20'
                            : 'hover:bg-slate-800/80 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <FileText size={13} className={`shrink-0 ${isTopicSelected ? 'text-emerald-100' : 'text-slate-600'}`} />
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
