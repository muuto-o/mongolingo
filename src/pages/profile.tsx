import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Welcome to Your Profile
        </h1>
        <div className="mb-6">
          <p className="text-lg text-gray-600 mb-2">Name: John Doe</p>
          <p className="text-lg text-gray-600">Email: johndoe@example.com</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded-md text-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
