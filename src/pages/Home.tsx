import { Hero } from "../components/home/Hero";
import { Features } from "../components/home/Features";
import { Testimonials } from "../components/home/Testimonials";
import { Newsletter } from "../components/home/Newsletter";
import { BlogPreview } from "../components/home/BlogPreview";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Short Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Features onNavigate={function (): void {
            throw new Error("Function not implemented.");
          } } />
          <div className="mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
               
            </div>
            <BlogPreview />
         </div>
      </section>
      
      <Newsletter />
    </motion.div>
  );
};

export default Home;
