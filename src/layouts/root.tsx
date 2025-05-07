import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full bg-background" vaul-drawer-wrapper="">
      <Outlet />
      <Toaster />
    </div>
  );
}
