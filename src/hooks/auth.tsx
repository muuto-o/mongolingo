import { createContext, useContext, useState } from "react";

import { LoginResponse } from "@/constants/types";

type AuthContextProps = {
  user: LoginResponse | null;
  addResetPasswordToken: (token: string) => void;
  removeResetPasswordToken: () => void;
  getResetPasswordToken: () => string | null;
  getAccessToken: () => string | null;
  signin: (data: LoginResponse) => void;
  logout: () => void;
  getUser: () => LoginResponse | null;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<LoginResponse | null>(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser) as LoginResponse;
    }
    return null;
  });

  console.log(user);

  const getUser = () => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      return JSON.parse(storedUser) as LoginResponse;
    }
    return null;
  };

  const addResetPasswordToken = (token: string) => {
    localStorage.setItem("resetPasswordToken", token);
  };
  const getResetPasswordToken = () => {
    return localStorage.getItem("resetPasswordToken");
  };
  const removeResetPasswordToken = () => {
    localStorage.removeItem("resetPasswordToken");
  };

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  const signin = (data: LoginResponse) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        logout,
        addResetPasswordToken,
        removeResetPasswordToken,
        getResetPasswordToken,
        getAccessToken,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be within AuthContextProvider.");
  return context;
};
