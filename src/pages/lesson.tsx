import { Card } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book, Lock, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getUnitsWithExercises } from "@/services/questions";
import { useAuth } from "@/hooks/auth";

export default function Lesson() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const unlockNext = location.state?.unlockNext;
  const [unlockedLessons, setUnlockedLessons] = useState([0]);

  console.log(user);
  const exerciseLevel = user?.exerciseLevel || 1;
  // const exerciseLevel = 2;

  useEffect(() => {
    if (unlockNext !== undefined && !unlockedLessons.includes(unlockNext)) {
      setUnlockedLessons((prev) => [...prev, unlockNext]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlockNext]);

  const { data: unitData } = useQuery({
    queryKey: ["units"],
    queryFn: () => getUnitsWithExercises(exerciseLevel),
  });

  const handleLessonClick = (
    exerciseId: string,
    unlocked: boolean,
    level: number
  ) => {
    if (unlocked) {
      if (level === 1 || level === 6) {
        console.log("level");
        console.log(level);
        navigate("/tutorial", { state: { exerciseId } });
      } else {
        navigate("/exercise", { state: { exerciseId: exerciseId } });
      }
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
    <div className="w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center p-6">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        {unitData?.map((unit, index) => (
          <div className="w-full" key={index}>
            <h1 className="w-full border border-gray-200 bg-gradient-to-r from-blue-400 to-purple-600  rounded-xl font-bold text-2xl text-center text-white py-5 mb-8 shadow-lg backdrop-blur-sm">
              {unit.name}
            </h1>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-5 p-4"
              key={index}
            >
              {unit.exercises.map((exercise, ex_index) => (
                <motion.div key={ex_index} variants={item}>
                  <Card
                    className={`w-full aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${
                      exercise.unlocked
                        ? `bg-gradient-to-br from-purple-400 to-purple-600 hover:shadow-xl hover:scale-105`
                        : "bg-gray-100 cursor-not-allowed disabled"
                    } relative overflow-hidden`}
                    onClick={() =>
                      handleLessonClick(
                        exercise.id,
                        exercise.unlocked,
                        exercise.level
                      )
                    }
                  >
                    {exercise.unlocked ? (
                      <>
                        <div className="text-white text-3xl mb-2">
                          <Book className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-medium text-center px-2">
                          {exercise.level}
                        </h3>
                        <div
                          className={`absolute top-2 right-2 rounded-full p-1 ${
                            exercise.level >= exerciseLevel && exercise.unlocked
                              ? ` bg-white/20`
                              : `bg-green-500`
                          }`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-gray-400 text-3xl mb-2">
                          <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-gray-500 font-medium text-center px-2">
                          {exercise.level}
                        </h3>
                      </>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="my-12 text-center text-gray-600 text-sm italic"
        >
          Илүү хичээлүүд удахгүй орно.
        </motion.p>
      </motion.div>
    </div>
  );
}
