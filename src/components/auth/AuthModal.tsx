import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "./AuthContext";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Lock, User, ArrowRight, Loader2, Check } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface AuthModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultView?: "login" | "signup";
}

export const AuthModal = ({ trigger, open, onOpenChange, defaultView = "login" }: AuthModalProps) => {
  const [view, setView] = useState<"login" | "signup">(defaultView);
  const { login, signup, googleLogin, isLoading } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (view === "login") {
      await login(formData.email, formData.password);
    } else {
      await signup(formData.name, formData.email, formData.password);
    }
    // Close modal handled by parent via effect or manual close if needed, 
    // but usually Context updates state and we might want to close it.
    // We'll let the user close it or close on success if we passed a callback.
    if (onOpenChange) onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="p-0 overflow-hidden gap-0 sm:max-w-[900px] sm:h-[600px] border-none bg-white shadow-2xl">
        <VisuallyHidden>
            <DialogTitle>Authentication</DialogTitle>
             <DialogDescription>
                Sign in or create an account to access the client portal.
             </DialogDescription>
        </VisuallyHidden>
        
        <div className="flex h-full w-full">
          {/* Left Side - Hero/Branding */}
          <div className="hidden md:flex w-1/2 relative bg-slate-900 text-white flex-col justify-between p-10 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://i.pinimg.com/1200x/4c/d5/a8/4cd5a8e1c4274bd8bef8d81a0a4fde55.jpg" 
                 alt="Abstract Background" 
                 className="w-full h-full object-cover opacity-60 mix-blend-overlay"
               />
               <div className="absolute inset-0 bg-linear-to-b from-blue-900/50 to-slate-900/90" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                  <img
                    src="/dyexalabs_icons.png"
                    alt="DyexaLabs Logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight">DyexaLabs</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight mb-4">
                Unlock Exclusive <br /> Client Resources
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed max-w-sm">
                Join our premium network to access specialized IT tools, manage your projects, and schedule consultations with our experts.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-blue-100/90">
                 <div className="p-1 rounded-full bg-blue-500/20"><Check className="w-3 h-3" /></div>
                 <span>Real-time project tracking</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100/90">
                 <div className="p-1 rounded-full bg-blue-500/20"><Check className="w-3 h-3" /></div>
                 <span>Exclusive whitepapers & reports</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100/90">
                 <div className="p-1 rounded-full bg-blue-500/20"><Check className="w-3 h-3" /></div>
                 <span>Direct access to consultants</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-12 overflow-y-auto">
             <div className="w-full max-w-sm mx-auto flex flex-col justify-center h-full">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {view === "login" ? "Welcome Back" : "Create Account"}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {view === "login" ? "Enter your credentials to access your account" : "Sign up to get started with Dyexa"}
                  </p>
                </div>

                <div className="grid gap-4">
                   <Button variant="outline" className="w-full h-11 relative" onClick={googleLogin} disabled={isLoading}>
                      <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                      </svg>
                      Continue with Google
                   </Button>
                   
                   <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">Or continue with</span>
                      </div>
                   </div>

                   <form onSubmit={handleSubmit} className="space-y-4">
                      <AnimatePresence mode="wait">
                         {view === "signup" && (
                           <motion.div
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: "auto" }}
                             exit={{ opacity: 0, height: 0 }}
                             className="space-y-2 overflow-hidden"
                           >
                              <Label htmlFor="name">Full Name</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input 
                                  id="name" 
                                  placeholder="John Doe" 
                                  className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  required={view === "signup"}
                                />
                              </div>
                           </motion.div>
                         )}
                      </AnimatePresence>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="m@example.com" 
                            className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                           <Label htmlFor="password">Password</Label>
                           {view === "login" && (
                             <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">Forgot password?</a>
                           )}
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input 
                            id="password" 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                         {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                         {view === "login" ? "Sign In" : "Create Account"}
                         {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                   </form>

                   <div className="mt-4 text-center text-sm">
                      <span className="text-slate-500">
                        {view === "login" ? "Don't have an account? " : "Already have an account? "}
                      </span>
                      <button 
                        type="button"
                        onClick={() => {
                          setView(view === "login" ? "signup" : "login");
                          setFormData({ name: "", email: "", password: "" });
                        }}
                        className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        {view === "login" ? "Sign up" : "Log in"}
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
