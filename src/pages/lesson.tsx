// import Section from "@/components/section";

import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Lesson() {
  const navigate = useNavigate();
  return (
    <div className="p-6 min-h-screen w-full text-center flex flex-col items-center">
      <h1 className="w-10/12 border-2 rounded-lg font-bold text-xl mb-24">
        Эгшиг үсэг
      </h1>
      <div className="w-full">
        <Card
          className="w-1/12 h-20 cursor-pointer"
          onClick={() => navigate("/exercise")}
        >
          Lesson
        </Card>
      </div>
    </div>
  );
}
