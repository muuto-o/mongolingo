import React, { useEffect, useRef, useState } from "react";
import { questions as exercisesData } from "../data/datas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Zap,
  Check,
  X,
  ChevronRight,
  SkipForward,
  Volume2,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CompleteExercise } from "@/services/auth";
import { useAuth } from "@/hooks/auth";
import {
  CompleteExerciseRequest,
  MatchingExercise,
  MultipleChoiceExercise,
} from "@/constants/types";
import { GetQuestionsByExercise } from "@/services/questions";

export type Exercise = MultipleChoiceExercise | MatchingExercise;

// const lessonExercises: Exercise[][] = exercisesData as Exercise[][];

const Exercise: React.FC = () => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(5);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  console.log("lessonIndex:", lessonIndex); // Debugging

  // const exercises: Exercise[] = lessonExercises[lessonIndex] || [];
  // const exercises: Exercise[] =
  //   lessonIndex < lessonExercises.length && lessonExercises[lessonIndex]
  //     ? lessonExercises[lessonIndex]
  //     : [];

  // console.log("exercises:", exercises); //debugging.
  // console.log("lessonExercises:", lessonExercises); //debugging.

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

  useEffect(() => {
    // Initialize audio element
    if (currentExercise.type === "multiple_choice") {
      audioRef.current = new Audio(currentExercise.audioPath);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentExercise]);

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
    if (currentExercise.type === "multiple_choice") {
      audioRef.current = new Audio(currentExercise.audioPath);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentExercise]); // Run only when currentExercise changes

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
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMultipleChoiceAnswer = (correctAnswer: string) => {
    setSelectedOption(correctAnswer);
    setUserAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentExerciseIndex] = correctAnswer;
      return updatedAnswers;
    });
  };

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

  const handleLeftSelect = (index: number) => {
    setSelectedLeft(index);
  };

  const handleRightSelect = (index: number) => {
    setSelectedRight(index);
  };

  const checkMatchingPair = () => {
    if (selectedLeft !== null && selectedRight !== null) {
      const leftOption = shuffledLeftOptions[selectedLeft];
      const rightOption = shuffledRightOptions[selectedRight];

      if (currentExercise.correctAnswer[leftOption] === rightOption) {
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
        setIsMatchingCorrect(false);
      }
    }
  };

  const checkMatchingAnswer = (exercise: MatchingExercise) => {
    let matchingPoints = 0;
    Object.keys(exercise.correctAnswer).forEach((word) => {
      if (
        userAnswers[currentExerciseIndex]?.[word] ===
        exercise.correctAnswer[word]
      ) {
        matchingPoints += 2.5;
      }
    });
    setPoints((prev) => prev + matchingPoints);
    if (matchingPoints < Object.keys(exercise.correctAnswer).length * 2.5) {
      setLives(() => lives - 1);
      setIsCorrect(false);
    } else {
      setIsCorrect(true);
    }
  };

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
    toast({ title: "Дараагийн хичээл нээгдлээ." });
    navigate("/lesson", { state: { unlockNext: lessonIndex + 1 } });
  };

  const skipExercise = () => {
    setSkipped(true);
    setIsAnswered(true);
  };

  const renderMultipleChoice = (exercise: MultipleChoiceExercise) => {
    return (
      <Card className="border-0 shadow-lg rounded-2xl overflow-hidden min-w-96">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
          <CardTitle className="text-xl font-bold text-center">
            {exercise.title}
          </CardTitle>
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleAudio}
              disabled={true}
              className={`p-3 rounded-full ${
                isPlaying ? "bg-indigo-700" : "bg-indigo-500"
              }  transition-colors cursor-not-allowed`}
              // hover:bg-indigo-600
              aria-label="Play audio"
            >
              <Volume2
                size={24}
                className={`text-white ${isPlaying ? "animate-pulse" : ""}`}
                fill={isPlaying ? "currentColor" : "none"}
              />
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercise.options.map((option, index) => (
            <button
              key={option}
              className={`p-4 rounded-xl transition-all duration-200 border-2
                ${
                  selectedOption === option
                    ? isCorrect === true
                      ? "border-emerald-500 bg-emerald-50"
                      : isCorrect === false
                      ? "border-rose-500 bg-rose-50"
                      : "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }
                ${selectedOption === option ? "ring-2 ring-offset-2" : ""}
                ${
                  selectedOption === option && isCorrect === true
                    ? "ring-emerald-200"
                    : selectedOption === option && isCorrect === false
                    ? "ring-rose-200"
                    : selectedOption === option
                    ? "ring-blue-200"
                    : ""
                }`}
              onClick={() => handleMultipleChoiceAnswer(option)}
              aria-label={`Option ${index + 1}: ${option}`}
              aria-selected={selectedOption === option}
              role="radio"
            >
              <div className="flex items-center justify-between">
                <p className="text-left font-medium text-3xl rotate-90">
                  {option}
                </p>
                {selectedOption === option && isCorrect !== null && (
                  <span className="ml-2">
                    {isCorrect ? (
                      <Check className="text-emerald-500" size={20} />
                    ) : (
                      <X className="text-rose-500" size={20} />
                    )}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">
                  Option {index + 1}
                </span>
                {selectedOption === option && (
                  <span
                    className={`text-xs font-semibold ${
                      isCorrect === true
                        ? "text-emerald-600"
                        : isCorrect === false
                        ? "text-rose-600"
                        : "text-blue-600"
                    }`}
                  >
                    {isCorrect === true
                      ? "Зөв!"
                      : isCorrect === false
                      ? "Буруу"
                      : "Selected"}
                  </span>
                )}
              </div>
            </button>
          ))}
        </CardContent>
        {showCorrectAnswer && (
          <div className="px-6 pb-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <p className="text-indigo-800 font-medium">
                Correct correctAnswer:{" "}
                <span className="font-bold rotate-90">
                  {exercise.correctAnswer}
                </span>
              </p>
            </div>
          </div>
        )}
      </Card>
    );
  };

  const renderMatching = (exercise: MatchingExercise) => {
    return (
      <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
          <CardTitle className="text-xl font-bold">{exercise.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            {shuffledLeftOptions.map((option, index) => (
              <button
                key={index}
                className={`w-full p-4 rounded-xl transition-all duration-200 border-2 ${
                  selectedLeft === index
                    ? "border-blue-500 bg-blue-50"
                    : correctPairs.some((pair) => pair.left === index)
                    ? "border-green-500 bg-green-50 cursor-not-allowed"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
                onClick={() =>
                  !correctPairs.some((pair) => pair.left === index) &&
                  handleLeftSelect(index)
                }
                disabled={correctPairs.some((pair) => pair.left === index)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {shuffledRightOptions.map((option, index) => (
              <button
                key={index}
                className={`w-full p-4 rounded-xl transition-all duration-200 border-2 ${
                  selectedRight === index
                    ? "border-blue-500 bg-blue-50"
                    : correctPairs.some((pair) => pair.right === index)
                    ? "border-green-500 bg-green-50 cursor-not-allowed"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
                onClick={() =>
                  !correctPairs.some((pair) => pair.right === index) &&
                  handleRightSelect(index)
                }
                disabled={correctPairs.some((pair) => pair.right === index)}
              >
                {option}
              </button>
            ))}
          </div>
        </CardContent>
        {isMatchingCorrect === false && (
          <div className="text-center p-4 text-red-500">
            Incorrect match. Try again.
          </div>
        )}
      </Card>
    );
  };

  if (showResults) {
    // Calculate total possible points
    const totalPossiblePoints = exercises.length * 10;

    // Calculate accuracy
    const accuracy = Math.round((points / totalPossiblePoints) * 100);

    return (
      <div className="max-w-2xl mx-auto text-center p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Perfect lesson!</h2>
            <p className="text-blue-100">
              You made {exercises.length - (lives > 0 ? lives : 0)} mistakes in
              this lesson
            </p>
          </div>
          <div className="p-8">
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm w-full sm:w-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="text-amber-600" size={24} />
                  <p className="text-amber-800 font-bold">Нийт XP</p>
                </div>
                <p className="text-3xl font-bold text-amber-900">{points}</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm w-full sm:w-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="text-emerald-600" size={24} />
                  <p className="text-emerald-800 font-bold">Онч</p>
                </div>
                <p className="text-3xl font-bold text-emerald-900">
                  {accuracy}%
                </p>
              </div>
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

        {currentExercise.type === "multiple_choice" &&
          renderMultipleChoice(currentExercise)}
        {currentExercise.type === "matching" && renderMatching(currentExercise)}

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
