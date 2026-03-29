import { BookOpen, Code2, GitBranch, ArrowRight, Clock, Layers, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const icons = {
  java: Code2,
  angular: BookOpen,
  git: GitBranch,
};

const descriptions = {
  java: 'Master Java from basic syntax to advanced Spring Boot microservices in this comprehensive bootcamp.',
  angular: 'Build dynamic, scalable, single-page web applications using the powerful Angular framework.',
  git: 'Learn version control, branching strategies, and seamless collaboration practices with Git.',
};

const gradients = {
  java: 'from-orange-500 via-red-500 to-rose-600',
  angular: 'from-pink-500 via-rose-500 to-purple-600',
  git: 'from-teal-400 via-emerald-500 to-cyan-500',
};

const shadowColors = {
  java: 'shadow-orange-200',
  angular: 'shadow-pink-200',
  git: 'shadow-teal-200',
};

export default function HomeView({ courses }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Dynamic Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 bg-slate-50">
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[10%] right-[-5%] w-[300px] h-[300px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[80px]"></div>
        </div>

        {/* Hero Section */}
        <div className="relative pt-12 pb-10 px-8 max-w-7xl mx-auto flex flex-col items-center text-center bg-indigo-50/30 rounded-b-[2.5rem] shadow-sm border-b border-indigo-100/50">
          <div className="inline-flex items-center space-x-2 bg-indigo-50/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-indigo-100 shadow-sm mb-6 text-indigo-600 font-bold text-[10px] uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Interactive Learning Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-slate-900 pointer-events-none">
            Master Your Craft<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              One Module at a Time.
            </span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            cn2code provides interactive, project-based roadmaps for Java, Angular, and Git. Choose a course below to begin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12 text-center relative z-10">
            <button 
               onClick={() => {
                 const element = document.getElementById('courses-grid');
                 if (element) element.scrollIntoView({ behavior: 'smooth' });
               }}
               className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl transition-all active:scale-95 group text-base"
            >
              Explore Courses
              <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div id="courses-grid" className="max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {courses.map((course) => {
              const IconComponent = icons[course.id] || BookOpen;
              const desc = descriptions[course.id] || 'Explore this comprehensive course.';
              const gradient = gradients[course.id] || 'from-indigo-500 via-purple-500 to-pink-500';
              const shadow = shadowColors[course.id] || 'shadow-indigo-200';
              const numModules = course.modules?.length || 0;
              const isAvailable = numModules > 0;

              const handleStart = () => {
                if (isAvailable) {
                  navigate(`/${course.id}`);
                }
              };

              return (
                <div 
                  key={course.id}
                  onClick={handleStart}
                  className={`bg-white/80 backdrop-blur-xl rounded-[1.5rem] shadow-xl ${shadow} overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:${shadow} group flex flex-col border border-white/50 ring-1 ring-slate-100 hover:ring-indigo-100`}
                >
                  {/* Tile Header */}
                  <div className={`h-32 bg-gradient-to-br ${gradient} relative p-5 flex flex-col justify-end overflow-hidden`}>
                    {/* Decorative faint icon in background */}
                    <IconComponent className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 transform -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-700" />
                    
                    <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-2xl backdrop-blur-md shadow-inner border border-white/20">
                      <IconComponent className="text-white w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-white drop-shadow-md z-10">
                      {course.title.replace(' (Coming Soon)', '')}
                    </h2>
                  </div>
                  
                  {/* Tile Body */}
                  <div className="p-6 flex flex-col flex-1 relative bg-white">
                    {!isAvailable && (
                      <div className="absolute -top-3 right-6 bg-slate-800 text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full shadow-lg border-2 border-white uppercase">
                        Coming Soon
                      </div>
                    )}

                    <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                      {desc}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs font-semibold text-slate-500 mb-6">
                      <div className="flex items-center space-x-2 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                        <Layers size={14} className={isAvailable ? "text-indigo-500" : "text-slate-400"} />
                        <span className={isAvailable ? "text-indigo-900" : "text-slate-500"}>{numModules} Modules</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                        <Clock size={14} className={isAvailable ? "text-emerald-500" : "text-slate-400"} />
                        <span className={isAvailable ? "text-emerald-900" : "text-slate-500"}>{isAvailable ? 'Self-paced' : 'Upcoming'}</span>
                      </div>
                    </div>

                    <button 
                      className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold transition-all duration-300 ${
                        isAvailable 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 hover:from-indigo-600 hover:to-purple-700 text-sm' 
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed text-sm'
                      }`}
                    >
                      <span>{isAvailable ? 'Start Learning' : 'Stay Tuned'}</span>
                      {isAvailable && <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
