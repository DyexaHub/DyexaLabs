import { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { services, type ServiceCategory, type Service } from "../data/services";
import { ServiceCard } from "../components/ui/ServiceCard";
import { 
  Code, Layout, Lightbulb, Search, Globe, Users, TrendingUp, ShieldCheck, 
  ArrowLeft, X, ChevronRight, Zap, Target, Layers, ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "../components/ui/utils";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const categories: (ServiceCategory | "All")[] = ["All", "Strategy", "Engineering", "Data & AI", "Design"];

const stats = [
  { label: "Enterprise Clients", value: "50+", icon: Users },
  { label: "Projects Delivered", value: "200+", icon: Globe },
  { label: "Avg ROI", value: "300%", icon: TrendingUp },
  { label: "Security Score", value: "A+", icon: ShieldCheck },
];

interface ServicesProps {
  onBack: () => void;
}

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
  </div>
);

const BlueprintAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M0,20 Q50,0 100,20"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,50 Q50,30 100,50"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 4, delay: 0.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,80 Q50,60 100,80"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3.5, delay: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-32 h-32 border border-blue-200/50 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-48 h-48 border border-purple-200/50 rounded-full"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
    </div>
  );
};

export const Services = ({ onBack }: ServicesProps) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedService]);

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative font-sans" ref={containerRef}>
      
      {/* Back Button - Light Theme */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack} 
        className="fixed top-6 left-6 z-40 p-3 rounded-full bg-white/80 border border-slate-200 text-slate-600 backdrop-blur-md hover:bg-white hover:text-blue-600 hover:shadow-lg transition-all group shadow-sm"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </motion.button>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 w-full overflow-hidden flex flex-col items-center justify-center z-10 min-h-[70vh]">
        <BackgroundGrid />
        <BlueprintAnimation />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-semibold mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              10+ Years of Engineering Excellence
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
                The Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12">
              Architecting digital ecosystems that define the next generation of business. Precision, scalability, and innovation in every line of code.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })} 
                className="group px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all w-full sm:w-auto cursor-pointer shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                Explore Expertise
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Light */}
      <section className="relative z-20 border-y border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <stat.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative z-20 py-32 px-4 bg-slate-50" id="services-grid">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Our Expertise</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We don't just build software; we build digital ecosystems. From strategic consulting to deep-tech engineering, our capabilities cover the entire digital lifecycle.
              </p>
            </div>
            
            {/* Category Filter - Light */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 border backdrop-blur-md cursor-pointer",
                    activeCategory === cat
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section - Light */}
      <section className="py-32 relative overflow-hidden bg-white border-t border-slate-100">
        <div className="absolute inset-0 bg-slate-50/50 skew-y-3 transform origin-top-left scale-110 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">DyexaLabs Methodology</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              A proven framework for delivering excellence at speed, refined over a decade of complex deployments.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 relative">
             {/* Connecting Line */}
            <div className="hidden lg:block absolute top-16 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-300 to-transparent -z-10" />

            {[
              { title: "Discovery", icon: Search, desc: "We deconstruct your challenge to understand the core business value." },
              { title: "Strategy", icon: Lightbulb, desc: "We architect a roadmap that balances ambition with feasibility." },
              { title: "Execution", icon: Code, desc: "We build with agile precision, shipping value in bi-weekly sprints." },
              { title: "Evolution", icon: Layout, desc: "We monitor, measure, and optimize for long-term growth." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative overflow-hidden ring-1 ring-slate-100 group-hover:ring-blue-400">
                  <step.icon className="h-8 w-8 relative z-10" />
                </div>
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 -z-10 select-none group-hover:text-slate-50 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Re-designed Compact CTA */}
      <section className="py-20 relative px-4">
        <div className="container mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-slate-900/20">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
             
             <div className="relative z-10 max-w-2xl text-left">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6 hover:bg-blue-500/30">Ready to Scale?</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Transform your business with <br/>
                  <span className="text-blue-400">DyexaLabs</span> today.
                </h2>
                <p className="text-slate-400 text-lg max-w-lg">
                  Join industry leaders who trust us to engineer their digital future. Schedule a consultation to discuss your vision.
                </p>
             </div>

             <div className="relative z-10 shrink-0">
              <Link to="/contact">
               <button 
                 className="group bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 cursor-pointer"
               >
                 Start a Conversation
                 <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                 </div>
               </button>
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Detail Overlay - Light Mode */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 cursor-pointer"
            />
            <motion.div
              layoutId={`card-${selectedService.id}`}
              className="fixed inset-2 md:inset-8 lg:inset-x-24 lg:inset-y-12 z-60 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-[250px] shrink-0 overflow-hidden bg-slate-900">
                <div className={cn("absolute inset-0 bg-linear-to-r opacity-40", selectedService.color)} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />
                
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors z-20 border border-white/10 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-8 left-8 md:left-12 max-w-4xl z-10">
                   <div className="flex items-center gap-3 mb-6">
                      <div className={cn("p-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20")}>
                        <selectedService.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white border-white/10 text-sm px-3 py-1 font-medium backdrop-blur-md">
                        {selectedService.category}
                      </Badge>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{selectedService.title}</h2>
                   <p className="text-lg text-slate-300 line-clamp-1">{selectedService.description}</p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-white">
                 <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* Left Column: Description & Benefits */}
                    <div className="lg:col-span-8 space-y-12">
                       <section>
                          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-blue-600" />
                            Overview
                          </h3>
                          <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                            {selectedService.longDescription}
                          </p>
                       </section>

                       <section>
                          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                             <Zap className="w-5 h-5 text-amber-500" />
                             Key Benefits
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {selectedService.benefits.map((benefit, i) => (
                              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{benefit.title}</h4>
                                <p className="text-sm text-slate-600">{benefit.desc}</p>
                              </div>
                            ))}
                          </div>
                       </section>

                       <section>
                          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-purple-600" />
                            Our Process
                          </h3>
                          <div className="space-y-0">
                            {selectedService.process.map((step, i) => (
                               <div key={i} className="flex gap-4 group">
                                  <div className="flex flex-col items-center">
                                     <div className="w-8 h-8 rounded-full bg-white text-slate-500 flex items-center justify-center font-bold text-sm border-2 border-slate-200 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors z-10">
                                       {i + 1}
                                     </div>
                                     {i !== selectedService.process.length - 1 && (
                                       <div className="w-0.5 h-16 bg-slate-200 my-1 group-hover:bg-blue-100 transition-colors" />
                                     )}
                                  </div>
                                  <div className="pb-8 pt-1">
                                     <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                                     <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                  </div>
                               </div>
                            ))}
                          </div>
                       </section>
                    </div>

                    {/* Right Column: Sidebar info */}
                    <div className="lg:col-span-4 space-y-8">
                       <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 sticky top-0">
                          <div className="mb-8">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <Code className="w-4 h-4 text-green-600" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedService.technologies.map(tech => (
                                <Badge key={tech} variant="outline" className="bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors py-1.5 px-3">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-8">
                             <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Features</h4>
                             <ul className="space-y-3">
                               {selectedService.features.map(feat => (
                                 <li key={feat} className="flex items-start gap-3 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    {feat}
                                 </li>
                               ))}
                             </ul>
                          </div>

                          {selectedService.caseStudy && (
                            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
                               <div className={cn("absolute top-0 left-0 w-1 h-full bg-linear-to-b", selectedService.color)} />
                               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Success Story</div>
                               <h5 className="font-bold text-slate-900 text-lg mb-1">{selectedService.caseStudy.client}</h5>
                               <div className="text-2xl font-bold text-blue-600 mb-3">{selectedService.caseStudy.result}</div>
                               <p className="text-xs text-slate-500 leading-relaxed italic border-t border-slate-100 pt-3">
                                  "{selectedService.caseStudy.desc}"
                               </p>
                            </div>
                          )}
                          
                          <Link to="/contact">
                            <button
                               className="w-full mt-6 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10 cursor-pointer flex items-center justify-center gap-2 group"
                            >
                               Book Consultation
                               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </Link>
                       </div>
                    </div>

                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
