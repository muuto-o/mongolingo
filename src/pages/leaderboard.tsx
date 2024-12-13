import { Card } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface LeaderboardEntry {
  name: string;
  score: number;
}

const generateRandomData = (count: number): LeaderboardEntry[] => {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
  return Array.from({ length: count }, () => ({
    name: names[Math.floor(Math.random() * names.length)],
    score: Math.floor(Math.random() * 100) + 1,
  })).sort((a, b) => b.score - a.score);
};

export default function Leaderboard() {
  const [data] = useState<LeaderboardEntry[]>(generateRandomData(6));

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Тэргүүлэгчийн самбар
      </h1>
      <div className="w-full max-w-2xl">
        {data.map((entry, index) => (
          <Card
            key={index}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
          >
            <div className="text-lg font-medium text-gray-800">
              {index + 1}. {entry.name}
            </div>
            <div className="text-lg font-semibold text-blue-600">
              {entry.score} оноо
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
