"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextProps {
  user: any;
  setUser: (user: any) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  console.log("current user =>", user);

  const logout = async () => {
    await fetch(`${process.env.BACKEND_URL}/api/v1/login`);
    localStorage.removeItem("tokennn");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
