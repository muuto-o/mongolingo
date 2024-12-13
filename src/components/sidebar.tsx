import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <aside className="w-full bg-white p-6 h-full border-r border-gray-300 shadow-lg flex flex-col justify-between">
        {/* Brand */}
        <div className="text-green-600 text-3xl font-extrabold mb-12 tracking-wider">
          MONGOLINGO
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          <div
            className="flex items-center text-blue-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fas fa-home text-yellow-500 mr-3"></i>
            <span className="font-semibold">ХИЧЭЭЛ</span>
          </div>
          <div
            className="flex items-center text-blue-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
            onClick={() => navigate("/letters")}
          >
            <i className="fas fa-language text-blue-600 mr-3"></i>
            <span className="font-semibold">ҮСЭГНҮҮД</span>
          </div>
          <div
            className="flex items-center text-blue-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
            onClick={() => navigate("/leaderboard")}
          >
            <i className="fas fa-trophy text-yellow-500 mr-3"></i>
            <span className="font-semibold">ТЭРГҮҮЛЭГЧИЙН САМБАР</span>
          </div>
          <div
            className="flex items-center text-blue-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <i className="fas fa-user text-blue-600 mr-3"></i>
            <span className="font-semibold">ХЭРЭГЛЭГЧ</span>
          </div>
        </nav>

        {/* Footer */}
        <div className="text-gray-600 text-sm mt-12 text-center">
          &copy; 2024 Mongolingo. All rights reserved.
        </div>
      </aside>
    </div>
  );
}
