// import Section from "@/components/section";

import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Lesson() {
  const navigate = useNavigate();
  return (
    <div className=" w-full bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="w-full border-2 border-gray-300 bg-white rounded-lg font-semibold text-xl text-center text-gray-800 py-4 mb-12 shadow-md">
        Эгшиг үсэг
      </h1>

      {/* Lesson Card */}
      <div className="w-full flex justify-around">
        <Card
          className="w-24 h-24 flex items-center justify-center bg-white border border-gray-300 shadow-lg rounded-3xl cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          onClick={() => navigate("/exercise")}
        >
          <span className="text-base font-semibold text-gray-700">а, э</span>
        </Card>
        <Card
          className="w-24 h-24 flex items-center justify-center bg-gray-300 border border-gray-300 shadow-lg rounded-3xl cursor-not-allowed "
          // onClick={() => navigate("/exercise")}
        >
          <span className="text-base font-semibold text-gray-700">о, у</span>
        </Card>
        <Card
          className="w-24 h-24 flex items-center justify-center bg-gray-300 border border-gray-300 shadow-lg rounded-3xl cursor-not-allowed "
          // onClick={() => navigate("/exercise")}
        >
          <span className="text-base font-semibold text-gray-700">и</span>
        </Card>
        <Card
          className="w-24 h-24 flex items-center justify-center bg-gray-300 border border-gray-300 shadow-lg rounded-3xl cursor-not-allowed "
          // onClick={() => navigate("/exercise")}
        >
          <span className="text-base font-semibold text-gray-700">ө, ү</span>
        </Card>
        <Card
          className="w-24 h-24 flex items-center justify-center bg-gray-300 border border-gray-300 shadow-lg rounded-3xl cursor-not-allowed "
          // onClick={() => navigate("/exercise")}
        >
          <span className="text-base font-semibold text-gray-700">
            Бататгах
          </span>
        </Card>
      </div>
    </div>
  );
}
