import { Search, Menu, Phone, ArrowRight, LogOut, User, Settings, LayoutDashboard, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "../common/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ProgressBar } from "../effects/ProgressBar";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "../ui/utils";
import { AuthModal } from "../auth/AuthModal";
import { useAuth } from "../auth/AuthContext";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const suggestions = [
    "Cloud Migration", 
    "Cybersecurity Audit", 
    "Custom App Dev", 
    "Data Analytics", 
    "IT Support",
    "Mobile App Development",
    "Machine Learning"
  ];

  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <ProgressBar />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
      
      <motion.header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled || location.pathname !== "/"
            ? "bg-white/90 backdrop-blur-md border-b shadow-sm py-2" 
            : "bg-transparent py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center">
              <Logo className={cn("transition-colors", scrolled || location.pathname !== "/" ? "" : "text-slate-900")} />
            </Link>
          </div>

          {/* Desktop Navigation - Mega Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                   <Link to="/">
                      <span className={navigationMenuTriggerStyle() + " bg-transparent cursor-pointer hover:text-blue-600 transition-colors"}>Home</span>
                   </Link>
                </NavigationMenuItem>
                
                {/* Services Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:text-blue-600 transition-colors">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-blue-600 to-blue-700 p-6 no-underline outline-none focus:shadow-md group"
                            to="/services"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              All Services
                            </div>
                            <p className="text-sm leading-tight text-blue-100 mb-4">
                              Explore our comprehensive suite of IT consulting services.
                            </p>
                            <div className="text-white/80 text-sm flex items-center group-hover:text-white transition-colors">
                               View Overview <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem to="/services/consulting" title="Consulting">
                        Strategic guidance for digital transformation.
                      </ListItem>
                      <ListItem to="/services/implementation" title="Implementation">
                        Software development and cloud migration.
                      </ListItem>
                      <ListItem to="/services/organization" title="Organization & Talent">
                         Staff augmentation and agile coaching.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                   <Link to="/work">
                      <span className={navigationMenuTriggerStyle() + " bg-transparent cursor-pointer hover:text-blue-600 transition-colors"}>Our Work</span>
                   </Link>
                </NavigationMenuItem>
                
                {/* About Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:text-blue-600 transition-colors">About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem to="/about" title="Our Story">
                        Mission, vision, and values.
                      </ListItem>
                      <ListItem to="/about#history" title="History">
                        Our journey from 2015 to today.
                      </ListItem>
                      <ListItem to="/about#team" title="Leadership Team">
                        Meet the experts behind Dyexa.
                      </ListItem>
                      <ListItem to="/contact" title="Careers">
                        Join our growing team.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                   <Link to="/resources">
                      <span className={navigationMenuTriggerStyle() + " bg-transparent cursor-pointer hover:text-blue-600 transition-colors"}>Resources</span>
                   </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                   <Link to="/contact">
                      <span className={navigationMenuTriggerStyle() + " bg-transparent cursor-pointer hover:text-blue-600 transition-colors"}>Contact</span>
                   </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Search with Autocomplete */}
            <div className="relative w-64 hidden xl:block">
              <div className="relative group">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <Input 
                  placeholder="Search services..." 
                  className={cn(
                    "pl-8 transition-all focus-visible:ring-blue-600",
                    scrolled || location.pathname !== "/" ? "bg-slate-50 border-slate-200 focus:bg-white" : "bg-white/80 border-transparent focus:bg-white"
                  )}
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
              </div>
              <AnimatePresence>
                {showSuggestions && searchValue && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-full bg-white rounded-md shadow-lg mt-2 p-2 border border-slate-100 z-50"
                  >
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((s) => (
                        <div key={s} className="px-3 py-2 hover:bg-blue-50 text-sm rounded cursor-pointer text-slate-700 transition-colors">
                          {s}
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-sm text-slate-400">No results found</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3">
              {isAuthenticated && user ? (
                  <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="relative h-10 w-10 rounded-full z-9999"
                    >
                      <Avatar className="h-10 w-10 border border-slate-200">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Client Dashboard</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Button 
                    onClick={() => setAuthOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 relative overflow-hidden group"
                   >
                    <span className="relative z-10 flex items-center">
                       Sign In <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Button>
                 </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Navigation & Actions */}
          <div className="flex lg:hidden items-center gap-2">
             <Button variant="ghost" size="icon" className="text-slate-600" onClick={() => window.location.href='tel:+83153308212'}>
               <Phone className="w-5 h-5" />
             </Button>
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  <Logo />
                  <nav className="flex flex-col gap-4">
                    <Link to="/" className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
                    <Link to="/services" className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</Link>
                    <Link to="/work" className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors">Our Work</Link>
                    <Link to="/about" className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors">About</Link>
                    <Link to="/resources" className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors">Resources</Link>
                    <Link to="/contact" className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
                  </nav>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    {isAuthenticated && user ? (
                      <div className="space-y-3">
                         <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span className="font-medium text-slate-900">{user.name}</span>
                              <span className="text-xs text-slate-500">{user.email}</span>
                            </div>
                         </div>
                         <Button variant="outline" className="w-full justify-start" onClick={logout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                         </Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 col-span-2" onClick={() => setAuthOpen(true)}>
                          Sign In
                        </Button>
                        <Button variant="outline" className="w-full col-span-2" onClick={() => setAuthOpen(true)}>
                          Log In
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
};

const ListItem = ({ className, title, children, to, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 group-hover:text-blue-600/80">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
export default Header;