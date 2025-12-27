import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "../data/services";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, CheckCircle2, ArrowRight, Zap, Code, } from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../components/ui/utils";
import { useEffect, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      
      {/* Immersive Parallax Hero */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-slate-900 flex items-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
           <div className={cn("absolute inset-0 bg-linear-to-br opacity-20 mix-blend-screen", service.color)} />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
           {/* Abstract Shapes */}
           <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]" />
           <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 pt-20">
          <Link to="/services" className="inline-flex items-center text-sm font-bold text-white/60 hover:text-white transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-blue-400 font-bold tracking-wider uppercase">{service.category}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-white text-slate-900 hover:bg-blue-50 border-0 font-bold rounded-full">
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-sm">
                View Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-[1fr_400px] gap-20">
          
          {/* Main Content Column */}
          <div className="space-y-24">
            
            {/* Long Description */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-blue-600" />
                <span className="font-bold text-slate-400 uppercase tracking-widest text-sm">Overview</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Redefining what's possible with {service.title}
              </h2>
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-8">
                <p className="whitespace-pre-line text-lg">
                  {service.longDescription}
                </p>
                <p>
                  At DyexaLabs, we believe that successful implementation requires more than just technical prowess; it demands a deep understanding of your organizational context. Our approach is holistic, considering the people, processes, and technology required to drive sustainable change.
                </p>
              </div>
            </section>

            {/* Process Visualization */}
            <section>
              <div className="flex items-center gap-2 mb-12">
                <div className="h-1 w-12 bg-blue-600" />
                <span className="font-bold text-slate-400 uppercase tracking-widest text-sm">Our Methodology</span>
              </div>
              
              <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-16">
                {service.process.map((step: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; desc: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, i: Key | null | undefined) => (
                  <div key={i} className="relative pl-12 md:pl-16 group">
                    <div className="absolute -left-[9px] top-0 flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full border-2 border-slate-300 bg-white group-hover:border-blue-600 group-hover:scale-125 transition-all" />
                      <div className="w-0.5 h-full bg-slate-200 mt-2" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                       <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         { + 1}
                       </div>
                       <div>
                         <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                           {step.title}
                         </h3>
                         <p className="text-slate-600 leading-relaxed text-lg">
                           {step.desc}
                         </p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">The Dyexa Difference</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b-2 border-slate-200">
                       <th className="py-4 px-4 text-slate-500 font-medium">Feature</th>
                       <th className="py-4 px-4 text-slate-900 font-bold text-lg w-1/3">Standard Agency</th>
                       <th className="py-4 px-4 text-blue-600 font-bold text-lg bg-blue-50/50 rounded-t-xl w-1/3">DyexaLabs</th>
                     </tr>
                   </thead>
                   <tbody>
                     {[
                       { feature: "Strategy", standard: "Generic templates", dyexa: "Custom tailored roadmap" },
                       { feature: "Talent", standard: "Junior developers", dyexa: "Top 1% Senior Engineers" },
                       { feature: "Speed", standard: "Months to MVP", dyexa: "Weeks to Market" },
                       { feature: "Code Quality", standard: "Technical debt heavy", dyexa: "Enterprise-grade & Scalable" },
                       { feature: "Support", standard: "Hourly billing", dyexa: "Partnership model" }
                     ].map((row, i) => (
                       <tr key={i} className="border-b border-slate-200 last:border-0 hover:bg-slate-100/50 transition-colors">
                         <td className="py-4 px-4 font-medium text-slate-700">{row.feature}</td>
                         <td className="py-4 px-4 text-slate-500">{row.standard}</td>
                         <td className="py-4 px-4 font-bold text-slate-900 bg-blue-50/30">{row.dyexa}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </section>

            {/* Case Study Card */}
            {service.caseStudy && (
              <section className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl">
                 <div className="absolute top-0 right-0 w-full h-full bg-linear-to-l from-blue-900/50 to-transparent" />
                 <div className="grid md:grid-cols-2">
                    <div className="p-12 relative z-10 flex flex-col justify-center">
                       <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-xs mb-6">
                         <Zap className="w-4 h-4" /> Success Story
                       </div>
                       <h3 className="text-3xl font-bold mb-4">{service.caseStudy.client}</h3>
                       <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400 mb-6">
                         {service.caseStudy.result}
                       </div>
                       <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                         "{service.caseStudy.desc}"
                       </p>
                       <Button variant="link" className="text-white p-0 h-auto justify-start hover:text-blue-300 font-bold text-lg group">
                         Read Full Case Study <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                       </Button>
                    </div>
                    <div className="bg-slate-800 min-h-[300px] relative">
                       {/* Abstract visual for case study */}
                       <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-50" />
                       </div>
                       {/* Placeholder for actual case study image if we had one */}
                       <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    </div>
                 </div>
              </section>
            )}

            {/* FAQ Section */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "How long does a typical engagement last?", a: "Engagements vary by scope. A discovery phase typically lasts 2-4 weeks, while full implementation can range from 3 to 12 months." },
                  { q: "Do you integrate with our existing team?", a: "Yes. We can work as a standalone delivery unit or augment your existing engineering team, adopting your tools and processes." },
                  { q: "What is your pricing model?", a: "We offer both fixed-bid project pricing and time-and-materials engagements, depending on the clarity of requirements." },
                  { q: "How do you handle IP ownership?", a: "You own the code. Upon final payment, 100% of the intellectual property is transferred to your organization." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200">
                    <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-600 hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="relative">
             <div className="sticky top-24 space-y-8">
                
                {/* Benefits Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
                  <div className="space-y-6">
                    {service.benefits.map((benefit: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; desc: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, i: Key | null | undefined) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 mt-1">
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed mt-1">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" /> Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="rounded-2xl bg-slate-900 p-8 text-white text-center shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Let's Build Something Great</h3>
                    <p className="text-slate-300 text-sm mb-6">
                      Schedule a free 30-minute technical discovery call with our architects.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 rounded-xl">
                      Book Call Now
                    </Button>
                  </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
