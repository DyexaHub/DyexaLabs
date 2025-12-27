import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Cpu, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const cases: Record<string, any> = {
  "fintech-corp": {
    title: "Cloud Migration & Security Overhaul",
    client: "FinTech Corp",
    industry: "Banking & Finance",
    services: ["Cloud Migration", "Cybersecurity", "DevOps"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Reduction", value: "30%" },
      { label: "Security Score", value: "A+" }
    ],
    challenge: "FinTech Corp was operating on a legacy mainframe system that was becoming increasingly expensive to maintain and difficult to secure. They needed to migrate to a modern cloud architecture without interrupting their 24/7 banking services.",
    solution: "We implemented a 'Strangler Fig' migration strategy, gradually moving services to AWS microservices while keeping the legacy system running. We also implemented a Zero Trust security model and automated compliance reporting.",
    results: "The migration was completed in 12 months with zero downtime. The new architecture handles 10x the transaction volume at 70% of the previous cost."
  },
  "healthplus": {
    title: "AI-Powered Diagnostic Platform",
    client: "HealthPlus",
    industry: "Healthcare",
    services: ["AI/ML", "Web Development", "HIPAA Compliance"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Diagnosis Speed", value: "2x Faster" },
      { label: "Accuracy", value: "98.5%" },
      { label: "Patients Served", value: "500k+" }
    ],
    challenge: "Doctors were spending too much time analyzing raw data instead of treating patients. HealthPlus needed a tool to pre-analyze diagnostic imaging and flag potential issues.",
    solution: "We built a secure, HIPAA-compliant platform using Python and TensorFlow. The system uses computer vision to detect anomalies in X-rays and MRIs, presenting them to doctors for review.",
    results: "Diagnostic throughput doubled, allowing doctors to see more patients. The system has maintained 100% compliance with patient data regulations."
  },
  "logistream": {
    title: "Global Supply Chain Tracking",
    client: "LogiStream",
    industry: "Logistics",
    services: ["IoT", "Real-time Data", "Mobile App"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Efficiency", value: "+15%" },
      { label: "Lost Cargo", value: "-40%" },
      { label: "API Response", value: "<50ms" }
    ],
    challenge: "LogiStream had no real-time visibility into their cargo once it left the warehouse. Customers were frustrated by delayed updates and lost shipments.",
    solution: "We developed an IoT solution using custom sensors and a high-performance Golang backend. A React Native mobile app allows drivers and warehouse staff to scan and update status instantly.",
    results: "Real-time tracking is now a key competitive advantage. Customer satisfaction scores increased by 40 points within 6 months."
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const data = id ? cases[id] : null;

  if (!data) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/work"><Button>Back to Our Work</Button></Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white min-h-screen"
    >
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <Link to="/work" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Link>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">{data.industry}</Badge>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600 font-medium">{data.client}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">{data.title}</h1>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[70vh] relative mb-20">
         <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_350px] gap-16">
          {/* Main Content */}
          <div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <div className="w-8 h-1 bg-blue-600 mr-4"></div> The Challenge
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{data.challenge}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <div className="w-8 h-1 bg-blue-600 mr-4"></div> Our Solution
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{data.solution}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <div className="w-8 h-1 bg-blue-600 mr-4"></div> Results
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{data.results}</p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {data.stats.map((stat: any, i: number) => (
                  <div key={i} className="bg-slate-900 text-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 sticky top-24">
                <h3 className="font-bold text-lg mb-6">Project Details</h3>
                
                <div className="space-y-6">
                   <div>
                     <div className="flex items-center gap-2 text-slate-500 mb-2 text-sm">
                        <Globe className="w-4 h-4" /> Client
                     </div>
                     <div className="font-semibold text-slate-900">{data.client}</div>
                   </div>
                   
                   <div>
                     <div className="flex items-center gap-2 text-slate-500 mb-2 text-sm">
                        <BarChart3 className="w-4 h-4" /> Industry
                     </div>
                     <div className="font-semibold text-slate-900">{data.industry}</div>
                   </div>

                   <div>
                     <div className="flex items-center gap-2 text-slate-500 mb-2 text-sm">
                        <Cpu className="w-4 h-4" /> Technologies
                     </div>
                     <div className="flex flex-wrap gap-2">
                       {data.services.map((tech: string) => (
                         <Badge key={tech} variant="secondary" className="bg-white border border-slate-200">{tech}</Badge>
                       ))}
                     </div>
                   </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold mb-4">Ready to achieve similar results?</h4>
                  <Link to="/contact">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Start a Project</Button>
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyDetail;
