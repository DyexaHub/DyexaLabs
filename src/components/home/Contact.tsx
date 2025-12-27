import { useState} from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Check, MapPin, Phone, Mail, Upload, Loader2, ChevronRight, AlertCircle } from "lucide-react";
import { cn } from "../ui/utils";

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    customProjectType: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(""); // Clear error on change
  };

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (!formData.name.trim()) return "Please enter your name.";
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email address.";
    }
    if (currentStep === 2) {
      if (!formData.projectType) return "Please select a project type.";
      if (formData.projectType === "Others" && !formData.customProjectType.trim()) return "Please specify your project type.";
      if (!formData.budget) return "Please select a budget range.";
    }
    return "";
  };

  const handleNext = () => {
    const errorMsg = validateStep(step);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setError("");
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
       setError("Please tell us a bit about your project.");
       return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    createConfetti();
  };

  const createConfetti = () => {
    const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#e0f2fe'];
    const container = document.getElementById('confetti-container');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const div = document.createElement('div');
      div.classList.add('absolute', 'w-2', 'h-2', 'rounded-full');
      div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      div.style.left = Math.random() * 100 + '%';
      div.style.top = '-10px';
      div.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
      container.appendChild(div);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
       <style>{`
        @keyframes fall {
          to { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
      
      <div id="confetti-container" className="absolute inset-0 pointer-events-none z-0 overflow-hidden" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Let's Build Something Great</h2>
            <p className="text-lg text-slate-600 mb-12">
              Ready to transform your business? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Visit Us</h4>
                  <p className="text-slate-600">123 Tech Avenue, Suite 500<br />San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Email Us</h4>
                  <p className="text-slate-600">hello@dyexa.com<br />support@dyexa.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-step Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col h-full">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 my-auto"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8">Thank you for reaching out. We'll be in touch shortly.</p>
                <Button onClick={() => { setIsSuccess(false); setStep(1); setFormData({ name: "", email: "", company: "", projectType: "", customProjectType: "", budget: "", message: "" }); }} variant="outline">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col h-full">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-300",
                        step >= s ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                      )}>
                        {s}
                      </div>
                      {s < 3 && <div className={cn("w-12 h-1 mx-2 rounded-full transition-colors duration-300", step > s ? "bg-blue-600" : "bg-slate-100")} />}
                    </div>
                  ))}
                </div>

                <div className="grow">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                        <FloatingInput label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                        <FloatingInput label="Work Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                        <FloatingInput label="Company Name" name="company" value={formData.company} onChange={handleChange} />
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {["Cloud Migration", "App Dev", "Security Audit", "Consulting", "Data Analytics", "Others"].map(type => (
                            <div 
                              key={type}
                              onClick={() => setFormData(p => ({ ...p, projectType: type }))}
                              className={cn(
                                "p-3 border rounded-lg cursor-pointer text-sm text-center transition-colors",
                                formData.projectType === type ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 hover:border-blue-300"
                              )}
                            >
                              {type}
                            </div>
                          ))}
                        </div>
                        
                        <AnimatePresence>
                          {formData.projectType === "Others" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                               <FloatingInput 
                                  label="Please specify" 
                                  name="customProjectType" 
                                  value={formData.customProjectType} 
                                  onChange={handleChange} 
                                  className="mb-4"
                               />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <select 
                          name="budget" 
                          value={formData.budget} 
                          onChange={handleChange}
                          className="w-full p-3 border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="<10k">Less than $10k</option>
                          <option value="10k-50k">$10k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k-250k">$100k - $250k</option>
                          <option value="250k-500k">$250k - $500k</option>
                          <option value="500k+">$500k+</option>
                        </select>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold mb-4">Message & Attachments</h3>
                        <div className="relative border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                          <p className="text-sm text-slate-500">Drag & drop files or browse</p>
                          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                        <Textarea 
                          placeholder="Tell us more about your project goals..." 
                          className="min-h-[100px]"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {error && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }} 
                     animate={{ opacity: 1, y: 0 }}
                     className="text-red-500 text-sm flex items-center gap-2 mt-2 bg-red-50 p-2 rounded"
                   >
                      <AlertCircle className="w-4 h-4" /> {error}
                   </motion.div>
                )}

                <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                  {step > 1 ? (
                    <Button type="button" variant="ghost" onClick={handleBack}>Back</Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {step < 3 ? (
                    <Button type="button" onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                      Next Step <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white min-w-[150px]">
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Request"}
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingInput = ({ label, className, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={cn("relative mt-2", className)}>
      <label 
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none bg-white px-1",
          isFocused || props.value ? "-top-2.5 text-xs text-blue-600 font-medium" : "top-3 text-slate-500"
        )}
      >
        {label}
      </label>
      <Input 
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="h-12 border-slate-200 focus-visible:ring-blue-600"
      />
    </div>
  );
};
