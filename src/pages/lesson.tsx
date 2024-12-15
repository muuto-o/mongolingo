import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Lesson() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gradient-to-b from-indigo-50 to-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="w-full border-2 border-gray-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-bold text-2xl text-center text-white py-4 mb-12 shadow-lg">
        Эгшиг үсэг
      </h1>

      {/* Lesson Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {/* Active Lesson Card */}
        <Card
          className="w-28 h-28 flex items-center justify-center bg-white border border-gray-300 shadow-xl rounded-3xl cursor-pointer transform transition-all hover:scale-110 hover:shadow-2xl active:scale-95"
          onClick={() => navigate("/exercise")}
        >
          <span className="text-base font-bold text-gray-700">а, э</span>
        </Card>

        {/* Locked Lesson Cards */}
        {["о, у", "и", "ө, ү", "Бататгах"].map((text, idx) => (
          <Card
            key={idx}
            className="w-28 h-28 flex items-center justify-center bg-gray-200 border border-gray-300 shadow-sm rounded-3xl cursor-not-allowed opacity-70 transform transition-all hover:scale-100"
          >
            <span className="text-base font-medium text-gray-500">{text}</span>
          </Card>
        ))}
      </div>

      {/* Footer/Description */}
      <p className="mt-12 text-center text-gray-600 text-sm">
        Илүү хичээлүүд удахгүй орно.
      </p>
    </div>
  );
}
