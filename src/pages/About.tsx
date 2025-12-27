import CEO from '/dyexalabs_co.jpeg';
import React, { useState, useEffect } from "react";
import { 
  motion, 
  useScroll,  
  useSpring, 
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "motion/react";
import { 
  Cpu, ArrowRight, 
  ShieldCheck, Code, 
  Leaf, Server, Cloud, Database, 
  Layers, Atom, Terminal, 
  Github, ArrowUp, Hexagon, Octagon, CircleDashed
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

// --- Types & Interfaces ---

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

interface Milestone {
  year: string;
  title: string;
  desc: string;
  category: "Growth" | "Innovation" | "Award" | "Expansion" | "Product";
  image?: string;
}

interface Office {
  city: string;
  country: string;
  address: string;
  timezone: string;
  coordinates: { x: number; y: number };
}


// --- Data Configuration ---

const leadership: Leader[] = [
  {
    name: "Andrean Irfan Dyexa Rahardika",
    role: "Founder & CEO",
    bio: "Former CTO with 15+ years in FinTech. Passionate about sustainable tech architecture.",
    image: CEO,
    specialty: "Strategy"
  },
  {
    name: "Jensen Huang",
    role: "CTO",
    bio: "Visionary leader in AI and GPU computing, driving innovation at DyexaLabs.",
    image: "https://cdn.britannica.com/60/257460-050-62FF74CB/NVIDIA-Jensen-Huang.jpg?w=385",
    specialty: "AI & Compute"
  },
  {
    name: "Linus Torvalds",
    role: "Lead Advisor",
    bio: "Operational wizard ensuring our projects are delivered on time. Creator of the Linux kernel.",
    image: "https://tse4.mm.bing.net/th/id/OIP.Calob5zBdoIqRhLmveXWggHaFH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    specialty: "Open Source"
  },
  {
    name: "Mark Zuckerberg",
    role: "Innovation Strategist",
    bio: "Innovator in social media and philanthropy-driven technology solutions.",
    image: "https://wallpaperaccess.com/full/2247901.jpg",
    specialty: "Consumer Tech"
  },
  {
    name: "William Henry Gates",
    role: "Executive Chairman",
    bio: "Pioneer in software development and global technology initiatives.",
    image: "https://static.timesofisrael.com/atlantajewishtimes/uploads/2020/12/ART-bill-gates-headshot-new-12-31-20.jpg",
    specialty: "Global Scale"
  },
  {
    name: "Jack Ma",
    role: "Lead Architect",
    bio: "20+ years designing high-scale distributed systems.",
    image: "https://tse3.mm.bing.net/th/id/OIP.gOewNmTT_DXPpxBoQhjiQAHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    specialty: "E-Commerce"
  }
];

const history: Milestone[] = [
  { 
    year: "2015", 
    title: "The Genesis", 
    desc: "Founded in a San Francisco garage. 3 engineers, 1 vision to rewrite the rules of consultancy.",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1630673489068-d329fa4e2767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  { 
    year: "2018", 
    title: "SOC2 Compliance", 
    desc: "Achieved SOC2 Type II compliance. Security became our second nature.",
    category: "Award"
  },
  { 
    year: "2019", 
    title: "Global Expansion", 
    desc: "London office opens. Team grows to 25 engineers serving top-tier EU banks.",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1760940358966-d1a972bafb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  { 
    year: "2021", 
    title: "The AI Pivot", 
    desc: "Launched dedicated AI/ML division before it was cool. Built the 'Neural Core'.",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1750365919878-2735d30fa3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  { 
    year: "2025", 
    title: "Dyexa Today", 
    desc: "100+ transformations delivered. Valuation $500M. The story is just beginning.",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1527980473913-566fcaa9e34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

const offices: Office[] = [
  { city: "San Francisco", country: "USA", address: "100 Market St", timezone: "PST", coordinates: { x: 20, y: 35 } },
  { city: "London", country: "UK", address: "30 St Mary Axe", timezone: "GMT", coordinates: { x: 48, y: 25 } },
  { city: "Singapore", country: "SG", address: "1 Raffles Pl", timezone: "SGT", coordinates: { x: 78, y: 55 } },
  { city: "Sydney", country: "AU", address: "200 George St", timezone: "AEST", coordinates: { x: 88, y: 80 } },
  { city: "Berlin", country: "DE", address: "Potsdamer Pl", timezone: "CET", coordinates: { x: 52, y: 22 } },
  { city: "Tokyo", country: "JP", address: "Roppongi Hills", timezone: "JST", coordinates: { x: 85, y: 32 } },
  { city: "São Paulo", country: "BR", address: "Av. Paulista", timezone: "BRT", coordinates: { x: 32, y: 70 } }
];

// --- Sub-Components ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(latest > 500);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-blue-600 transition-colors z-40 border border-slate-700"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Helper hook for scroll events
function useMotionValueEvent(value: any, event: string, callback: (latest: any) => void) {
  useEffect(() => {
    const unsubscribe = value.on(event, callback);
    return () => unsubscribe();
  }, [value, event, callback]);
}

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white selection:bg-blue-500 selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <motion.div 
           className="absolute inset-0 opacity-30"
           style={{
             background: useMotionTemplate`
               radial-gradient(
                 650px circle at ${mouseX}px ${mouseY}px,
                 rgba(59, 130, 246, 0.15),
                 transparent 80%
               )
             `
           }}
         />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
         
         {/* Floating Elements */}
         <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"
         />
         <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"
         />
      </div>

      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-slate-400 text-xs tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              System Online: DyexaLabs
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 leading-tight font-sans text-slate-100"
          >
            Pioneering the Future of <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-300 via-indigo-300 to-purple-300 animate-gradient-x">
              Digital Business
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Architects of the digital age. We blend strategic innovation with engineering excellence to build resilient ecosystems.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="flex justify-center"
          >
             <div className="flex flex-col items-center gap-2 opacity-50">
                <div className="w-px h-16 bg-linear-to-b from-transparent via-slate-500 to-transparent relative overflow-hidden">
                   <motion.div 
                      className="absolute top-0 w-full h-1/2 bg-white blur-[1px]"
                      animate={{ top: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                   />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500">Initialize</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LiveMetricsSection = () => {
  const [commits, setCommits] = useState(14205);
  const [uptime] = useState(99.999);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCommits(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800 relative z-20 -mt-20 mx-4 md:mx-12 rounded-2xl shadow-2xl backdrop-blur-xl bg-opacity-80">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
        <div className="px-6 py-4 text-center">
          <div className="text-2xl font-mono font-bold text-white mb-1">{commits.toLocaleString()}</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <Github size={12} /> Commits
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="text-2xl font-mono font-bold text-green-400 mb-1">{uptime}%</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <Server size={12} /> Uptime
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="text-2xl font-mono font-bold text-blue-400 mb-1">750TB+</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <Database size={12} /> Data/Day
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="text-2xl font-mono font-bold text-purple-400 mb-1">0ms</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldCheck size={12} /> Breaches
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: Tech Radar Visualizer ---
const TechRadar = () => {
  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950" />
      
      <div className="container mx-auto px-4 relative z-10">
         <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/3">
               <span className="text-blue-500 font-mono text-xs tracking-widest mb-2 block uppercase">Capability Radar</span>
               <h2 className="text-4xl font-bold mb-6">Cutting-Edge Stack</h2>
               <p className="text-slate-400 leading-relaxed mb-8">
                  We don't just follow trends; we set them. Our technology radar constantly scans for emerging tools that provide tangible leverage for our clients.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                     <span className="text-sm font-medium">Core: Stable, production-ready (React, AWS, Go)</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75" />
                     <span className="text-sm font-medium">Adopt: Rapidly scaling (Rust, Kubernetes, GraphQL)</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-150" />
                     <span className="text-sm font-medium">Assess: Experimental R&D (Quantum, Web3)</span>
                  </div>
               </div>
            </div>

            <div className="lg:w-2/3 relative flex items-center justify-center min-h-[500px]">
               {/* Radar Rings */}
               <div className="absolute border border-slate-800 rounded-full w-[200px] h-[200px]" />
               <div className="absolute border border-slate-800 rounded-full w-[400px] h-[400px]" />
               <div className="absolute border border-slate-800 rounded-full w-[600px] h-[600px] opacity-50" />
               
               {/* Rotating Scanner Line */}
               <motion.div 
                 className="absolute w-[300px] h-[300px] bg-linear-to-r from-blue-500/20 to-transparent"
                 style={{ originX: 0, originY: 0, left: "50%", top: "50%", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               />

               {/* Tech Nodes */}
               <div className="relative z-10">
                  {/* Center Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_#2563eb]">
                     <Octagon className="text-white" size={32} />
                  </div>

                  {/* Inner Orbit (Core) */}
                  <TechNode icon={<Code size={16} />} label="React" x={-60} y={-40} color="text-blue-400" />
                  <TechNode icon={<Database size={16} />} label="Postgres" x={60} y={-40} color="text-blue-400" />
                  <TechNode icon={<Cloud size={16} />} label="AWS" x={0} y={80} color="text-blue-400" />

                  {/* Middle Orbit (Adopt) */}
                  <TechNode icon={<Cpu size={16} />} label="Rust" x={-140} y={60} color="text-purple-400" delay={0.5} />
                  <TechNode icon={<Layers size={16} />} label="K8s" x={140} y={60} color="text-purple-400" delay={0.7} />
                  <TechNode icon={<Terminal size={16} />} label="Go" x={0} y={-150} color="text-purple-400" delay={0.3} />

                  {/* Outer Orbit (Assess) */}
                  <TechNode icon={<Atom size={16} />} label="Quantum" x={-220} y={-80} color="text-emerald-400" delay={1} />
                  <TechNode icon={<Hexagon size={16} />} label="Web3" x={220} y={-80} color="text-emerald-400" delay={1.2} />
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

const TechNode = ({ icon, label, x, y, color, delay = 0 }: any) => (
   <motion.div
      className={`absolute flex flex-col items-center gap-2 ${color}`}
      style={{ x, y }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring" }}
   >
      <div className="p-3 bg-slate-900 border border-slate-700 rounded-full hover:border-white transition-colors cursor-pointer">
         {icon}
      </div>
      <span className="text-xs font-mono font-bold bg-slate-900 px-2 py-0.5 rounded">{label}</span>
   </motion.div>
);

// --- NEW COMPONENT: Enhanced Timeline ---
const EnhancedHistory = () => {
   useScroll();
   
   return (
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="text-center mb-24">
               <h2 className="text-4xl font-bold text-slate-900 mb-4">The Timeline</h2>
               <p className="text-slate-500">From humble beginnings to global dominance.</p>
            </div>

            <div className="relative">
               {/* Center Line */}
               <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

               <div className="space-y-32">
                  {history.map((item, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                     >
                        {/* Text Side */}
                        <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'}`}>
                           <div className="max-w-md">
                              <span className="text-6xl font-black text-slate-100 block -mb-4 relative z-0">{item.year}</span>
                              <div className="relative z-10">
                                 <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                 <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                        </div>

                        {/* Center Point */}
                        <div className="relative z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_0_8px_rgba(255,255,255,1)]">
                           <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        </div>

                        {/* Image Side */}
                        <div className="md:w-1/2">
                           {item.image && (
                              <div className={`relative max-w-md ${i % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                 <div className="absolute inset-0 bg-blue-600/5 translate-x-4 translate-y-4 rounded-2xl" />
                                 <img src={item.image} alt={item.title} className="relative rounded-2xl shadow-xl border border-slate-100 grayscale hover:grayscale-0 transition-all duration-500" />
                              </div>
                           )}
                           {!item.image && (
                              <div className={`h-px w-32 bg-slate-200 ${i % 2 === 0 ? 'mr-auto' : 'ml-auto'}`} />
                           )}
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

// --- NEW COMPONENT: DNA / Core Values (Replaces Culture) ---
const DyexaDNA = () => {
   const pillars = [
      { 
         title: "Radical Transparency", 
         desc: "We share everything. Code, costs, and challenges. No black boxes.",
         icon: CircleDashed
      },
      { 
         title: "Sustainable Innovation", 
         desc: "We build tech that lasts. Clean code, green hosting, scalable arch.",
         icon: Leaf
      },
      { 
         title: "Security First", 
         desc: "We assume breach. Zero trust architecture is our default state.",
         icon: ShieldCheck
      }
   ];

   return (
      <section className="py-32 bg-slate-50 border-y border-slate-200">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
               <div className="lg:w-1/3">
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">The Dyexa DNA</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                     Culture isn't about ping pong tables or free coffee. It's about how we make decisions when no one is watching. These are the three pillars that hold up our entire organization.
                  </p>
               </div>
               <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
                  {pillars.map((p, i) => (
                     <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                           <p.icon size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">{p.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

// --- NEW COMPONENT: Enhanced Leadership (Slider/Cards) ---
const Visionaries = () => {
   return (
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-bold text-slate-900 mb-4">The Visionaries</h2>
               <p className="text-slate-500">Decades of experience. One mission.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {leadership.map((leader, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer"
                  >
                     {/* Background Image */}
                     <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     />
                     
                     {/* Gradient Overlay */}
                     <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                     {/* Content */}
                     <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Badge className="bg-blue-600 mb-3">{leader.specialty}</Badge>
                        <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                        <p className="text-blue-300 font-medium mb-4">{leader.role}</p>
                        
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                           <p className="text-slate-300 text-sm leading-relaxed mb-4">
                              {leader.bio}
                           </p>
                           <Button size="sm" variant="secondary" className="w-full">
                              View Profile <ArrowRight size={14} className="ml-2" />
                           </Button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

// --- NEW COMPONENT: Future Roadmap ---
const FutureRoadmap = () => {
   return (
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div className="max-w-2xl">
                  <h2 className="text-4xl font-bold mb-4">Vision 2030</h2>
                  <p className="text-slate-400">Our roadmap for the next decade of digital evolution.</p>
               </div>
               <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">
                  CONFIDENTIAL - EXTERNAL
               </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { year: "2026", title: "Autonomous Enterprise", desc: "Self-healing infrastructure becomes standard for all clients." },
                  { year: "2028", title: "Quantum Supremacy", desc: "Commercial deployment of Dyexa Quantum Security protocol." },
                  { year: "2030", title: "Sentient Interfaces", desc: "AI-driven UX that adapts in real-time to user emotion." }
               ].map((item, i) => (
                  <div key={i} className="relative p-8 border border-slate-800 bg-slate-900/30 rounded-2xl hover:bg-slate-900 transition-colors group">
                     <div className="text-6xl font-black text-slate-800 group-hover:text-slate-700 transition-colors absolute top-4 right-4">{item.year}</div>
                     <div className="relative z-10 pt-12">
                        <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                     </div>
                     <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-b-2xl" />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

// --- Main Component ---

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen font-sans overflow-x-hidden"
    >
      <ScrollProgress />
      
      <HeroSection />
      <LiveMetricsSection />
      
      <div className="space-y-0">
        <DyexaDNA />
        <TechRadar />
        <EnhancedHistory />
        <Visionaries />
        <FutureRoadmap />
        <GlobalMap />
      </div>

      <BackToTop />
      
      <div className="w-full h-1.5 bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500" />
    </motion.div>
  );
};

// Added GlobalMap component back in to fix the reference error
const GlobalMap = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
       <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12">
             <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-6">Global Presence</h2>
                <div className="space-y-4">
                   {offices.slice(0, 4).map((off, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:shadow-[0_0_10px_#3b82f6] transition-shadow" />
                            <span className="font-medium">{off.city}</span>
                         </div>
                         <span className="text-xs text-slate-500 font-mono">{off.timezone}</span>
                      </div>
                   ))}
                </div>
             </div>
             
             <div className="md:w-2/3 relative h-[400px] bg-slate-900/50 rounded-2xl border border-slate-800 p-4">
                {/* Abstract Map Dots */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center mix-blend-overlay contrast-200" />
                
                {offices.map((off, i) => (
                   <motion.div
                     key={i}
                     className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-950 cursor-pointer"
                     style={{ left: `${off.coordinates.x}%`, top: `${off.coordinates.y}%` }}
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     whileHover={{ scale: 1.5 }}
                     transition={{ delay: i * 0.1, type: "spring" }}
                   >
                      <div className="absolute -inset-2 bg-blue-500/30 rounded-full animate-ping" />
                   </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default About
