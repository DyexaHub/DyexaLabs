import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "fintech-corp",
    client: "FinTech Corp",
    title: "Cloud Migration & Security Overhaul",
    category: "Banking",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    results: ["99.99% Uptime Achieved", "30% Cost Reduction", "ISO 27001 Compliant"],
    description: "Migrated a legacy mainframe banking system to a microservices architecture on AWS, ensuring zero downtime and enhanced security protocols."
  },
  {
    id: "healthplus",
    client: "HealthPlus",
    title: "AI-Powered Diagnostic Platform",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    results: ["2x Faster Diagnosis", "HIPAA Compliant", "500k+ Patients Served"],
    description: "Built a secure, scalable platform for doctors to analyze patient data using machine learning algorithms, improving diagnostic accuracy."
  },
  {
    id: "logistream",
    client: "LogiStream",
    title: "Global Supply Chain Tracking",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    results: ["Real-time Tracking", "15% Efficiency Gain", "Automated Reporting"],
    description: "Developed an IoT-enabled dashboard for tracking shipments globally in real-time, integrating with custom hardware sensors."
  }
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-white min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-slate-600">
            Real-world challenges solved with engineering excellence. 
            See how we've helped companies across industries achieve their goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Link to={`/work/${project.id}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-slate-900 hover:bg-white">{project.category}</Badge>
                </div>
              </div>
              
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">{project.client}</h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {project.results.map((res, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                      <span className="block text-blue-700 font-semibold text-sm">{res}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={`/work/${project.id}`}>
                  <Button variant="outline" className="gap-2 group-hover:border-blue-600 group-hover:text-blue-600">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <Link to="/contact">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              Request Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
