import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Heart, MessageSquare, Share2, Bookmark } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "migrating-legacy-systems",
    title: "Migrating Legacy Systems to Cloud Native Architecture",
    excerpt: "A comprehensive guide on how to modernize your monolithic applications using microservices and Kubernetes.",
    category: "Cloud",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    reactions: 45,
    codeSnippet: `// Example Kubernetes Config
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dyexa-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: dyexa`
  },
  {
    id: "securing-data-pipeline",
    title: "Securing Your Data Pipeline: Best Practices for 2025",
    excerpt: "With cyber threats evolving, standard encryption is no longer enough. Here is what you need to know.",
    category: "Security",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    reactions: 122,
    codeSnippet: `def encrypt_payload(data):
    cipher = AES.new(key, AES.MODE_EAX)
    ciphertext, tag = cipher.encrypt_and_digest(data)
    return ciphertext`
  }
];

export const BlogPreview = () => {
  return (
    <section id="blog" className="pt-20 pb-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
          <p className="text-lg text-slate-600 mb-6">Technical deep dives and industry trends from our experts.</p>
          <Link to="/resources">
            <span className="text-blue-600 hover:underline cursor-pointer font-medium">View All Articles</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogs.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Link to={`/resources/${post.id}`} className="h-full block">
                <Card className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                     <img 
                       src={post.image} 
                       alt={post.title} 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute top-4 left-4">
                       <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                     </div>
                  </div>
                  
                  <CardHeader>
                     <div className="flex justify-between text-xs text-slate-500 mb-2">
                       <span>{post.readTime}</span>
                       <span>Dec 12, 2025</span>
                     </div>
                     <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                       {post.title}
                     </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="grow flex flex-col">
                     <p className="text-slate-600 mb-6 text-sm line-clamp-2">{post.excerpt}</p>
                     
                     {/* Code Syntax Highlighting Visual */}
                     <div className="bg-slate-900 rounded-md p-4 mb-6 font-mono text-xs text-blue-300 overflow-x-auto relative group/code">
                       <div className="absolute top-2 right-2 flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-red-500"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       </div>
                       <pre>{post.codeSnippet}</pre>
                     </div>

                     <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1 text-sm text-slate-500 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" /> {post.reactions}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors">
                            <MessageSquare className="w-4 h-4" /> 12
                          </div>
                        </div>
                        <div className="flex gap-2">
                           <div className="text-slate-400 hover:text-slate-600"><Bookmark className="w-4 h-4" /></div>
                           <div className="text-slate-400 hover:text-slate-600"><Share2 className="w-4 h-4" /></div>
                        </div>
                     </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
