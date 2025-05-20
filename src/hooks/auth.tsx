import { createContext, useContext, useState } from "react";

import { LoginResponse, User } from "@/constants/types";

type AuthContextProps = {
  user: User | null;
  addResetPasswordToken: (token: string) => void;
  removeResetPasswordToken: () => void;
  getResetPasswordToken: () => string | null;
  getAccessToken: () => string | null;
  signin: (data: LoginResponse) => void;
  updateUser: (data: User) => void;
  logout: () => void;
  getUser: () => User | null;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser) as User;
    }
    return null;
  });

  console.log(user);

  const getUser = () => {
    const storedUser = localStorage.getItem("user");
    // console.log(storedUser);
    if (storedUser) {
      return JSON.parse(storedUser) as User;
    }
    return null;
  };

  const updateUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
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
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("accessToken", JSON.stringify(data.token));
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        updateUser,
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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be within AuthContextProvider.");
  return context;
};
