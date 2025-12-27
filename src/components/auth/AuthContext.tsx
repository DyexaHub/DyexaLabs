import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for persisted session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("dyexa_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email && password) {
      const mockUser = {
        id: "usr_123456",
        name: email.split("@")[0],
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };
      setUser(mockUser);
      localStorage.setItem("dyexa_user", JSON.stringify(mockUser));
      toast.success("Welcome back!", { description: "You have successfully logged in." });
    } else {
      toast.error("Login failed", { description: "Please check your credentials." });
    }
    setIsLoading(false);
  };

  const googleLogin = async () => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const mockUser = {
      id: "usr_google_789",
      name: "Guest",
      email: "dyexalabs@guest.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Google",
    };
    setUser(mockUser);
    localStorage.setItem("dyexa_user", JSON.stringify(mockUser));
    toast.success("Welcome!", { description: "Successfully signed in with Google." });
    setIsLoading(false);
  };

  const signup = async (name: string, email: string, _password: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const mockUser = {
      id: "usr_" + Math.random().toString(36).substr(2, 9),
      name: name,
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    };
    setUser(mockUser);
    localStorage.setItem("dyexa_user", JSON.stringify(mockUser));
    toast.success("Account created!", { description: "Welcome to Dyexa." });
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("dyexa_user");
    toast.info("Logged out", { description: "See you next time!" });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, googleLogin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
