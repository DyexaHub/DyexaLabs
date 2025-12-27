import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "../ui/dialog";
import { Mail, Check } from "lucide-react";

export const Newsletter = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenModal && !isSubscribed) {
        setShowModal(true);
        setHasSeenModal(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasSeenModal, isSubscribed]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call
    setIsSubscribed(true);
    setTimeout(() => {
      setShowModal(false);
      setIsSubscribed(false); // Reset for demo purposes if needed, or keep true
      setEmail("");
    }, 2000);
  };

  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-12 h-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join 5,000+ IT professionals. Get the latest tech insights, industry trends, and DyexaLabs updates delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-white/10 border-blue-400 text-white placeholder:text-blue-200 focus-visible:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Subscribe Now
            </Button>
          </form>
          <p className="mt-4 text-sm text-blue-200 opacity-80">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Exit Intent Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Wait! Don't Miss Out</DialogTitle>
            <DialogDescription>
              Get a free consultation checklist when you subscribe to our newsletter.
            </DialogDescription>
          </DialogHeader>
          
          {isSubscribed ? (
            <div className="flex flex-col items-center justify-center py-6 text-green-600">
              <Check className="w-12 h-12 mb-2" />
              <p className="font-medium">You're subscribed!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4 py-4">
              <Input 
                type="email" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get My Free Checklist
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
