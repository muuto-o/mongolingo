import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <div className="h-full w-screen flex">
      <Sidebar/>
      <div className="p-8 w-full h-full flex">
        <Outlet/>
      </div>
    </div>
  )
}
