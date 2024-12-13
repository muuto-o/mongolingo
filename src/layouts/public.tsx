import { Navigate, Outlet } from "react-router-dom";

export default function PublicLayout() {
  const isLogged = localStorage.getItem("user");
  if (isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-full w-screen">
      <Outlet />
    </div>
  );
}
