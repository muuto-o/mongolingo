// import Section from "@/components/section";

import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Lesson() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="w-full max-w-lg border-2 border-gray-300 bg-white rounded-lg font-bold text-2xl text-gray-800 py-4 mb-12 shadow-md">
        Эгшиг үсэг
      </h1>

      {/* Lesson Card */}
      <div className="w-full flex justify-center">
        <Card
          className="w-40 h-40 flex items-center justify-center bg-white border border-gray-300 shadow-lg rounded-lg cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          onClick={() => navigate("/exercise")}
        >
          <span className="text-xl font-semibold text-gray-700">Lesson</span>
        </Card>
        <Card
          className="w-40 h-40 flex items-center justify-center bg-white border border-gray-300 shadow-lg rounded-lg cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          onClick={() => navigate("/exercise")}
        >
          <span className="text-xl font-semibold text-gray-700">Lesson</span>
        </Card>
        <Card
          className="w-40 h-40 flex items-center justify-center bg-white border border-gray-300 shadow-lg rounded-lg cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          onClick={() => navigate("/exercise")}
        >
          <span className="text-xl font-semibold text-gray-700">Lesson</span>
        </Card>
        <Card
          className="w-40 h-40 flex items-center justify-center bg-white border border-gray-300 shadow-lg rounded-lg cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          onClick={() => navigate("/exercise")}
        >
          <span className="text-xl font-semibold text-gray-700">Lesson</span>
        </Card>
        <Card
          className="w-40 h-40 flex items-center justify-center bg-white border border-gray-300 shadow-lg rounded-lg cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          onClick={() => navigate("/exercise")}
        >
          <span className="text-xl font-semibold text-gray-700">Lesson</span>
        </Card>
      </div>
    </div>
  );
}
