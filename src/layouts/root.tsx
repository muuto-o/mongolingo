import { Outlet } from 'react-router-dom';

// import { Toaster } from '@/components/ui/toaster';

export default function RootLayout() {
  return (
   
    <div className="h-full w-full bg-slate-100" vaul-drawer-wrapper="">
      <Outlet />
      {/* <Toaster /> */}
    </div>
  );
}
