import { Card } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book } from "lucide-react";

export default function Lesson() {
  const navigate = useNavigate();
  const location = useLocation();
  const unlockNext = location.state?.unlockNext;
  const [unlockedLessons, setUnlockedLessons] = useState([0]);

  useEffect(() => {
    if (unlockNext !== undefined && !unlockedLessons.includes(unlockNext)) {
      setUnlockedLessons((prev) => [...prev, unlockNext]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlockNext]); // Initially, only the first lesson is unlocked

  const lessons = [
    { title: "а, э", icon: <Book className="w-6 h-6" /> },
    { title: "о, у", icon: <Book className="w-6 h-6" /> },
    { title: "и", icon: <Book className="w-6 h-6" /> },
    { title: "ө, ү", icon: <Book className="w-6 h-6" /> },
    { title: "Бататгах", icon: <Book className="w-6 h-6" /> },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
        {lessons.map((lesson, index) => (
          <Card
            key={index}
            className={`w-24 h-24 flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all duration-200 ${
              unlockedLessons.includes(index)
                ? "bg-white border-2 border-green-100 hover:border-green-300 hover:shadow-lg"
                : "bg-gray-100 cursor-not-allowed"
            }`}
            onClick={() =>
              unlockedLessons.includes(index) && handleLessonClick(index)
            }
          >
            <div
              className={`text-3xl mb-2 ${
                unlockedLessons.includes(index)
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
            >
              {/* Replace these with your actual icons - example uses emoji */}
              {lesson.icon || "📚"}
            </div>
            {unlockedLessons.includes(index) && (
              <div className="w-6 h-2 bg-green-400 rounded-full"></div>
            )}
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-600 text-sm">
        Илүү хичээлүүд удахгүй орно.
      </p>
    </div>
  );
}
