import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/app";
import { AuthContextProvider } from "./hooks/auth";
// import Demo from "./mock/pages/Demo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: Infinity,
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <App />
      {/* <Demo /> */}
    </AuthContextProvider>
  </QueryClientProvider>
);
