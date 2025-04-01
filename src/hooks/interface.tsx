import { createContext, useContext, useState } from "react";

type AuthContextProps = {
  isVisible: boolean;
  setSidebar: (value: boolean) => void;
};

const InterfaceContext = createContext<AuthContextProps | null>(null);

export const InterfaceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const setSidebar = (value: boolean) => {
    setIsVisible(value);

    console.log(value);
    console.log(":");
  };

  return (
    <InterfaceContext.Provider value={{ isVisible, setSidebar }}>
      {children}
    </InterfaceContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useInterface = () => {
  const context = useContext(InterfaceContext);
  if (!context) throw new Error("useAuth must be within AuthContextProvider.");
  return context;
};
