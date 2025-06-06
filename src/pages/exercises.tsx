import React, { useEffect, useState } from "react";
import { questions as exercisesData } from "../data/datas";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, ChevronRight, SkipForward } from "lucide-react";
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
import LivesOut from "@/components/lives-out";
import ShowResult from "@/components/result";
import LoaderPage from "./loader";
import MongolianScript from "@/components/mongolian-script";

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

  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions", lessonIndex],
    queryFn: () => GetQuestionsByExercise(lessonIndex),
  });

  const exercises: Exercise[] = (questions as Exercise[]) || exercisesData;
  const currentExercise: Exercise = exercises[currentExerciseIndex];

  const { getUser, updateUser } = useAuth();
  const user = getUser();

  const queryClient = useQueryClient();
  const pointsMutation = useMutation({
    mutationFn: CompleteExercise,
    onSuccess: (data) => {
      updateUser(data.updatedUser);
      queryClient.invalidateQueries({ queryKey: ["me"] });
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
      queryClient.invalidateQueries({ queryKey: ["units"] });
      queryClient.invalidateQueries({ queryKey: ["activity"] });
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
  }, [currentExercise]);

  if (lives < 1) {
    return <LivesOut />;
  }

  if (isLoading) {
    return <LoaderPage />;
  }

  if (exercises.length === 0) {
    return (
      <div>
        Lesson not found or exercises are missing for this lesson index.
      </div>
    );
  }

  if (!currentExercise) {
    return <div>Loading or Exercise Not Found</div>;
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
          setIsAnswered(true);
          setIsCorrect(true);
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
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedPairs([]);
    setCorrectPairs([]);
    setIsMatchingCorrect(null);

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
    setLives(() => lives - 1);
    setSkipped(true);
    setIsAnswered(true);
  };

  if (showResults) {
    // Calculate total possible points
    // const totalPossiblePoints = exercises.length * 10;

    // Calculate accuracy
    // const accuracy = Math.round((points / totalPossiblePoints) * 100);

    return (
      <ShowResult
        points={points}
        nextLesson={nextLesson}
        isLoading={pointsMutation.isPending}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
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
                <div className="bg-indigo-50 p-2 rounded-lg border border-indigo-100 mb-4">
                  <p className="text-indigo-800 font-medium">
                    Зөв хариулт:{" "}
                    {currentExercise.type === "multiple_choice" ? (
                      <MongolianScript
                        script={currentExercise.correctAnswer}
                        className="text-2xl py-0"
                      />
                    ) : (
                      JSON.stringify(currentExercise.correctAnswer)
                    )}
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
