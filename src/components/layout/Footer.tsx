import { Logo } from "../common/Logo";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Logo className="text-white [&>span]:text-white [&>svg]:text-blue-500 [&>svg]:fill-transparent" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              DyexaLabs provides cutting-edge IT consulting services to help businesses thrive in the digital age. 
              Your partner in digital transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/cloud" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Cloud Solutions</Link></li>
              <li><Link to="/services/security" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Cybersecurity</Link></li>
              <li><Link to="/services/implementation" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Software Development</Link></li>
              <li><Link to="/services/data" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Data Analytics</Link></li>
              <li><Link to="/services/consulting" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>IT Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Careers <span className="text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded ml-2">Hiring</span></Link></li>
              <li><Link to="/resources" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Scan to Visit</h3>
            <div className="bg-white p-2 rounded-lg inline-block mb-4">
              <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://dyexalabs.netlify.app" 
                 alt="Dyexa Website QR" 
                 className="w-32 h-32"
               />
            </div>
            <p className="text-xs text-slate-500">DyexaLabs Official Websites.</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} DyexaLabs Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
             <form className="flex gap-2">
               <input 
                 type="email" 
                 placeholder="Subscribe to newsletter" 
                 className="bg-slate-800 border-none rounded px-3 py-2 text-sm text-white focus:ring-1 focus:ring-blue-500 w-48 placeholder:text-slate-500"
               />
               <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Join</Button>
             </form>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        variant="secondary"
        size="icon"
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full h-12 w-12 shadow-lg hover:shadow-blue-900/20 transition-all hover:-translate-y-1"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </footer>
  );
};