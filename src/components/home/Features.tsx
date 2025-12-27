import { Cloud, Shield, Code, Database, BarChart, Cpu, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "cloud-infrastructure",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure design and migration strategies tailored for enterprise needs.",
    icon: Cloud,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Advanced threat protection, penetration testing, and security compliance audits.",
    icon: Shield,
  },
  {
    id: "custom-software",
    title: "Software Development",
    description: "Custom software solutions including web apps, mobile apps, and legacy system modernization.",
    icon: Code,
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform raw data into actionable business insights with our advanced analytics tools.",
    icon: BarChart,
  },
  {
    id: "database-management",
    title: "Database Management",
    description: "Secure and efficient database architecture, optimization, and maintenance.",
    icon: Database,
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure",
    description: "Robust hardware and network solutions to keep your business running without interruption.",
    icon: Cpu,
  }
];

interface FeaturesProps {
  onNavigate: (page: string) => void;
}

export const Features = ({ onNavigate }: FeaturesProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Discover how DyexaLabs can elevate your business with our range of specialized services. 
            From cloud migration to custom software, we have you covered.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 h-full hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <Link to="/services">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-blue-600 font-semibold group-hover:translate-x-1 transition-transform"
                    onClick={() => onNavigate('services')}
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
