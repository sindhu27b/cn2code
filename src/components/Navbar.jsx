import { ChevronRight, Home, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ activeCourse }) {
  return (
    <nav className="h-14 bg-slate-50 border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-20 sticky top-0 dropdown-shadow">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-slate-800 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-100 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <Zap className="text-white w-5 h-5 fill-white/20" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">cn2code</span>
          </Link>

          {activeCourse && (
            <div className="flex items-center space-x-2 text-sm">
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium shadow-sm border border-slate-200">
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
              className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
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
            className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors border border-transparent hover:border-indigo-100"
          >
            <Home size={16} />
            <span>Course Catalog</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
