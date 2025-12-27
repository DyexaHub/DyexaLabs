import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Filter, TrendingUp, Mail } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { blogPosts, type BlogPost } from "../data/resources";
import { toast } from "sonner";

const categories = ["All", "Cloud", "Security", "AI", "Agile", "Development", "Data"];

export const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allPosts = Object.values(blogPosts);
  // Feature the first post
  const featuredPost = allPosts[0];
  // The rest of the posts
  const remainingPosts = allPosts.slice(1);

  const filteredPosts = remainingPosts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      
      <div className="container mx-auto px-4 mb-16">
        {/* Header */}
        <div className="text-center mb-16">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-4 py-1.5 text-sm font-medium">
              DyexaLabs Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              The <span className="text-blue-600">Future</span> of Technology
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Deep dives into cloud architecture, cybersecurity, and digital transformation. 
              Read the latest thinking from our engineering teams.
            </p>
          </motion.div>
        </div>

        {/* Featured Post (Only show if 'All' is selected or if it matches category) */}
        {(selectedCategory === "All" || featuredPost.category === selectedCategory) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20 relative group overflow-hidden rounded-3xl shadow-2xl"
          >
            <Link to={`/resources/${featuredPost.id}`} className="block relative h-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                 <div className="max-w-3xl">
                   <div className="flex items-center gap-3 mb-4 text-white/80">
                     <Badge className="bg-blue-600 text-white border-none">{featuredPost.category}</Badge>
                     <span className="flex items-center gap-2 text-sm font-medium"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                     <span className="flex items-center gap-2 text-sm font-medium"><TrendingUp className="w-4 h-4 text-green-400" /> Trending</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">
                     {featuredPost.title}
                   </h2>
                   <p className="text-lg text-slate-200 mb-8 line-clamp-2 md:line-clamp-none max-w-2xl">
                     {featuredPost.excerpt}
                   </p>
                   <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 hover:text-blue-700 font-bold border-none">
                     Read Featured Article <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                 </div>
               </div>
            </Link>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12 sticky top-20 z-30 bg-slate-50/80 backdrop-blur-md py-4 rounded-full max-w-fit mx-auto px-6 border border-slate-200 shadow-sm"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 transform scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <ResourceCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (selectedCategory !== "All" && featuredPost.category !== selectedCategory) && (
          <div className="text-center py-20">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
               <Filter className="w-8 h-8 text-slate-400" />
             </div>
             <h3 className="text-xl font-bold text-slate-900">No articles found</h3>
             <p className="text-slate-500 mt-2">Try selecting a different category.</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left">
           {/* Abstract Background Shapes */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-blue-700/50">
                 <Mail className="w-4 h-4" /> Weekly Newsletter
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay ahead of the curve.</h2>
               <p className="text-slate-400 text-lg mb-8">
                 Join 15,000+ engineers and executives who receive our weekly insights on cloud, security, and AI.
               </p>
               <div className="flex flex-col sm:flex-row gap-3">
                 <input 
                   type="email" 
                   placeholder="Enter your work email" 
                   className="grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all backdrop-blur-sm"
                 />
                 <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white py-8 px-8 rounded-xl font-bold text-lg" onClick={() => toast.success("Welcome to the community!")}>
                   Subscribe
                 </Button>
               </div>
               <p className="text-xs text-slate-500 mt-4">By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.</p>
             </div>
             <div className="hidden md:grid grid-cols-2 gap-4 opacity-50">
                {/* Decorative mini cards */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 rotate-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded mb-3" />
                  <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 -rotate-2 mt-8">
                  <div className="w-8 h-8 bg-purple-500/20 rounded mb-3" />
                  <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 -rotate-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded mb-3" />
                  <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 rotate-2 mt-8">
                  <div className="w-8 h-8 bg-orange-500/20 rounded mb-3" />
                  <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                </div>
             </div>
           </div>
        </div>
      </div>

    </div>
  );
};

const ResourceCard = forwardRef<HTMLDivElement, { post: BlogPost; index: number }>(({ post, index }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      <Link to={`/resources/${post.id}`} className="block relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-white/90 backdrop-blur-sm text-slate-900 shadow-sm hover:bg-white">
            {post.category}
          </Badge>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </div>
        </div>
        
        <Link to={`/resources/${post.id}`} className="block mb-3">
          <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-600 text-sm line-clamp-3 mb-6 grow">
          {post.excerpt}
        </p>
        
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">
            {post.readTime}
          </span>
          <Link 
            to={`/resources/${post.id}`}
            className="text-sm font-bold text-blue-600 flex items-center gap-1 group/link"
          >
            Read Article 
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

ResourceCard.displayName = "ResourceCard";
