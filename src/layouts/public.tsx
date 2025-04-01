import { Navigate, Outlet } from "react-router-dom";

export default function PublicLayout() {
  const isLogged = localStorage.getItem("user");
  if (isLogged) {
    return <Navigate to="/lesson" />;
  }

  return (
    <div className="h-full w-screen bg-gray-100">
      <Outlet />
    </div>
  );
}
