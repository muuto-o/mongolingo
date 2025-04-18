import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MatchingExercise } from "@/constants/types";

type Props = {
  exercise: MatchingExercise;
  isMatchingCorrect: boolean | null;
  selectedLeft: number | null;
  selectedRight: number | null;
  setSelectedLeft: React.Dispatch<React.SetStateAction<number | null>>;
  setSelectedRight: React.Dispatch<React.SetStateAction<number | null>>;
  shuffledLeftOptions: string[];
  shuffledRightOptions: string[];
  correctPairs: {
    left: number;
    right: number;
  }[];
};

export default function Matching({
  exercise,
  isMatchingCorrect,
  selectedLeft,
  selectedRight,
  shuffledLeftOptions,
  shuffledRightOptions,
  correctPairs,
  setSelectedLeft,
  setSelectedRight,
}: Props) {
  const handleLeftSelect = (index: number) => {
    setSelectedLeft(index);
  };

  const handleRightSelect = (index: number) => {
    setSelectedRight(index);
  };

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
              className={`w-full px-4 py-3 rounded-xl transition-all duration-200 border-2 ${
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
              <div className="rotate-90 font-semibold text-2xl">{option}</div>
            </button>
          ))}
        </div>
      </CardContent>
      {isMatchingCorrect === false && (
        <div className="text-center p-4 text-red-500">Буруу байна.</div>
      )}
    </Card>
  );
}
