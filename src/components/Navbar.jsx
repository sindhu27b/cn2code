import { ChevronRight, Home, Zap, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ activeCourse, toggleSidebar }) {
  return (
    <nav className="h-14 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-6 shrink-0 z-20 sticky top-0 shadow-sm">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2.5 text-slate-800 hover:text-emerald-600 transition-colors focus:outline-none rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-md shadow-emerald-200">
              <Zap className="text-white w-5 h-5 fill-white/20" />
            </div>
            <span className="font-black text-lg tracking-tight hidden sm:block">cn2code</span>
          </Link>

          {activeCourse && toggleSidebar && (
            <button 
              onClick={toggleSidebar}
              className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors focus:outline-none"
              title="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {activeCourse && (
            <div className="flex items-center space-x-2 text-sm ml-2">
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-semibold text-xs shadow-sm border border-slate-200/60">
                {activeCourse.title}
              </span>
            </div>
          )}
        </div>

        {/* Header Links */}
        {!activeCourse && (
          <div className="hidden md:flex items-center space-x-6 text-center">
            <a 
              href="#courses-grid" 
              onClick={(e) => {
                const element = document.getElementById('courses-grid');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
            >
              Courses
            </a>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {activeCourse && (
          <Link 
            to="/"
            className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-semibold transition-colors border border-transparent hover:border-emerald-100"
          >
            <Home size={15} />
            <span>Course Catalog</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
