import React, { createContext, useState, type ReactNode } from "react";

type UserProfile = {
  email: string;
  avatarUrl?: string;
};

export const UserContext = createContext<{
  profile: UserProfile | null;
  setProfile: (p: UserProfile) => void;
}>({
  profile: null,
  setProfile: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};
