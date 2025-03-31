import Sidebar from "@/components/sidebar";
import { AuthContextProvider } from "@/hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateLayout() {
  const isLogged = localStorage.getItem("user");
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return (
    <AuthContextProvider>
      <div className="h-full w-screen flex">
        <Sidebar />
        <div className="p-8 w-full h-full flex">
          <Outlet />
        </div>
      </div>
    </AuthContextProvider>
  );
}
