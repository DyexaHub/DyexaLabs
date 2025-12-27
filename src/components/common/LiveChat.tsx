import { useState, useEffect, useRef } from "react";
import { 
  MessageSquare, 
  X, 
  Send, 
  Paperclip, 
  Bot, 
  Sparkles, 
  ChevronRight, 
  MoreHorizontal,
  Info,
  Trash2,
  Download,
  Terminal,
  ThumbsUp,
  ThumbsDown,
  Loader2,
  FileText
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { motion, AnimatePresence } from "motion/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  type?: 'text' | 'system' | 'action' | 'file';
  actions?: { label: string; value: string }[];
  timestamp: Date;
  fileName?: string;
}

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  text: "Hello! I'm the DyexaLabs virtual assistant. How can I help you optimize your IT infrastructure today?",
  isUser: false,
  timestamp: new Date(),
  actions: [
    { label: "Our Services", value: "services" },
    { label: "Pricing Models", value: "pricing" },
    { label: "Book Consultation", value: "book" },
    { label: "Contact Support", value: "support" }
  ]
};

const COMMANDS = [
  { command: '/clear', description: 'Clear conversation history' },
  { command: '/help', description: 'Show available commands' },
  { command: '/contact', description: 'Show contact information' },
];

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [showCommands, setShowCommands] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load messages from local storage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('dyexalabs-chat-history');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages).map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
        setMessages(parsed);
      } catch (e) {
        console.error("Failed to load chat history", e);
      }
    }
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('dyexalabs-chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-open effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPrompted && !isOpen && messages.length === 1) {
        setIsOpen(true);
        setHasPrompted(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasPrompted, isOpen, messages.length]);

  // Scroll to bottom effect
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    localStorage.removeItem('dyexalabs-chat-history');
  };

  const handleFileUpload = () => {
    // Simulate file upload
    const fileId = Date.now().toString();
    const userMsg: Message = {
      id: fileId,
      text: "Uploading debug_log.txt...",
      isUser: true,
      timestamp: new Date(),
      type: 'file',
      fileName: 'debug_log.txt'
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === fileId ? { ...m, text: "Uploaded: debug_log.txt" } : m));
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: "I've received your file 'debug_log.txt'. I'm analyzing the logs now...",
          isUser: false,
          timestamp: new Date()
        }]);
        setIsTyping(false);
      }, 1500);
    }, 1500);
  };

  const handleSendMessage = async (e?: React.FormEvent, customText?: string) => {
    e?.preventDefault();
    const text = customText || inputValue;
    
    if (!text.trim()) return;

    // Handle commands
    if (text.startsWith('/')) {
      const command = text.toLowerCase().trim();
      setInputValue("");
      setShowCommands(false);
      
      if (command === '/clear') {
        handleClearChat();
        return;
      }
      
      // Add user message for other commands so it's visible what they typed
      const userMsg: Message = {
        id: Date.now().toString(),
        text: text,
        isUser: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMsg]);

      if (command === '/help') {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: "Available commands:\n\n/clear - Clear chat history\n/contact - Show contact info\n/help - Show this message",
            isUser: false,
            timestamp: new Date(),
            type: 'system'
          }]);
        }, 500);
        return;
      }
    } else {
      // Normal message
      const userMsg: Message = {
        id: Date.now().toString(),
        text: text,
        isUser: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMsg]);
    }
    
    setInputValue("");
    setShowCommands(false);
    setIsTyping(true);

    // Simulate AI processing time
    const responseDelay = Math.random() * 1000 + 1000; // 1-2 seconds

    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, responseDelay);
  };

  const generateBotResponse = (input: string): Message => {
    const lowerInput = input.toLowerCase();
    const id = (Date.now() + 1).toString();
    const timestamp = new Date();

    if (lowerInput === '/contact' || lowerInput.includes("email") || lowerInput.includes("phone") || lowerInput.includes("contact") || lowerInput.includes("whatsapp")) {
      return {
        id,
        isUser: false,
        timestamp,
        text: "You can reach us through the following channels:\n\nWhatsApp: +62 8315 330 8212\nEmail: dyexalabs@gmail.com\n\nOur team typically responds within 2 hours during business days.",
        actions: [
          { label: "Open WhatsApp", value: "whatsapp" },
          { label: "Send Email", value: "email" }
        ]
      };
    }

    if (lowerInput.includes("service") || lowerInput.includes("what do you do")) {
      return {
        id,
        isUser: false,
        timestamp,
        text: "We offer a comprehensive range of IT consultancy services, including Cloud Migration, Cybersecurity Audits, and Custom Software Development.",
        actions: [
          { label: "Cloud Services", value: "cloud" },
          { label: "Cybersecurity", value: "security" },
          { label: "Software Dev", value: "dev" }
        ]
      };
    }

    if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("pricing")) {
      return {
        id,
        isUser: false,
        timestamp,
        text: "Our pricing is tailored to each project's specific needs. We offer flexible engagement models including fixed-price projects and time-and-materials.",
        actions: [
          { label: "Request Quote", value: "quote" },
          { label: "View Rate Card", value: "rates" }
        ]
      };
    }

    if (lowerInput.includes("book") || lowerInput.includes("schedule") || lowerInput.includes("consult")) {
      return {
        id,
        isUser: false,
        timestamp,
        text: "Great! Our consultants are available for discovery calls this week. Would you like me to open our calendar?",
        actions: [
          { label: "Open Calendar", value: "calendar" },
          { label: "Later", value: "no_thanks" }
        ]
      };
    }

    if (lowerInput.includes("support") || lowerInput.includes("help")) {
      return {
        id,
        isUser: false,
        timestamp,
        text: "For immediate technical support, you can reach our 24/7 helpdesk via WhatsApp or Email.",
        actions: [
          { label: "Contact Info", value: "contact" }
        ]
      };
    }

    // Default response
    return {
      id,
      isUser: false,
      timestamp,
      text: "I'm a beta AI assistant and I'm still learning. I didn't quite catch that, but I can help you with the following:",
      actions: [
        { label: "Our Services", value: "services" },
        { label: "Contact Human", value: "support" }
      ]
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    if (val.startsWith('/')) {
      setShowCommands(true);
    } else {
      setShowCommands(false);
    }
  };

  const formatTime = (date: Date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-4 right-4 sm:bottom-24 sm:right-6 w-[90vw] sm:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex flex-col gap-4 text-white relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Bot size={120} />
              </div>
              
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10 border-2 border-white/20 bg-blue-600">
                      <AvatarImage src="https://i.pinimg.com/736x/86/e7/46/86e746c5660cd68e04ca70178816592e.jpg" />
                      <AvatarFallback><Bot className="h-6 w-6" /></AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm">DyexaLabs AI</h4>
                      <Badge variant="secondary" className="text-[10px] px-1 h-4 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border-0">BETA</Badge>
                    </div>
                    <p className="text-xs text-slate-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-yellow-400" />
                      Always active
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-slate-300 hover:text-white hover:bg-white/10 h-8 w-8"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>Chat Options</DropdownMenuLabel>
                      <DropdownMenuItem onClick={handleClearChat} className="text-red-600 focus:text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Clear Chat
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSendMessage(undefined, "/contact")}>
                        <Info className="mr-2 h-4 w-4" />
                        Contact Info
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Export Transcript
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-slate-300 hover:text-white hover:bg-white/10 h-8 w-8"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Disclaimer Banner */}
              <div className="bg-blue-900/50 rounded-lg p-2 text-[10px] text-blue-200 border border-blue-800 flex items-start gap-2 backdrop-blur-sm">
                <Info className="w-3 h-3 mt-0.5 shrink-0" />
                <p>This automated system is currently under construction. Responses are simulated.</p>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 bg-slate-50 p-4 h-full">
              <div className="flex flex-col justify-end min-h-full">
                <div className="space-y-6">
                  <div className="text-center text-xs text-slate-400 my-4">
                    <span>Today, {new Date().toLocaleDateString()}</span>
                  </div>
                  
                  {messages.map((msg) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={msg.id}
                      className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex flex-col max-w-[85%] ${msg.isUser ? "items-end" : "items-start"}`}>
                        <div className="flex items-end gap-2">
                          {!msg.isUser && (
                            <Avatar className="h-6 w-6 mt-1 shrink-0">
                              <AvatarImage src="https://i.pinimg.com/736x/86/e7/46/86e746c5660cd68e04ca70178816592e.jpg" />
                              <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`rounded-2xl px-4 py-3 text-sm shadow-sm whitespace-pre-wrap ${
                              msg.isUser
                                ? "bg-blue-600 text-white rounded-tr-sm"
                                : "bg-white text-slate-700 border border-slate-200 rounded-tl-sm"
                            }`}
                          >
                             {msg.type === 'file' ? (
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4" />
                                  <span>{msg.text}</span>
                                </div>
                             ) : (
                               msg.text
                             )}
                          </div>
                        </div>
                        
                        {/* Timestamp & Feedback */}
                        <div className={`flex items-center gap-2 mt-1 ${msg.isUser ? "mr-1 flex-row-reverse" : "ml-9"}`}>
                          <span className="text-[10px] text-slate-400">
                            {formatTime(msg.timestamp)}
                          </span>
                          {!msg.isUser && msg.type !== 'system' && (
                             <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                               <button className="text-slate-300 hover:text-green-500"><ThumbsUp className="w-3 h-3" /></button>
                               <button className="text-slate-300 hover:text-red-500"><ThumbsDown className="w-3 h-3" /></button>
                             </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        {msg.actions && (
                          <div className="flex flex-wrap gap-2 mt-2 ml-9">
                            {msg.actions.map((action, idx) => (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                className="h-7 text-xs bg-white hover:bg-blue-50 hover:text-blue-600 border-slate-200"
                                onClick={() => {
                                   if (action.value === 'whatsapp') {
                                     window.open('https://wa.me/6283153308212', '_blank');
                                   } else if (action.value === 'email') {
                                     window.open('mailto:dyexalabs@gmail.com');
                                   } else {
                                     handleSendMessage(undefined, action.label);
                                   }
                                }}
                              >
                                {action.label}
                                <ChevronRight className="w-3 h-3 ml-1 opacity-50" />
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end gap-2">
                        <Avatar className="h-6 w-6 shrink-0">
                          <AvatarImage src="https://i.pinimg.com/736x/86/e7/46/86e746c5660cd68e04ca70178816592e.jpg" />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-2">
                           <Loader2 className="h-3 w-3 animate-spin text-slate-400" />
                           <span className="text-xs text-slate-400">DyexaAI is typing...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100 relative">
              {/* Command suggestions */}
              {showCommands && (
                <div className="absolute bottom-full left-0 w-full bg-white border-t border-slate-200 shadow-lg mb-0 pb-1 rounded-t-lg overflow-hidden">
                  <div className="p-2 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">Commands</div>
                  {COMMANDS.map((cmd) => (
                    <button
                      key={cmd.command}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 flex items-center gap-2 text-slate-700"
                      onClick={() => {
                        setInputValue(cmd.command);
                        setShowCommands(false);
                        inputRef.current?.focus();
                      }}
                    >
                      <Terminal className="h-3 w-3 text-blue-500" />
                      <span className="font-medium">{cmd.command}</span>
                      <span className="text-slate-400 text-xs ml-auto">{cmd.description}</span>
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={(e) => handleSendMessage(e)} className="flex gap-2 items-end">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        className="text-slate-400 hover:text-slate-600"
                        onClick={handleFileUpload}
                      >
                        <Paperclip className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Attach file (Simulated)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    placeholder="Type a message or / for commands..."
                    className="bg-slate-50 border-0 focus-visible:ring-1 focus-visible:ring-blue-200 pr-10"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!inputValue.trim() || isTyping}
                  className={`${inputValue.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-200 text-slate-400'} transition-colors`}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <div className="text-center mt-2">
                <p className="text-[10px] text-slate-400">
                  Powered by <span className="font-semibold text-blue-500">DyexaLabs AI</span> • <a href="#" className="underline hover:text-blue-500">Privacy Policy</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-sm font-medium text-slate-700"
            >
              Need help? Chat with us!
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`h-14 w-14 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 ${
            isOpen ? "bg-slate-800 text-white rotate-90" : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          
          {!isOpen && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          )}
        </motion.button>
      </motion.div>
    </>
  );
};
