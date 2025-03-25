import { Card } from "@/components/ui/card";
import { User } from "@/constants/types";
// import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  console.log(localStorage.getItem("user"));

  // Mocked user object, this would typically come from a global state or context
  const user: User = {
    username: "John",
    email: "john@example.com",
    points: 7,
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="w-full flex items-center justify-between px-4 mb-6">
        {/* <h1 className="text-2xl font-bold text-gray-800"></h1> */}
      </div>

      {/* Profile Card */}
      <Card className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Тавтай морил, {user.username}
          </h2>
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-600 mb-2">Нэр: {user.username}</p>
          <p className="text-lg text-gray-600">Имэйл: {user.email}</p>
          <p className="text-lg text-gray-600">Оноо: {user.points}</p>
        </div>
      </Card>

      {/* Logout Button */}
      <div className="w-full max-w-2xl">
        <button
          onClick={handleLogout}
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-800 transition-colors"
        >
          Гарах
        </button>
      </div>
    </div>
  );
}
