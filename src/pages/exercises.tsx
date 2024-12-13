import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { exercises } from "@/data/datas";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
  image?: string;
}

export default function Exercise() {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0); // Added state
  const [incorrectQuestions, setIncorrectQuestions] = useState<Question[]>([]);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    const currentQuestion = exercises.unit_one[count] as Question;
    const isCorrect = answer === currentQuestion.correctAnswer;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setTotalPoints((prev) => prev + 4); // Add 4 points for correct answer
      setTimeout(() => moveToNextQuestion(), 1000);
    } else {
      setIncorrectQuestions((prev) => [...prev, currentQuestion]);
      setShowCorrectAnswer(true);
    }
  };

  const moveToNextQuestion = () => {
    setIsAnswerCorrect(null);
    if (count + 1 < exercises.unit_one.length) {
      setCount((prev) => prev + 1);
      setShowCorrectAnswer(false);
    } else {
      setIsReviewMode(true);
      setCount(0);
      navigate(-1);
    }
  };

  const currentQuestion: Question = isReviewMode
    ? incorrectQuestions[count] || ({} as Question)
    : (exercises.unit_one[count] as Question);

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center p-4">
      {/* Progress Bar Section */}
      <div className="w-full flex items-center justify-between px-4 mb-6">
        <ArrowLeft
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={() => navigate(-1)}
          size={28}
        />
        <Progress
          value={
            ((count + 1) /
              (isReviewMode
                ? incorrectQuestions.length
                : exercises.unit_one.length)) *
            100
          }
          className="w-11/12 rounded-md overflow-hidden bg-gray-300 h-4"
        />
      </div>

      {/* Question Card */}
      <Card className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
        <div className="text-lg font-semibold mb-4 text-gray-700">
          {isReviewMode
            ? `Review Question ${count + 1} of ${incorrectQuestions.length}`
            : `Асуулт  ${exercises.unit_one.length}-аас ${count + 1}`}
        </div>
        <div className="text-center">
          <div className="text-xl font-medium text-gray-800 mb-4">
            {currentQuestion?.question}
          </div>
          {currentQuestion?.image && (
            <img
              src={currentQuestion.image}
              alt="Question illustration"
              className="h-32 mx-auto mb-4 object-contain rotate-90"
            />
          )}
        </div>
      </Card>

      {/* Answers Section */}
      {!isReviewMode && !showCorrectAnswer && (
        <div className="w-full max-w-2xl flex flex-wrap justify-center gap-4">
          {currentQuestion.answers.map((answer, index) => (
            <Card
              key={index}
              className={`w-32 h-24 flex items-center justify-center shadow-md border rounded-lg cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${
                isAnswerCorrect === true &&
                answer === currentQuestion.correctAnswer
                  ? "bg-green-200 border-green-500"
                  : "bg-white border-gray-200"
              }`}
              onClick={() => handleAnswer(answer)}
            >
              <span className="text-center text-gray-700 font-medium">
                {answer}
              </span>
            </Card>
          ))}
        </div>
      )}

      {/* Show Correct Answer Section */}
      {showCorrectAnswer && (
        <div className="w-full max-w-2xl flex flex-col items-center gap-4">
          <div className="text-center text-gray-800 mb-4">
            Correct Answer: <strong>{currentQuestion.correctAnswer}</strong>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={moveToNextQuestion}
          >
            Next Question
          </button>
        </div>
      )}

      {/* Display Total Points */}
      <div className="w-full max-w-2xl text-center text-lg text-gray-800 mt-4">
        Total Points: <strong>{totalPoints}</strong>
      </div>
    </div>
  );
}
