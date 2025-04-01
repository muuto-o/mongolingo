import { Card } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book, Lock, Check, Award } from "lucide-react";
import { motion } from "framer-motion";

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
  }, [unlockNext]);

  const lessons = [
    {
      title: "а, э",
      icon: <Book className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "о, у",
      icon: <Book className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "и",
      icon: <Book className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "ө, ү",
      icon: <Book className="w-6 h-6" />,
      color: "from-emerald-400 to-emerald-600",
    },
    {
      title: "Бататгах",
      icon: <Award className="w-6 h-6" />,
      color: "from-amber-400 to-amber-600",
    },
  ];

  const handleLessonClick = (index: number) => {
    if (unlockedLessons.includes(index)) {
      navigate("/exercise", { state: { lessonIndex: index } });
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center p-6">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <h1 className="w-full border border-gray-200 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-2xl text-center text-white py-5 mb-8 shadow-lg backdrop-blur-sm">
          Эгшиг үсэг
        </h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 p-4"
        >
          {lessons.map((lesson, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className={`w-full aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${
                  unlockedLessons.includes(index)
                    ? `bg-gradient-to-br ${lesson.color} hover:shadow-xl hover:scale-105`
                    : "bg-gray-100 cursor-not-allowed"
                } relative overflow-hidden`}
                onClick={() => handleLessonClick(index)}
              >
                {unlockedLessons.includes(index) ? (
                  <>
                    <div className="text-white text-3xl mb-2">
                      {lesson.icon}
                    </div>
                    <h3 className="text-white font-medium text-center px-2">
                      {lesson.title}
                    </h3>
                    <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-gray-400 text-3xl mb-2">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-gray-500 font-medium text-center px-2">
                      {lesson.title}
                    </h3>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-600 text-sm italic"
        >
          Илүү хичээлүүд удахгүй орно.
        </motion.p>
      </motion.div>
    </div>
  );
}
