import { useInterface } from "@/hooks/interface";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Languages, Trophy, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isVisible } = useInterface();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const navItems = [
    {
      path: "/",
      name: "ХИЧЭЭЛ",
      icon: <Home className="w-5 h-5" />,
      color: "text-yellow-500",
      activePatterns: ["/", "/lesson", "/exercise"],
    },
    {
      path: "/letters",
      name: "ҮСЭГНҮҮД",
      icon: <Languages className="w-5 h-5" />,
      color: "text-blue-500",
      activePatterns: ["/letters"],
    },
    {
      path: "/leaderboard",
      name: "ТЭРГҮҮЛЭГЧИЙН САМБАР",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-yellow-500",
      activePatterns: ["/leaderboard"],
    },
    {
      path: "/profile",
      name: "ХЭРЭГЛЭГЧ",
      icon: <User className="w-5 h-5" />,
      color: "text-blue-500",
      activePatterns: ["/profile", "/settings", "/achievements"],
    },
  ];

  const isActive = (patterns: string[]) => {
    return patterns.some((pattern) => {
      if (pattern === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(pattern);
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="h-full">
          <aside className="w-full bg-white p-6 h-full border-r border-gray-200 shadow-sm flex flex-col justify-between">
            {/* Brand */}
            <div className="text-green-600 text-2xl font-bold mb-8 tracking-wide flex items-center mx-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-3 py-1 rounded-lg">
                MONGOLINGO
              </span>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive(item.activePatterns)
                      ? "bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  <span className={`${item.color} mr-3`}>{item.icon}</span>
                  <span>{item.name}</span>
                  {isActive(item.activePatterns) && (
                    <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="text-gray-500 text-xs mt-8 text-center py-4 border-t border-gray-100">
              &copy; 2024 Mongolingo. All rights reserved.
            </div>
          </aside>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <nav className="flex justify-around items-center p-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                  isActive(item.activePatterns)
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => navigate(item.path)}
              >
                <span className={`${item.color} mb-1`}>{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
