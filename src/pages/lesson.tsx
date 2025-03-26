import { Card } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Lesson() {
  const navigate = useNavigate();
  const location = useLocation();
  const unlockNext = location.state?.unlockNext;
  const [unlockedLessons, setUnlockedLessons] = useState([0]);

  useEffect(() => {
    if (unlockNext !== undefined && !unlockedLessons.includes(unlockNext)) {
      setUnlockedLessons((prev) => [...prev, unlockNext]);
    }
  }, [unlockNext]); // Initially, only the first lesson is unlocked

  const lessons = [
    { title: "а, э" },
    { title: "о, у" },
    { title: "и" },
    { title: "ө, ү" },
    { title: "Бататгах" },
  ];

  const handleLessonClick = (index: number) => {
    if (unlockedLessons.includes(index)) {
      navigate("/exercise", { state: { lessonIndex: index } });
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-indigo-50 to-gray-100 flex flex-col items-center p-6">
      <h1 className="w-full border-2 border-gray-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-bold text-2xl text-center text-white py-4 mb-12 shadow-lg">
        Эгшиг үсэг
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {lessons.map((lesson, index) => (
          <Card
            key={index}
            className={`w-28 h-28 flex items-center justify-center border border-gray-300 shadow-xl rounded-3xl cursor-pointer transform transition-all hover:scale-110 hover:shadow-2xl active:scale-95 ${
              unlockedLessons.includes(index)
                ? "bg-white"
                : "bg-gray-200 cursor-not-allowed opacity-70 hover:scale-100"
            }`}
            onClick={() => handleLessonClick(index)}
          >
            <span className="text-base font-bold text-gray-700">
              {lesson.title}
            </span>
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-600 text-sm">
        Илүү хичээлүүд удахгүй орно.
      </p>
    </div>
  );
}
