import { BookOpen, Code2, GitBranch, ArrowRight, Clock, Layers, Users, Trophy, BookMarked, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const courseData = {
  java: {
    icon: Code2,
    desc: 'Master Java from basic syntax to advanced Spring Boot microservices in this comprehensive bootcamp.',
    accent: 'emerald',
    tagline: 'Most Popular',
    gradient: 'from-emerald-600 to-teal-500',
    hoverBorder: 'hover:border-emerald-300',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    buttonBg: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200',
  },
  angular: {
    icon: BookOpen,
    desc: 'Build dynamic, scalable, single-page web applications using the powerful Angular framework.',
    accent: 'violet',
    tagline: 'Frontend',
    gradient: 'from-violet-600 to-purple-500',
    hoverBorder: 'hover:border-violet-300',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    buttonBg: 'bg-violet-600 hover:bg-violet-700 shadow-violet-200',
  },
  git: {
    icon: GitBranch,
    desc: 'Learn version control, branching strategies, and seamless collaboration practices with Git.',
    accent: 'cyan',
    tagline: 'DevOps',
    gradient: 'from-cyan-600 to-blue-500',
    hoverBorder: 'hover:border-cyan-300',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    buttonBg: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-200',
  },
};

const stats = [
  { value: '36+', label: 'Modules', icon: BookMarked },
  { value: '640+', label: 'Topics', icon: Layers },
  { value: 'Free', label: 'Forever', icon: Trophy },
  { value: '24/7', label: 'Access', icon: Users },
];

export default function HomeView({ courses }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          {/* Animated gradient mesh background */}
          <div className="absolute inset-0">
            <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300 tracking-wide">Interactive Learning Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Learn to Code,<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Build the Future.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Structured, project-based roadmaps for Java, Angular, and Git. 
              Go from absolute beginner to production-ready developer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('courses-grid');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all active:scale-95 group text-[15px] shadow-lg"
              >
                Explore Courses
                <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://www.youtube.com/@cn2tech27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-[15px] backdrop-blur-sm"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Bottom fade to white */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* ─── Stats Bar ─── */}
        <section className="relative -mt-12 z-10 max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon size={18} className="text-emerald-500 mr-2" />
                    <span className="text-2xl md:text-3xl font-black text-slate-900">{stat.value}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Courses Grid ─── */}
        <section id="courses-grid" className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Choose Your Path
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Each course is structured with clear modules, hands-on examples, and a progression from fundamentals to advanced topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const data = courseData[course.id] || courseData.java;
              const IconComponent = data.icon;
              const numModules = course.modules?.length || 0;
              const isAvailable = numModules > 0;

              return (
                <div 
                  key={course.id}
                  onClick={() => isAvailable && navigate(`/${course.id}`)}
                  className={`group bg-white rounded-2xl border border-slate-200 ${data.hoverBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col overflow-hidden`}
                >
                  {/* Card Top Strip */}
                  <div className={`h-1.5 bg-gradient-to-r ${data.gradient}`}></div>

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon + Badge row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="text-white w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${data.badge}`}>
                        {isAvailable ? data.tagline : 'Coming Soon'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">
                      {course.title.replace(' (Coming Soon)', '')}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {data.desc}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-5">
                      <div className="flex items-center gap-1.5">
                        <Layers size={13} className="text-slate-400" />
                        <span>{numModules} Modules</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-slate-400" />
                        <span>{isAvailable ? 'Self-paced' : 'Upcoming'}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button 
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                        isAvailable 
                          ? `${data.buttonBg} text-white shadow-md hover:shadow-lg` 
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <span>{isAvailable ? 'Start Learning' : 'Stay Tuned'}</span>
                      {isAvailable && <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Why cn2code Section ─── */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
                Why cn2code?
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-base">
                Built by developers, for developers. Here's what makes us different.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Structured Learning', desc: 'No random tutorials. Each course follows a logical progression from fundamentals to mastery, just like a university curriculum.', emoji: '📐' },
                { title: 'Completely Free', desc: 'All courses, modules, and content are 100% free. No hidden paywalls, no premium tiers, no subscriptions.', emoji: '🆓' },
                { title: 'Beginner Friendly', desc: 'Every concept explained with real-world analogies, visual diagrams, and practical code examples you can follow along with.', emoji: '🎯' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Banner ─── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-slate-950 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Ready to Start Learning?
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-base">
                Jump into the Java & Spring Boot course — 36 modules of structured content waiting for you.
              </p>
              <button 
                onClick={() => navigate('/java')}
                className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-400 transition-all active:scale-95 group text-[15px] shadow-lg shadow-emerald-500/25"
              >
                Start Java Course
                <ChevronRight size={18} className="inline-block ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
