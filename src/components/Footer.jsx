import { Youtube, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2 text-indigo-600">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                <Zap className="text-white w-5 h-5 fill-white/20" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">cn2code</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering developers worldwide with world-class, premium courses and interactive learning experiences. Master the skills that matter.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-4 tracking-wide uppercase text-xs">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Browse Courses</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-4 tracking-wide uppercase text-xs">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@cn2tech27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-rose-100 hover:text-rose-600 transition-colors shadow-sm"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} cn2code. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
