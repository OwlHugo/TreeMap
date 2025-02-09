import React, { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  validateAuthToken,
  logoutUser,
} from "@/services/authService";
import { getUserToken } from "@/utils/auth";
import { getUserInfo } from "@/services/userService";

type User = {
  id: string;
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isValid = await validateAuthToken();
      if (isValid) {
        setUser(await getUserInfo());
      } else {
        logoutUser();
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    const userData = await loginUser(credentials);
    return userData;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
