import { motion } from "motion/react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare,
  Globe,
  ArrowRight,
  FileCode,
  Rocket,
  Calendar,
  Upload,
  User,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useState } from "react";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in FinTech, Healthcare, Logistics, and SaaS. However, our engineering principles are industry-agnostic and adaptable."
  },
  {
    question: "Do you offer custom software development?",
    answer: "Yes, we specialize in building tailor-made software solutions that align with your business goals and technical requirements."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer both time-and-materials and fixed-price contracts depending on the project scope clarity. We believe in transparent pricing with no hidden fees."
  },
  {
    question: "Can you assist with cloud migration?",
    answer: "No matter your current setup, we can help you plan and execute a smooth migration to cloud platforms like AWS, Azure, or Google Cloud."
  },
  {
    question: "Are DyexaLabs developers available for remote work?",
    answer: "Yes, our developers are available for remote work and can seamlessly integrate with your team regardless of location."
  },
  {
    question: "Support multiple programming languages?",
    answer: "Yes, we support a wide range of programming languages including JavaScript, Python, Java, C#, Go, and more to meet your project needs."
  },
  {
    question: "Is agile methodology used?",
    answer: "Yes, we follow agile methodologies to ensure flexibility, continuous feedback, and iterative progress throughout the project lifecycle."
  },
  {
    question: "Just provide consulting services?",
    answer: "Yes, we offer consulting services to help you strategize and plan your technology initiatives effectively."
  },
  {
    question: "Front-end and back-end development?",
    answer: "Yes, we have expertise in both front-end and back-end development, ensuring seamless integration and performance."
  },
  {
    question: "DyexaLabs office locations?",
    answer: "Our headquarters are in Balikpapan, Indonesia. We also have a distributed team working remotely across multiple time zones to serve global clients."
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely. We often act as an extension of internal teams (staff augmentation) or handle specific components of a larger system."
  },
  {
    question: "What is your typical project timeline?",
    answer: "It varies significantly. A security audit might take 2 weeks, while a full digital transformation could take 6-12 months. We provide detailed timelines during the proposal phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer various support and maintenance packages including 24/7 monitoring and SLA-backed incident response."
  },
  {
    question: "What is your tech stack?",
    answer: "We are technology agnostic but specialize in React, Node.js, Python, Go, AWS, Azure, and Kubernetes."
  },
  {
    question: "How do you ensure data security?",
    answer: "We follow a Zero Trust architecture, implement strict access controls, and regularly perform penetration testing and compliance audits."
  }
];

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We deep dive into your business goals, technical challenges, and user needs to build a solid roadmap.",
    icon: <User className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Strategy & Proposal",
    description: "Our team crafts a tailored technical strategy, timeline, and budget that aligns with your vision.",
    icon: <FileCode className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "Kickoff & Execution",
    description: "We assemble your dedicated team and start building with agile sprints and transparent reporting.",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  }
];

const ContactForm = () => {
  const [formType, setFormType] = useState("message");

  return (
    <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden h-full">
      <Tabs defaultValue="message" className="w-full" onValueChange={setFormType}>
        <div className="bg-slate-900 p-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {formType === 'message' ? <MessageSquare className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                {formType === 'message' ? "Send a Message" : "Schedule a Call"}
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                {formType === 'message' ? "Get a detailed response within 24 hours." : "Pick a time that works for you."}
              </p>
            </div>
            <TabsList className="bg-slate-800 text-slate-400">
              <TabsTrigger value="message" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Message</TabsTrigger>
              <TabsTrigger value="call" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Book Call</TabsTrigger>
            </TabsList>
          </div>
        </div>
        
        <CardContent className="p-8">
          <TabsContent value="message" className="space-y-6 mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input id="firstName" placeholder="John" className="pl-9 bg-slate-50 border-slate-200" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" className="bg-slate-50 border-slate-200" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input id="email" type="email" placeholder="john@company.com" className="pl-9 bg-slate-50 border-slate-200" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest">I'm interested in...</Label>
              <Select>
                <SelectTrigger className="bg-slate-50 border-slate-200">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consulting">IT Consulting</SelectItem>
                  <SelectItem value="dev">Software Development</SelectItem>
                  <SelectItem value="cloud">Cloud Migration</SelectItem>
                  <SelectItem value="security">Cybersecurity Audit</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your project goals, timeline, and budget..." 
                className="min-h-[120px] bg-slate-50 border-slate-200 resize-none" 
              />
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
               <Upload className="w-8 h-8 text-slate-300 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
               <p className="text-xs text-slate-500">Drop files here to attach (RFP, Specs, etc)</p>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-md shadow-lg shadow-blue-600/20">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </TabsContent>

          <TabsContent value="call" className="mt-0">
             <div className="flex flex-col items-center justify-center py-8 space-y-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                   <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                   <h4 className="text-lg font-semibold text-slate-900">Select a Date & Time</h4>
                   <p className="text-slate-500 text-sm">30 Minute Introduction Call</p>
                </div>
                
                {/* Simulated Calendar Visual */}
                <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 grid grid-cols-7 gap-2 text-sm">
                   {['S','M','T','W','T','F','S'].map(d => <div key={d} className="font-bold text-slate-400">{d}</div>)}
                   {Array.from({length: 31}).map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square flex items-center justify-center rounded-md cursor-pointer transition-colors ${i === 14 ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-blue-100 text-slate-700'}`}
                      >
                        {i + 1}
                      </div>
                   ))}
                </div>

                <div className="w-full space-y-3">
                   <Label className="text-left block">Available Slots (Dec 15)</Label>
                   <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">09:00 AM</Button>
                      <Button variant="outline" className="text-slate-600">11:30 AM</Button>
                      <Button variant="outline" className="text-slate-600">02:00 PM</Button>
                   </div>
                </div>

                <Button className="w-full bg-slate-900 hover:bg-slate-800 h-12 mt-4">
                   Confirm Booking
                </Button>
             </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1.5 text-sm font-medium border border-blue-200">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Let's Build Something <span className="text-blue-600">Great</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to transform your digital infrastructure? Our team of experts is standing by to help you achieve your business goals.
            </p>
          </div>

          {/* Step 1, 2, 3 Section - Eye Catching */}
          <div className="mb-24">
             <div className="grid md:grid-cols-3 gap-8 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" />
               
               {steps.map((step, idx) => (
                 <motion.div
                   key={step.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.2 }}
                   className="relative group"
                 >
                   <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
                     <div className={`w-16 h-16 ${step.color} rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                       {step.icon}
                     </div>
                     <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                        {step.id}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                     <p className="text-slate-600 leading-relaxed text-sm">
                       {step.description}
                     </p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-start">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <ContactForm />
            </motion.div>

            {/* Right: Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-10"
            >
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-sm text-slate-500 mb-3">Mon-Fri from 8am to 5pm</p>
                    <a href="tel:+6283153308212" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                      +62 8315 330 8212 <ArrowRight className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-sm text-slate-500 mb-3">Speak to our friendly team</p>
                    <a href="mailto:dyexalabs@gmail.com" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                      dyexalabs@gmail.com <ArrowRight className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-sm text-slate-500 mb-3">Visit our office HQ</p>
                    <a href="#map" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                      View on Google Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-sm text-slate-500 mb-3">We work across timezones</p>
                    <span className="text-slate-900 font-semibold text-sm">
                      24/7 for Critical Support
                    </span>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div id="map" className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="text-red-500" />
                  <h3 className="font-bold text-xl text-slate-900">Our Headquarters</h3>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 h-[300px] relative bg-slate-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127669.17036320083!2d116.78280628385473!3d-1.2422774043940428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14710964d9c91%3A0xcaa6ec96c2aa6d6d!2sBalikpapan%2C%20Balikpapan%20City%2C%20East%20Kalimantan!5e0!3m2!1sen!2sid!4v1701912345678!5m2!1sen!2sid"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DyexaLabs Office Map"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg text-xs font-medium text-slate-600 max-w-[200px]">
                    <p>Balikpapan City, East Kalimantan</p>
                    <p>Indonesia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mb-32">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
               <p className="text-slate-500">Everything you need to know about working with us</p>
             </div>
             
             {/* Infinite Horizontal Scroll FAQ Cards */}
             <div className="relative overflow-hidden w-full py-10 mask-linear-fade">
               <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-slate-50 to-transparent z-10" />
               <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-slate-50 to-transparent z-10" />
               
               <div className="flex w-full overflow-hidden hover:[&>div]:animation-play-state-paused">
                 <motion.div 
                   className="flex gap-6 animate-infinite-scroll shrink-0 pl-6"
                   animate={{ x: ["0%", "-50%"] }}
                   transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                 >
                   {[...faqs, ...faqs].map((faq, idx) => (
                     <div key={idx} className="w-[350px] shrink-0">
                       <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-slate-200 bg-white group cursor-default hover:-translate-y-1">
                         <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 font-bold">?</div>
                         <h3 className="font-bold text-lg mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{faq.question}</h3>
                         <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                       </Card>
                     </div>
                   ))}
                 </motion.div>
               </div>
             </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
              <Globe className="text-blue-600" />
              Quick Connect
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 w-full h-1 bg-green-500" />
                 <div className="mb-6 text-center">
                   <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0 mb-3">WhatsApp</Badge>
                   <h4 className="font-bold text-xl text-slate-900">+62 8315 330 8212</h4>
                   <p className="text-sm text-slate-500 mt-1">Scan to chat instantly</p>
                 </div>
                 <div className="bg-white p-2 rounded-xl shadow-inner border border-slate-100">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://wa.me/6283153308212" 
                      alt="WhatsApp QR Code" 
                      className="w-40 h-40"
                    />
                 </div>
                 <Button variant="ghost" className="mt-6 text-green-600 hover:text-green-700 hover:bg-green-50 w-full" onClick={() => window.open('https://wa.me/6283153308212', '_blank')}>
                    Open WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
               </div>

               <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 w-full h-1 bg-red-500" />
                 <div className="mb-6 text-center">
                   <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-0 mb-3">Email</Badge>
                   <h4 className="font-bold text-xl text-slate-900">dyexalabs@gmail.com</h4>
                   <p className="text-sm text-slate-500 mt-1">Scan to send email</p>
                 </div>
                 <div className="bg-white p-2 rounded-xl shadow-inner border border-slate-100">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=mailto:dyexalabs@gmail.com" 
                      alt="Email QR Code" 
                      className="w-40 h-40"
                    />
                 </div>
                 <Button variant="ghost" className="mt-6 text-red-600 hover:text-red-700 hover:bg-red-50 w-full" onClick={() => window.open('mailto:dyexalabs@gmail.com')}>
                    Send Email <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;