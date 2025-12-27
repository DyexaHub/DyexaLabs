import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { type Service } from "../../data/services";
import { Badge } from "./badge";
import { cn } from "./utils";

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick: () => void;
}

export const ServiceCard = ({ service, index, onClick }: ServiceCardProps) => {
  return (
    <motion.div
      layoutId={`card-${service.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onClick={onClick}
      className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer h-full"
    >
      {/* Hover Gradient Background - Very Subtle */}
      <div className={cn(
        "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
        service.color
      )} />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={cn(
            "p-3.5 rounded-2xl bg-slate-50 text-slate-600 group-hover:text-white transition-all duration-300 shadow-sm ring-1 ring-slate-100",
            `group-hover:bg-linear-to-br ${service.color} group-hover:shadow-md group-hover:ring-0 group-hover:scale-110`
          )}>
            <service.icon className="w-8 h-8" />
          </div>
          
          <div className="flex items-center gap-2">
             <Badge variant="secondary" className="bg-slate-100 text-slate-500 text-[10px] uppercase tracking-wider font-bold px-2 py-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
               {service.category}
             </Badge>
             <div className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all bg-white">
               <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
             </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-700">
          {service.description}
        </p>

        {/* Mini Feature List */}
        <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
           {service.features.slice(0, 3).map((feature, i) => (
             <div key={i} className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-600 font-medium">
               <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
               {feature}
             </div>
           ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between">
         <div className="flex -space-x-2">
            {service.technologies.slice(0, 3).map((tech) => (
              <div key={tech} className="h-6 px-2 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[10px] font-medium text-slate-500 shadow-sm relative z-0 group-hover:z-10 transition-all">
                {tech}
              </div>
            ))}
         </div>
         <span className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 flex items-center gap-1">
            Explore <ArrowUpRight className="w-3 h-3" />
         </span>
      </div>
    </motion.div>
  );
};
