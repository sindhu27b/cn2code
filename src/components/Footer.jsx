import { Youtube, Zap, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Zap className="text-white w-5 h-5 fill-white/20" />
              </div>
              <span className="font-black text-xl tracking-tight text-white">cn2code</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Structured, project-based learning paths for developers. 
              Free forever — no paywalls, no subscriptions.
            </p>
            {/* YouTube Button */}
            <a
              href="https://www.youtube.com/@cn2tech27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-slate-300 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-all group"
            >
              <Youtube size={18} />
              <span>Subscribe on YouTube</span>
              <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-5">Courses</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/java" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Java & Spring Boot
                </Link>
              </li>
              <li>
                <span className="text-slate-600 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Angular
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-slate-800 px-1.5 py-0.5 rounded">Soon</span>
                </span>
              </li>
              <li>
                <span className="text-slate-600 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  Git & Version Control
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 bg-slate-800 px-1.5 py-0.5 rounded">Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-5">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.youtube.com/@cn2tech27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  YouTube Channel
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5"></div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-600">
            © {new Date().getFullYear()} cn2code. All rights reserved.
          </p>
          <p className="text-[12px] text-slate-700 flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500 fill-red-500" /> for developers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
