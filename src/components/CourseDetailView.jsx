import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { courses } from '../data/courses';

export default function CourseDetailView() {
  const { courseId, topicId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const activeCourse = useMemo(() => courses.find(c => c.id === courseId), [courseId]);

  const selectedTopic = useMemo(() => {
    if (!activeCourse) return null;
    for (const module of activeCourse.modules || []) {
      const topic = module.topics?.find(t => t.id === topicId);
      if (topic) return topic;
    }
    return null;
  }, [activeCourse, topicId]);

  if (!activeCourse) {
    return (
      <div className="flex flex-col h-screen bg-slate-50 items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">Course Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          The course you're looking for doesn't exist or has been moved.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-900 overflow-hidden">
      <Navbar 
        onHome={() => navigate('/')} 
        activeCourse={activeCourse} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          course={activeCourse}
          selectedTopicId={topicId}
          onSelectTopic={(id) => navigate(`/${courseId}/${id}`)}
          isOpen={isSidebarOpen}
        />
        
        <main className="flex-1 flex flex-col min-w-0 bg-white shadow-inner rounded-tl-2xl overflow-hidden shadow-slate-200">
          <MainContent 
            topic={selectedTopic} 
            course={activeCourse} 
            onNavigate={(id) => navigate(`/${courseId}/${id}`)} 
          />
        </main>
      </div>
    </div>
  );
}
