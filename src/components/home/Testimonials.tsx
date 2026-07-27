import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Quote, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Prof. Dr. Ir. Muhammad Ahsin Rifa'i, M.Si.",
    role: "Rector of Mulia University",
    content: "DyexaLabs transformed our legacy infrastructure into a modern cloud powerhouse. Their expertise is unmatched.",
    image: "https://universitasmulia.ac.id/wp-content/uploads/2023/09/prof-dr-ir-muhammad-ahsin-rifai-msi.jpg"
  },
  {
    name: "Nasruddin Bin Idris, S.Kom., M.Kom.",
    role: "Lecturer of Information Systems at Mulia University",
    content: "The cybersecurity audit DyexaLabs performed saved us from a potential major breach. We owe them everything.",
    image: "https://if.universitasmulia.ac.id/wp-content/uploads/elementor/thumbs/Nasruddin-Bin-Indris-S.Kom_.M.Kom_-q6cjjaabcfksfsno6v5c0rtfk1zgiqcwvykz160rwg.jpg"
  },
  {
    name: "Riski Zulkarnain, S.Pd., M.Pd",
    role: "English Lecturer at Mulia University",
    content: "Their software development team is incredibly agile. They delivered our MVP two weeks ahead of schedule.",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=xsdTcSEAAAAJ&citpid=2"
  },
  {
    name: "Pramudya Prima Insan S.Kom., M.Kom",
    role: "Lecturer at Mulia University",
    content: "DyexaLabs's data analytics solutions gave us insights we didn't know we had. Revenue is up 30%.",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=mnde_a4AAAAJ&citpid=2"
  },
  {
    name: "Jamal, S.Kom, M.Kom",
    role: "Lecturer at Mulia University",
    content: "Our cloud migration was seamless thanks to DyexaLabs. Minimal downtime and maximum efficiency.",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=kgzuS78AAAAJ&citpid=3"
  },
  {
    name: "Agus Wijayanto, S.Kom., M.Kom",
    role: "Lecturer at Mulia University",
    content: "Partnering with DyexaLabs was the best decision we made. Their IT consulting services are top-notch.",
    image: "https://ti.universitasmulia.ac.id/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-11-at-13.50.51-1-1030x773-1.jpeg"
  },
  {
    name: "Shinta Palupi, S.Kom., M.Kom",
    role: "Lecturer at Mulia University",
    content: "Strategy and execution were flawless. DyexaLabs helped us scale our operations efficiently.",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=t5POSpIAAAAJ&citpid=6"
  },
  {
    name: "Rahmat Saudi Al Fathir, S.Kom., M.Kom",
    role: "Lecturer at Mulia University",
    content: "Consulting with DyexaLabs opened our eyes to new technological possibilities. Highly recommended!",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=F5gbpyIAAAAJ&citpid=1"
  },
  {
    name: "Muhammad Satria Pratama",
    role: "IS Students at Mulia University",
    content: "My Friends and I learned so much from the internship program at DyexaLabs. Real-world experience is invaluable.",
    image: "/MSATRIA.jpeg"
  },
  {
    name: "Fenesia Evelin",
    role: "Management Students at Mulia University",
    content: "The owner of dyexalabs are handsome and friendly. I really enjoyed my internship there.",
    image: "/FENEVELIN.jpg"
  },
  {
    name: "William Dickson",
    role: "Hardware Engineer at Telkom University",
    content: "All staffs are very helpful and friendly. I learned a lot during my internship at DyexaLabs.",
    image: "/DICKSON.jpg"
  },
  {
    name: "Destri Natasha",
    role: "Rider & Graphic Designer",
    content: "This website is amazing! The design is sleek and user-friendly. Great job DyexaLabs!",
    image: "/DESTRI.jpg"
  },
];

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/500px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/500px-Microsoft_logo_%282012%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/500px-Netflix_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/500px-Amazon_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pertamina_Logo.svg/500px-Pertamina_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/JPMorgan_Chase.svg/500px-JPMorgan_Chase.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Samsung_Orig_Wordmark_BLACK_RGB.png/500px-Samsung_Orig_Wordmark_BLACK_RGB.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/500px-Cisco_logo_blue_2016.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/500px-Tesla_Motors_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Versace_old_logo.svg/500px-Versace_old_logo.svg.png"
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-16 pb-16 bg-slate-50 overflow-hidden">
      {/* Live Stats Ticker */}
      <div className="bg-blue-900 text-blue-100 py-3 mb-16 overflow-hidden whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 gradient-to-r from-blue-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 gradient-to-l from-blue-900 to-transparent z-10"></div>
        
        <motion.div 
          className="inline-flex gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
           {[...Array(5)].map((_, i) => (
             <div key={i} className="flex items-center gap-12">
                <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-400" /> Systems Monitored: 1,240</span>
                <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-400" /> Threats Blocked: 54,302</span>
                <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-400" /> Uptime: 99.99%</span>
                <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-400" /> Active Projects: 87</span>
             </div>
           ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Trusted by Industry Leaders
        </h2>

        {/* Logo Marquee */}
        <div className="mb-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 gradient-to-l from-slate-50 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden gap-16 py-4 items-center">
            <motion.div 
              className="flex gap-16 items-center shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                <img key={idx} src={logo} alt="Client Logo" className="h-8 md:h-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 object-contain" />
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 30,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="h-full"
                    >
                      <Card className="h-full bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 rounded-xl overflow-hidden group relative transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">

                        {/* Magical background effect */}
                        <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-blue-50/30 to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl animate-pulse" />

                        {/* Floating particles effect */}
                        <motion.div
                          className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60"
                          animate={{ y: [-10, 10, -10], opacity: [0, 0.6, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-50"
                          animate={{ y: [10, -10, 10], opacity: [0, 0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <motion.div
                          className="absolute top-1/2 right-8 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-40"
                          animate={{ x: [-5, 5, -5], opacity: [0, 0.4, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        />

                        <CardContent className="flex flex-col p-6 h-full relative z-10">
                          {/* Quote icon with enhanced animation */}
                          <motion.div
                            className="mb-5"
                            whileHover={{
                              scale: 1.2,
                              rotate: [0, -10, 10, 0],
                              filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Quote className="h-8 w-8 text-blue-600" />
                          </motion.div>

                          {/* Premium content */}
                          <div className="relative mb-8 w-full max-w-xl mx-auto">
                            <div className="p-4 rounded-lg bg-white">
                              <p className="text-slate-700 text-xl leading-relaxed italic">"{testimonial.content}"</p>
                            </div>
                          </div>

                          {/* Author section with enhanced dynamic image borders */}
                          <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-100">
                            <div className="relative">
                              {/* Dynamic rotating gradient border */}
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background: 'conic-gradient(from 0deg, #3b82f6, #93c5fd, #60a5fa, #3b82f6)',
                                  padding: '3px'
                                }}
                                animate={{
                                  rotate: [0, 360]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                              {/* Inner pulsing ring */}
                              <motion.div
                                className="absolute inset-1 rounded-full border-2 border-white"
                                animate={{
                                  borderColor: ['#ffffff', '#dbeafe', '#ffffff']
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              {/* Subtle glow effect */}
                              <motion.div
                                className="absolute inset-0 rounded-full bg-blue-400/20 blur-sm"
                                animate={{
                                  opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="relative w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg z-10"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-900 text-base leading-tight truncate">
                                {testimonial.name}
                              </h4>
                              <p className="text-slate-500 text-sm truncate">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </CardContent>

                        {/* Magical border glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/50"
                          initial={{ opacity: 0 }}
                          whileHover={{
                            opacity: [0, 1, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
