import React, { useEffect, useState } from "react";
import { questions as exercisesData } from "../data/datas";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Zap, ChevronRight, SkipForward } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CompleteExercise } from "@/services/auth";
import { useAuth } from "@/hooks/auth";
import {
  CompleteExerciseRequest,
  MatchingExercise,
  MultipleChoiceExercise,
} from "@/constants/types";
import { GetQuestionsByExercise } from "@/services/questions";
import MultipleChoice from "@/components/multiple-choice";
import Matching from "@/components/matching-exercise";

export type Exercise = MultipleChoiceExercise | MatchingExercise;

// const lessonExercises: Exercise[][] = exercisesData as Exercise[][];

const Exercise: React.FC = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(4);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<
    { left: number; right: number }[]
  >([]);
  const [correctPairs, setCorrectPairs] = useState<
    { left: number; right: number }[]
  >([]);
  const [isMatchingCorrect, setIsMatchingCorrect] = useState<boolean | null>(
    null
  );

  const [shuffledLeftOptions, setShuffledLeftOptions] = useState<string[]>([]);
  const [shuffledRightOptions, setShuffledRightOptions] = useState<string[]>(
    []
  );

  const navigate = useNavigate();
  const location = useLocation();
  const lessonIndex = location.state?.exerciseId;

  const { data: questions } = useQuery({
    queryKey: ["questions", lessonIndex],
    queryFn: () => GetQuestionsByExercise(lessonIndex),
  });

  const exercises: Exercise[] = (questions as Exercise[]) || exercisesData;
  const currentExercise: Exercise = exercises[currentExerciseIndex];

  const { getUser, signin } = useAuth();
  const user = getUser();

  const queryClient = useQueryClient();
  const pointsMutation = useMutation({
    mutationFn: CompleteExercise,
    onSuccess: (data) => {
      signin(data);
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  // useEffect(() => {
  //   // Initialize audio element
  //   if (currentExercise.type === "multiple_choice") {
  //     audioRef.current = new Audio(currentExercise.audioPath);
  //     audioRef.current.onended = () => setIsPlaying(false);
  //   }

  //   return () => {
  //     if (audioRef.current) {
  //       audioRef.current.pause();
  //       audioRef.current = null;
  //     }
  //   };
  // }, [currentExercise]);

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      checkMatchingPair();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLeft, selectedRight]);

  useEffect(() => {
    if (currentExercise.type === "matching") {
      const leftOptions = Object.keys(currentExercise.correctAnswer);
      const rightOptions = Object.values(currentExercise.correctAnswer);
      setShuffledLeftOptions(shuffleArray(leftOptions));
      setShuffledRightOptions(shuffleArray(rightOptions));
    }
    // if (currentExercise.type === "multiple_choice") {
    //   audioRef.current = new Audio(currentExercise.audioPath);
    //   audioRef.current.onended = () => setIsPlaying(false);
    // }

    // return () => {
    //   if (audioRef.current) {
    //     audioRef.current.pause();
    //     audioRef.current = null;
    //   }
    // };
  }, [currentExercise]); // Run only when currentExercise changes

  if (lives < 1) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full gap-6 text-center p-6">
        <div className="max-w-md mx-auto">
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-rose-800 mb-3">
              Уучлаарай, та дасгалыг дахин ажиллана уу
            </h3>
            <p className="text-gray-600 mb-4">
              Таны амь дууссан. Дараагийн удаа илүү сайн хийгээрэй😉
            </p>
            <Button
              onClick={() => navigate("/lesson")}
              className="py-5 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium shadow-md transition-all"
            >
              Буцах
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div>
        Lesson not found or exercises are missing for this lesson index.
      </div>
    );
  }

  if (!currentExercise) {
    return <div>Loading or Exercise Not Found</div>; // Handle case where exercise is undefined
  }

  const checkMultipleChoiceAnswer = (exercise: MultipleChoiceExercise) => {
    if (userAnswers[currentExerciseIndex] === exercise.correctAnswer) {
      setPoints((prev) => prev + 10);
      setIsCorrect(true);
    } else {
      setLives(() => lives - 1);
      setIsCorrect(false);
      setShowCorrectAnswer(true);
    }
  };

  const checkMatchingPair = () => {
    if (selectedLeft !== null && selectedRight !== null) {
      const leftOption = shuffledLeftOptions[selectedLeft];
      const rightOption = shuffledRightOptions[selectedRight];

      if (
        typeof currentExercise.correctAnswer === "object" &&
        currentExercise.correctAnswer[leftOption] === rightOption
      ) {
        // Check if pair is already in correctPairs
        const isPairUnique = !correctPairs.some(
          (pair) => pair.left === selectedLeft && pair.right === selectedRight
        );

        if (isPairUnique) {
          setCorrectPairs([
            ...correctPairs,
            { left: selectedLeft, right: selectedRight },
          ]);
        }

        setIsMatchingCorrect(true);
        setMatchedPairs([
          ...matchedPairs,
          { left: selectedLeft, right: selectedRight },
        ]);
        setSelectedLeft(null);
        setSelectedRight(null);

        // Check if all pairs are matched
        if (
          correctPairs.length + 1 ===
          Object.keys(currentExercise.correctAnswer).length
        ) {
          setIsAnswered(true); // Mark exercise as answered
          setIsCorrect(true); // Mark exercise as correct
        }
      } else {
        setLives(() => lives - 1);
        setIsMatchingCorrect(false);
      }
    }
  };

  const checkMatchingAnswer = (exercise: MatchingExercise) => {
    let matchingPoints = 0;
    Object.keys(exercise.correctAnswer).forEach((word, index) => {
      if (
        userAnswers[currentExerciseIndex]?.[index] ===
        exercise.correctAnswer[word]
      ) {
        matchingPoints += 2.5;
      }
    });
    if (matchingPoints < Object.keys(exercise.correctAnswer).length * 2.5) {
      setLives(() => lives - 1);
      setIsCorrect(false);
    } else {
      setPoints((prev) => prev + 10);
      setIsCorrect(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const checkAnswer = () => {
    setIsCorrect(null);
    setShowCorrectAnswer(false);
    if (currentExercise.type === "multiple_choice") {
      checkMultipleChoiceAnswer(currentExercise);
    } else if (currentExercise.type === "matching") {
      checkMatchingAnswer(currentExercise);
    }
    setIsAnswered(true);
  };

  const nextExercise = () => {
    setIsAnswered(false);
    setSkipped(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowCorrectAnswer(false);
    setSelectedLeft(null); // Reset selectedLeft
    setSelectedRight(null); // Reset selectedRight
    setMatchedPairs([]); // Reset matchedPairs
    setCorrectPairs([]); // Reset correctPairs
    setIsMatchingCorrect(null); // Reset isMatchingCorrect

    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
      const userData: CompleteExerciseRequest = {
        email: user?.email ? user?.email : "",
        username: user?.username ? user?.username : "",
        points: points,
        experience: Math.floor(points * 0.4),
        exerciseId: lessonIndex,
      };
      pointsMutation.mutate(userData);
      // Check if there is a next lesson before unlocking
    }
  };

  const nextLesson = () => {
    // toast({ title: "Дараагийн хичээл нээгдлээ." });
    navigate("/lesson", { state: { unlockNext: lessonIndex + 1 } });
  };

  const skipExercise = () => {
    setSkipped(true);
    setIsAnswered(true);
  };

  if (showResults) {
    // Calculate total possible points
    // const totalPossiblePoints = exercises.length * 10;

    // Calculate accuracy
    // const accuracy = Math.round((points / totalPossiblePoints) * 100);

    return (
      <div className="max-w-2xl mx-auto text-center p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Баяр хүргэе!</h2>
            {/* <p className="text-blue-100">
              You made {exercises.length - (lives > 0 ? lives : 0)} mistakes in
              this lesson
            </p> */}
          </div>
          <div className="p-8">
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm w-full sm:w-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="text-amber-600" size={24} />
                  <p className="text-amber-800 font-bold">Нийт оноо</p>
                </div>
                <p className="text-3xl font-bold text-amber-900">{points}</p>
              </div>
              {/* <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm w-full sm:w-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="text-emerald-600" size={24} />
                  <p className="text-emerald-800 font-bold">Онч</p>
                </div>
                <p className="text-3xl font-bold text-emerald-900">
                  {accuracy}%
                </p>
              </div> */}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                className="gap-2 py-5 px-6 rounded-xl"
                disabled={true}
              >
                coming soon...
              </Button>
              <Button
                className="gap-2 py-5 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                disabled={pointsMutation.isPending}
                onClick={nextLesson}
              >
                Үргэлжлүүлэх <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex justify-between items-center">
          <div className="w-full bg-gray-100 rounded-full h-3">
            {/* <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full"
              style={{
                width: `${
                  ((currentExerciseIndex + 1) / exercises.length) * 100
                }%`,
              }}
            ></div> */}
            <Progress
              className="[&>*]:bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full "
              value={((currentExerciseIndex + 1) / exercises.length) * 100}
            />
          </div>
          <div className="flex items-center ml-4">
            <div className="flex items-center bg-rose-50 px-3 py-1 rounded-full">
              <Heart className="text-rose-500" size={18} fill="currentColor" />
              <span className="text-rose-800 font-medium ml-1">{lives}</span>
            </div>
          </div>
        </div>

        {currentExercise.type === "multiple_choice" && (
          <MultipleChoice
            exercise={currentExercise}
            isCorrect={isCorrect}
            currentExerciseIndex={currentExerciseIndex}
            showCorrectAnswer={showCorrectAnswer}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setUserAnswers={setUserAnswers}
          />
          // onCorrect={() => {
          //   setPoints((p) => p + 10);
          //   setIsCorrect(true);
          //   setIsAnswered(true);
          // }}
          // onIncorrect={() => {
          //   setLives((l) => l - 1);
          //   setIsCorrect(false);
          //   setIsAnswered(true);
          // }}
        )}
        {currentExercise.type === "matching" && (
          <Matching
            exercise={currentExercise}
            isMatchingCorrect={isMatchingCorrect}
            selectedLeft={selectedLeft}
            selectedRight={selectedRight}
            correctPairs={correctPairs}
            setSelectedLeft={setSelectedLeft}
            setSelectedRight={setSelectedRight}
            shuffledLeftOptions={shuffledLeftOptions}
            shuffledRightOptions={shuffledRightOptions}
          />
        )}

        {!isAnswered ? (
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button
              onClick={checkAnswer}
              className="py-5 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              //   disabled={currentExercise.type === "matching"} // Disable for matching exercise
            >
              Шалгах
            </Button>
            <Button
              onClick={skipExercise}
              variant="outline"
              className="py-5 px-8 rounded-xl gap-2"
              disabled={isCorrect === true}
            >
              <SkipForward size={16} />
              Алгасах
            </Button>
          </div>
        ) : (
          <div className="flex justify-center mt-6">
            {skipped && (
              <div className="text-center w-full">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-4">
                  <p className="text-indigo-800 font-medium">
                    Correct solution:{" "}
                    {currentExercise.type === "multiple_choice"
                      ? currentExercise.correctAnswer
                      : JSON.stringify(currentExercise.correctAnswer)}
                  </p>
                </div>
                <Button
                  onClick={nextExercise}
                  className="py-5 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 gap-2"
                >
                  Үргэлжлүүлэх <ChevronRight size={18} />
                </Button>
              </div>
            )}
            {!skipped && (
              <Button
                onClick={nextExercise}
                className="py-5 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 gap-2"
              >
                Үргэлжлүүлэх <ChevronRight size={18} />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
