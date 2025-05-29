import { useEffect, useRef, useState } from "react";
import MongolianScript from "./mongolian-script";
import { Button } from "@/components/ui/button";

function getWPM(charCount: number, seconds: number) {
  return Math.round((charCount / 5 / seconds) * 60);
}

function getAccuracy(correct: number, total: number) {
  return total === 0 ? 100 : Math.round((correct / total) * 100);
}

type TypingPracticeProps = {
  text: string; // Mongolian characters to type
};

export default function TypingPractice({ text }: TypingPracticeProps) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const started = startTime !== null;
  const finished = input === text;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!started) {
      setStartTime(Date.now());
    }

    const correctSoFar = [...value].filter(
      (char, i) => char === text[i]
    ).length;

    if (value === text) {
      setEndTime(Date.now());
    }

    setInput(value);
    setCorrectCount(correctSoFar);
  };

  const reset = () => {
    setInput("");
    setStartTime(null);
    setEndTime(null);
    setCorrectCount(0);
    inputRef.current?.focus();
  };

  const totalTime = startTime && endTime ? (endTime - startTime) / 1000 : 0;
  const wpm = totalTime > 0 ? getWPM(input.length, totalTime) : 0;
  const accuracy = getAccuracy(correctCount, input.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Монгол бичиг - Бичих дасгал</h1>

        {/* Typing Text */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-4xl flex justify-center gap-1 flex-wrap">
            {[...text].map((char, i) => (
              <span
                key={i}
                className={`${
                  i < input.length
                    ? input[i] === char
                      ? "text-emerald-600"
                      : "text-red-500"
                    : i === input.length
                    ? "text-blue-500 underline"
                    : "text-gray-400"
                }`}
              >
                <MongolianScript script={char} />
              </span>
            ))}
          </div>
        </div>

        {/* Hidden Input */}
        <input
          ref={inputRef}
          value={input}
          onChange={handleChange}
          className="opacity-0 absolute"
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Хурд (WPM)</p>
            <p className="text-xl font-semibold">{wpm}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Нарийвчлал</p>
            <p className="text-xl font-semibold">{accuracy}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Хугацаа</p>
            <p className="text-xl font-semibold">{totalTime.toFixed(1)} сек</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6">
          <Button onClick={reset} className="rounded-xl px-6 py-3">
            Дахин оролдох
          </Button>
        </div>

        {finished && (
          <p className="text-emerald-700 font-bold text-lg mt-4">
            🎉 Та бичиж дууслаа!
          </p>
        )}
      </div>
    </div>
  );
}
