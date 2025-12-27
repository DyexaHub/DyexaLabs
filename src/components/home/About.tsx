import { motion, useScroll} from "motion/react";
import { useRef } from "react";
import { Reveal } from "../common/Reveal";
import { CountUp } from "../effects/CountUp";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    skills: ["Cloud Architecture", "AI/ML", "Python"],
    funFact: "Former Chess Grandmaster",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "James Wilson",
    role: "Lead Security Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    skills: ["Penetration Testing", "Cryptography", "Network Sec"],
    funFact: "Climbed Mt. Everest twice",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
    skills: ["Product Strategy", "UX/UI", "Agile"],
    funFact: "Salsa dancing champion",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "David Kim",
    role: "Senior DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200",
    skills: ["Kubernetes", "Docker", "AWS"],
    funFact: "Builds custom mechanical keyboards",
    social: { twitter: "#", linkedin: "#", github: "#" }
  }
];

const skills = [
  { name: "Cloud Migration", level: 95 },
  { name: "Cybersecurity", level: 90 },
  { name: "Software Development", level: 85 },
  { name: "Data Analytics", level: 88 },
];

const history = [
  { year: "2015", title: "Founded", description: "Dyexa starts as a small consultancy in a garage." },
  { year: "2017", title: "Global Expansion", description: "Opened offices in London and Singapore." },
  { year: "2020", title: "Cloud Focus", description: "Shifted 100% focus to cloud-native solutions." },
  { year: "2023", title: "Market Leader", description: "Recognized as top IT firm by TechWeekly." },
];

export const About = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Dyexa</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are a team of passionate technologists dedicated to solving the world's toughest IT challenges.
            </p>
          </div>
        </Reveal>

        {/* Numbers Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-slate-50 rounded-2xl p-8 border border-slate-100">
          {[
            { label: "Projects Completed", value: 500, suffix: "+" },
            { label: "Happy Clients", value: 120, suffix: "" },
            { label: "Team Members", value: 45, suffix: "" },
            { label: "Awards Won", value: 15, suffix: "" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Timeline Scroll */}
          <div ref={targetRef}>
            <h3 className="text-2xl font-bold mb-8">Our Journey</h3>
            <div className="relative border-l-2 border-slate-200 ml-4 pl-8 space-y-12">
              {history.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                  <div className="text-blue-600 font-bold mb-1">{item.year}</div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Bars */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Our Expertise</h3>
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">Why Choose Us?</h4>
              <p className="text-blue-700/80 text-sm">
                We combine technical expertise with business acumen to deliver results that matter. 
                Our team is certified in AWS, Azure, and Google Cloud.
              </p>
            </div>
          </div>
        </div>

        {/* Team Coder Cards */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Meet The Experts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="group perspective-1000">
                <div className="relative h-[350px] w-full transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white shadow-lg border border-slate-200 [backface-hidden] overflow-hidden">
                    <div className="h-24 bg-blue-600"></div>
                    <div className="flex flex-col items-center -mt-12 px-4 pb-6">
                      <Avatar className="h-24 w-24 border-4 border-white shadow-sm mb-4">
                        <AvatarImage src={member.image} />
                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                      <p className="text-sm text-slate-500 mb-4">{member.role}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.skills.slice(0, 2).map(skill => (
                          <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-900 text-white transform:[rotateY(180deg)] [backface-hidden] p-6 flex flex-col justify-center text-center">
                    <h4 className="text-lg font-bold mb-2">{member.name}</h4>
                    <p className="text-blue-400 text-sm mb-6">{member.role}</p>
                    
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">Fun Fact</p>
                      <p className="italic text-slate-300">"{member.funFact}"</p>
                    </div>

                    <div className="flex justify-center gap-4 mt-auto">
                      <a href={member.social.twitter} className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                      <a href={member.social.linkedin} className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                      <a href={member.social.github} className="hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
