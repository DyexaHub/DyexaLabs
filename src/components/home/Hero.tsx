import { ArrowRight, CheckCircle2, MousePointer2 } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Reveal } from "../common/Reveal";
import { ParticlesBackground } from "../effects/ParticlesBackground";
import { TypingEffect } from "../effects/TypingEffect";
import { MagneticButton } from "../effects/MagneticButton";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRpbmclMjB0ZWFtJTIwbWVldGluZyUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ3NDM0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1614508569207-3295ac89d75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjQ3MzYxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-slate-50 overflow-hidden pt-14 pb-24 lg:pt-27 lg:pb-32 min-h-[90vh] flex items-center">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Leading IT Consultancy
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                We are Experts in <br/>
                <span className="text-blue-600">
                  <TypingEffect words={["Cloud Solutions", "Cyber Security", "Data Science", "IT Strategy"]} />
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                DyexaLabs transforms complex technological challenges into streamlined, efficient solutions. 
                We specialize in enterprise software, cloud infrastructure, and cybersecurity to propel your business forward.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <MagneticButton>
                  <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 rounded-full text-lg shadow-lg shadow-blue-600/30">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                </MagneticButton>
                <Link to="/work">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 text-lg">
                  View Case Studies
                </Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex items-center gap-6 text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 h-5 w-5" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 h-5 w-5" />
                  <span>Certified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 h-5 w-5" />
                  <span>Global Reach</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image Slider & 3D-like Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative h-[400px] lg:h-[600px] w-full perspective-1000"
          >
             <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform transition-transform hover:scale-[1.02] duration-500">
               {images.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt="DyexaLabs Office"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: index === currentImage ? 1 : 0,
                      scale: index === currentImage ? 1 : 1.1
                    }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
               ))}
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 gradient-to-tr from-blue-900/40 to-transparent pointer-events-none" />
               
               {/* Floating Card Overlay */}
               <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 1, duration: 0.8 }}
                 className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/50 hidden md:block"
               >
                 <div className="flex items-center gap-4">
                   <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                     <MousePointer2 className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900">Interactive Solutions</h3>
                     <p className="text-sm text-slate-600">Drag and drop cloud architecture builder.</p>
                   </div>
                 </div>
               </motion.div>
             </div>
             
             {/* Abstract Shapes */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" 
             />
             <motion.div 
               animate={{ y: [0, 30, 0] }}
               transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
               className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" 
             />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-slate-300"></div>
        </motion.div>
      </div>
    </section>
  );
};
