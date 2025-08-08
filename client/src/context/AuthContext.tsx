import React, { createContext, useContext, useState, useEffect } from "react";
import type { User } from "../types";

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  // ✅ Auto-login fake user in dev mode
  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      setUser({
        id: "demo-user",
        name: "Demo Admin",
        email: "demo@example.com",
        role: "Founder", // ✅ Matches your Role union type
        avatarUrl: "https://i.pravatar.cc/150?u=demo",
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
