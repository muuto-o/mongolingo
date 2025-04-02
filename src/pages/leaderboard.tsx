import { Card } from "@/components/ui/card";
import { Trophy, Award, Medal, Star, Flame } from "lucide-react";
import { useState } from "react";

interface LeaderboardEntry {
  name: string;
  score: number;
  avatar?: string;
  streak?: number;
}

const generateRandomData = (count: number): LeaderboardEntry[] => {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
  const avatars = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];

  return Array.from({ length: count }, () => ({
    name: names[Math.floor(Math.random() * names.length)],
    score: Math.floor(Math.random() * 100) + 1,
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    streak: Math.floor(Math.random() * 10) + 1,
  })).sort((a, b) => b.score - a.score);
};

const getRankColor = (index: number) => {
  switch (index) {
    case 0:
      return "bg-gradient-to-r from-yellow-400 to-yellow-500";
    case 1:
      return "bg-gradient-to-r from-gray-300 to-gray-400";
    case 2:
      return "bg-gradient-to-r from-amber-500 to-amber-600";
    default:
      return "bg-gradient-to-r from-indigo-100 to-purple-100";
  }
};

const getRankIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Trophy className="w-5 h-5 text-yellow-600" />;
    case 1:
      return <Award className="w-5 h-5 text-gray-600" />;
    case 2:
      return <Medal className="w-5 h-5 text-amber-600" />;
    default:
      return <Flame className="w-5 h-5 text-indigo-400" />;
  }
};

export default function Leaderboard() {
  const [data] = useState<LeaderboardEntry[]>(generateRandomData(6));

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header with gradient like profile page */}
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl shadow-lg mb-8 border-0">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-3" />
              Тэргүүлэгчийн самбар
            </h1>
            {/* <p className="mt-2 opacity-90">Өнөөдрийн шилдэг сурагчид</p> */}
          </div>
        </Card>

        {/* Leaderboard */}
        <div className="space-y-4">
          {data.map((entry, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden p-4 rounded-xl shadow-sm transition-all hover:shadow-md ${
                index < 3 ? "border-l-4" : "border-l-2"
              } ${
                index === 0
                  ? "border-l-yellow-400 bg-gradient-to-r from-yellow-50 to-yellow-100"
                  : index === 1
                  ? "border-l-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
                  : index === 2
                  ? "border-l-amber-500 bg-gradient-to-r from-amber-50 to-amber-100"
                  : "border-l-indigo-300 bg-white"
              }`}
            >
              {/* Rank Badge */}
              <div
                className={`absolute -left-2 top-4 w-10 h-10 ${getRankColor(
                  index
                )} rounded-full flex items-center justify-center text-white font-bold shadow-md`}
              >
                {index + 1}
              </div>

              <div className="flex items-center pl-10">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 ${
                    index === 0
                      ? "bg-yellow-100 border-2 border-yellow-200"
                      : index === 1
                      ? "bg-gray-100 border-2 border-gray-200"
                      : index === 2
                      ? "bg-amber-100 border-2 border-amber-200"
                      : "bg-indigo-100 border-2 border-indigo-200"
                  }`}
                >
                  {entry.avatar}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3
                      className={`font-bold mr-2 ${
                        index === 0
                          ? "text-yellow-800"
                          : index === 1
                          ? "text-gray-800"
                          : index === 2
                          ? "text-amber-800"
                          : "text-indigo-800"
                      }`}
                    >
                      {entry.name}
                    </h3>
                    {getRankIcon(index)}
                  </div>
                  {/* <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          index === 0
                            ? "bg-yellow-500"
                            : index === 1
                            ? "bg-gray-400"
                            : index === 2
                            ? "bg-amber-500"
                            : "bg-indigo-500"
                        }`}
                        style={{ width: `${Math.min(100, entry.score)}%` }}
                      ></div>
                    </div>
                  </div> */}
                </div>

                {/* Score and Streak */}
                <div className="text-right ml-4">
                  <div
                    className={`text-lg font-bold ${
                      index === 0
                        ? "text-yellow-600"
                        : index === 1
                        ? "text-gray-600"
                        : index === 2
                        ? "text-amber-600"
                        : "text-indigo-600"
                    }`}
                  >
                    {entry.score} оноо
                  </div>
                  {/* {entry.streak && (
                    <div className="flex items-center justify-end mt-1">
                      <span
                        className={`text-xs font-medium ${
                          index === 0
                            ? "text-yellow-500"
                            : index === 1
                            ? "text-gray-500"
                            : index === 2
                            ? "text-amber-500"
                            : "text-indigo-500"
                        }`}
                      >
                        🔥 {entry.streak} өдөр
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Weekly Summary */}
        {/* <Card className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center">
            <Star className="w-5 h-5 mr-2 text-indigo-500" />
            Долоо хоногийн түүх
          </h3>
          <p className="text-gray-600 text-sm">
            Энэ долоо хоногт танд {Math.floor(Math.random() * 5) + 1} шилдэгт
            оролцох боломж үлдлээ. Илүү их цуглуулж шилдэгт оролцоорой!
          </p>
        </Card> */}
      </div>
    </div>
  );
}
