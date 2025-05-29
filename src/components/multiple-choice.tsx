import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MultipleChoiceExercise } from "@/constants/types";
import { Check, X } from "lucide-react";
import { useEffect, useRef } from "react";
import MongolianScript from "./mongolian-script";

type Props = {
  exercise: MultipleChoiceExercise;
  isCorrect: boolean | null;
  currentExerciseIndex: number;
  showCorrectAnswer: boolean;
  selectedOption: string | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
  setUserAnswers: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function MultipleChoice({
  exercise,
  isCorrect,
  currentExerciseIndex,
  showCorrectAnswer,
  selectedOption,
  setSelectedOption,
  setUserAnswers,
}: Props) {
  // const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    // if (exercise.type === "multiple_choice") {
    //   audioRef.current = new Audio(exercise.audioPath);
    //   audioRef.current.onended = () => setIsPlaying(false);
    // }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [exercise]);

  // const toggleAudio = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //       audioRef.current.currentTime = 0;
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  const handleMultipleChoiceAnswer = (correctAnswer: string) => {
    setSelectedOption(correctAnswer);
    setUserAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentExerciseIndex] = correctAnswer;
      return updatedAnswers;
    });
  };

  return (
    <Card className="border-0 shadow-lg rounded-2xl overflow-hidden min-w-96">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
        <CardTitle className="text-xl font-bold text-center">
          {exercise.title}
        </CardTitle>
        {/* <div className="flex justify-center mt-4">
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
        </div> */}
      </CardHeader>
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {exercise.options.map((option, index) => (
          <button
            key={option}
            className={`p-4 rounded-xl transition-all duration-200 border-2
                  ${
                    selectedOption === option
                      ? isCorrect === true
                        ? "border-emerald-500 bg-emerald-50 ring-2 ring-offset-2 ring-emerald-200"
                        : isCorrect === false
                        ? "border-rose-500 bg-rose-50 ring-2 ring-offset-2 ring-rose-200"
                        : "border-blue-500 bg-blue-50 ring-2 ring-offset-2 ring-blue-200"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }
            `}
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
              <span className="text-xs text-gray-500">сонголт {index + 1}</span>
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
                    : "Сонгогдсон"}
                </span>
              )}
            </div>
          </button>
        ))}
      </CardContent>
      {showCorrectAnswer && (
        <div className="px-6 pb-6">
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <p className="text-indigo-800 font-medium text-center">
              Зөв хариулт: <MongolianScript script={exercise.correctAnswer} />
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
