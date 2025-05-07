import { Card } from "@/components/ui/card";
import { leaderboard } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import { Trophy, Award, Medal, Flame } from "lucide-react";

const avatars = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];

const getRankColor = (index: number) => {
  switch (index) {
    case 0:
      return "bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-yellow-600";
    case 1:
      return "bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-400 dark:to-gray-500";
    case 2:
      return "bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700";
    default:
      return "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50";
  }
};

const getRankIcon = (index: number) => {
  switch (index) {
    case 0:
      return (
        <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
      );
    case 1:
      return <Award className="w-5 h-5 text-gray-600 dark:text-gray-300" />;
    case 2:
      return <Medal className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    default:
      return <Flame className="w-5 h-5 text-indigo-400 dark:text-indigo-300" />;
  }
};

export default function Leaderboard() {
  const { data: leaders } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: leaderboard,
  });

  return (
    <div className="w-full bg-gradient-to-br from-background to-muted min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header with gradient like profile page */}
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-6 rounded-xl shadow-lg mb-8 border-0">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-3" />
              Тэргүүлэгчийн самбар
            </h1>
          </div>
        </Card>

        {leaders === undefined && (
          <div className="flex items-center justify-center h-full">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 border-4 border-indigo-200 dark:border-indigo-800 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-indigo-500 border-r-indigo-500 dark:border-t-indigo-400 dark:border-r-indigo-400 rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {/* Leaderboard */}
        <div className="space-y-4">
          {leaders?.map((entry, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden p-4 rounded-xl shadow-sm transition-all hover:shadow-md ${
                index < 3 ? "border-l-4" : "border-l-2"
              } ${
                index === 0
                  ? "border-l-yellow-400 dark:border-l-yellow-500 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30"
                  : index === 1
                  ? "border-l-gray-300 dark:border-l-gray-400 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/30 dark:to-gray-800/30"
                  : index === 2
                  ? "border-l-amber-500 dark:border-l-amber-600 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30"
                  : "border-l-indigo-300 dark:border-l-indigo-600 bg-card"
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
                      ? "bg-yellow-100 dark:bg-yellow-900/50 border-2 border-yellow-200 dark:border-yellow-800"
                      : index === 1
                      ? "bg-gray-100 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-800"
                      : index === 2
                      ? "bg-amber-100 dark:bg-amber-900/50 border-2 border-amber-200 dark:border-amber-800"
                      : "bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-200 dark:border-indigo-800"
                  }`}
                >
                  {avatars[index]}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3
                      className={`font-bold mr-2 ${
                        index === 0
                          ? "text-yellow-800 dark:text-yellow-200"
                          : index === 1
                          ? "text-gray-800 dark:text-gray-200"
                          : index === 2
                          ? "text-amber-800 dark:text-amber-200"
                          : "text-indigo-800 dark:text-indigo-200"
                      }`}
                    >
                      {entry.username}
                    </h3>
                    {getRankIcon(index)}
                  </div>
                </div>

                {/* Score */}
                <div className="text-right ml-4">
                  <div
                    className={`text-lg font-bold ${
                      index === 0
                        ? "text-yellow-600 dark:text-yellow-400"
                        : index === 1
                        ? "text-gray-600 dark:text-gray-300"
                        : index === 2
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    {entry.points} оноо
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
