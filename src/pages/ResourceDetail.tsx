import { motion, useScroll, useSpring } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Tag, ArrowLeft, Clock, Linkedin, Twitter, Facebook, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { blogPosts, getRelatedPosts } from "../data/resources";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import { cn } from "../components/ui/utils";

const ResourceDetail = () => {
  const { id } = useParams();
  const post = id ? blogPosts[id] : null;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isCopied, setIsCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle dynamic CTA buttons inside the HTML content
  useEffect(() => {
    if (!contentRef.current) return;

    const ctaButtons = contentRef.current.querySelectorAll('.cta-box button');
    
    const handleCtaClick = (e: Event) => {
      e.preventDefault();
      const button = e.target as HTMLElement;
      
      button.innerText = "Request Sent!";
      button.classList.add('bg-green-600', 'pointer-events-none');
      button.classList.remove('bg-blue-600', 'hover:bg-blue-500');
      
      toast.success("Thank you for your interest! A DyexaLabs specialist will reach out to you within 24 hours.", {
        duration: 5000,
        icon: <CheckCircle2 className="text-green-500 w-5 h-5" />
      });
    };

    ctaButtons.forEach(btn => btn.addEventListener('click', handleCtaClick));

    return () => {
      ctaButtons.forEach(btn => btn.removeEventListener('click', handleCtaClick));
    };
  }, [id, post]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      // Fallback for environments where Clipboard API is blocked (like iframes)
      try {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setIsCopied(true);
          toast.success("Link copied to clipboard");
          setTimeout(() => setIsCopied(false), 2000);
        } else {
          throw new Error("Fallback copy failed");
        }
      } catch (fallbackErr) {
        console.error("Copy failed:", fallbackErr);
        toast.error("Could not copy link automatically");
      }
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-4">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Article not found</h1>
        <p className="text-slate-600 mb-8 max-w-md">
          The article you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/resources">
          <Button size="lg" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Button>
        </Link>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  return (
    <div className="bg-white min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 to-purple-600 origin-left z-60"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
      >
        {/* Hero Image Section */}
        <div className="relative w-full h-[60vh] md:h-[500px] overflow-hidden group">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-end pb-12 md:pb-20">
            <div className="container mx-auto px-4">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.8 }}
                 className="max-w-4xl"
               >
                 <Link to="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium group/back">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover/back:-translate-x-1 transition-transform" /> Back to Resources
                 </Link>
                 
                 <div className="flex flex-wrap gap-3 mb-6">
                   <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none px-3 py-1 text-sm shadow-lg shadow-blue-900/20">{post.category}</Badge>
                   <Badge variant="outline" className="text-white border-white/30 backdrop-blur-md bg-white/10 px-3 py-1 text-sm flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                   </Badge>
                 </div>

                 <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                   {post.title}
                 </h1>
                 
                 <div className="flex items-center gap-6 text-white/90">
                   <div className="flex items-center gap-3">
                     <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-blue-700 font-bold border-2 border-white/20 shadow-inner text-lg">
                       {post.author.charAt(0)}
                     </div>
                     <div>
                       <div className="font-semibold text-base">{post.author}</div>
                       <div className="text-xs text-white/70 uppercase tracking-wider">{post.role}</div>
                     </div>
                   </div>
                   <div className="w-px h-10 bg-white/20 hidden sm:block" />
                   <div className="flex items-center gap-2 text-sm font-medium">
                     <Calendar className="w-4 h-4 text-blue-400" /> {post.date}
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 grid lg:grid-cols-[1fr_350px] gap-16 pb-24">
          {/* Main Content */}
          <main>
             <motion.article 
               ref={contentRef}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="prose prose-lg prose-slate max-w-none 
                 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
                 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                 prose-p:leading-8 prose-p:text-slate-600 prose-p:mb-6
                 prose-li:text-slate-600
                 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                 prose-blockquote:border-l-blue-600 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700 prose-blockquote:font-medium
                 prose-img:rounded-xl prose-img:shadow-xl prose-img:my-10
                 [&_.cta-box]:not-prose"
             >
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
             </motion.article>

             {/* Tags & Share */}
             <div className="mt-16 pt-8 border-t border-slate-200">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <div className="flex flex-wrap gap-2">
                   {post.tags.map(tag => (
                     <div key={tag} className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default flex items-center shadow-sm border border-slate-200">
                       <Tag className="w-3.5 h-3.5 mr-2 opacity-70 text-blue-600" /> {tag}
                     </div>
                   ))}
                 </div>
                 
                 <div className="flex items-center gap-3">
                   <span className="text-sm font-bold text-slate-500 mr-2 uppercase tracking-wide">Share:</span>
                   <Button variant="outline" size="icon" className="rounded-full w-10 h-10 hover:text-blue-400 hover:border-blue-200 bg-white shadow-sm" onClick={() => toast.info("Shared to Twitter")}>
                     <Twitter className="w-4 h-4" />
                   </Button>
                   <Button variant="outline" size="icon" className="rounded-full w-10 h-10 hover:text-blue-700 hover:border-blue-200 bg-white shadow-sm" onClick={() => toast.info("Shared to LinkedIn")}>
                     <Linkedin className="w-4 h-4" />
                   </Button>
                   <Button variant="outline" size="icon" className="rounded-full w-10 h-10 hover:text-blue-800 hover:border-blue-200 bg-white shadow-sm" onClick={() => toast.info("Shared to Facebook")}>
                     <Facebook className="w-4 h-4" />
                   </Button>
                   <Button 
                     variant="outline" 
                     size="icon" 
                     className={cn("rounded-full w-10 h-10 transition-colors bg-white shadow-sm", isCopied ? "text-green-600 border-green-200 bg-green-50" : "hover:text-slate-900")} 
                     onClick={handleCopyLink}
                   >
                     {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                   </Button>
                 </div>
               </div>
             </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8 h-fit lg:sticky lg:top-24">
            {/* Newsletter Card */}
            <div className="bg-linear-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group border border-slate-700">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
              
              <h3 className="font-bold text-xl mb-3 relative z-10">Subscribe to our Newsletter</h3>
              <p className="text-slate-300 text-sm mb-6 relative z-10 leading-relaxed">
                Join 15,000+ technology leaders. Get the latest insights, case studies, and industry trends delivered to your inbox.
              </p>
              
              <div className="space-y-3 relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm backdrop-blur-sm" 
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-base font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]">
                  Subscribe Now
                </Button>
              </div>
              
              <p className="text-xs text-slate-400 mt-4 text-center relative z-10">No spam, unsubscribe anytime.</p>
            </div>
            
            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link to={`/resources/${relatedPost.id}`} key={relatedPost.id} className="block group bg-white rounded-xl p-3 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden relative">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                        <div className="py-1">
                           <Badge variant="secondary" className="text-[10px] px-2 py-0.5 h-5 mb-2 bg-slate-100 text-slate-600 group-hover:bg-white transition-colors">{relatedPost.category}</Badge>
                           <h4 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                             {relatedPost.title}
                           </h4>
                           <span className="text-xs text-slate-400">{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourceDetail;
