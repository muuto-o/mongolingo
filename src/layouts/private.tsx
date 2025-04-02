import Sidebar from "@/components/sidebar";
import { AuthContextProvider } from "@/hooks/auth";
import { InterfaceContextProvider } from "@/hooks/interface";
import { routes } from "@/lib/routes";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateLayout() {
  const isLogged = localStorage.getItem("user");
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  const currentRoute = routes.find((route) => route.path === location.pathname);
  const showSidebar = currentRoute ? currentRoute.showSidebar : true;
  return (
    <AuthContextProvider>
      <InterfaceContextProvider>
        <div className="h-full w-screen flex">
          {showSidebar && <Sidebar />}
          <div className="p-8 w-full h-full flex overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </InterfaceContextProvider>
    </AuthContextProvider>
  );
}
