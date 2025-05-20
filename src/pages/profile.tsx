import { Card } from "@/components/ui/card";
import { User } from "@/constants/types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { editProfile, getMe } from "@/services/auth";
import { useAuth } from "@/hooks/auth";
import {
  Trophy,
  Award,
  Star,
  CheckCircle,
  Flame,
  HelpCircle,
  User as UserIcon,
  Mail,
  Zap,
  LogOut,
  Edit,
  ChevronRight,
} from "lucide-react";
import ActivityHeatmap from "@/components/heatmap";
import Loader from "@/components/loader";

// Animated background component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-pink-100/30"></div>
    <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200/10 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200/10 rounded-full filter blur-3xl"></div>
  </div>
);

export default function Profile() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});
  const { getUser, updateUser } = useAuth();
  const userData = getUser();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const id = userData ? userData.id : "obso";

  const { data: user } = useQuery({
    queryFn: () => getMe({ id }),
    queryKey: ["me"],
  });

  const updateUserMutation = useMutation({
    mutationFn: editProfile,
    onSuccess: (data) => {
      updateUser(data);
      setIsEditing(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: "There was an error updating your profile.",
      });
    },
  });

  const getAchievementIcon = (iconPath: string) => {
    switch (iconPath) {
      case "flame":
        return <Flame className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "trophy":
        return <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "star":
        return <Star className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "award":
        return <Award className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "checkCircle":
        return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />;
    }
  };

  // Mock achievements data
  const achievements1 = [
    {
      id: 1,
      name: "First Exercise Complete",
      iconPath: "flame",
      unlocked: false,
    },
    {
      id: 2,
      name: "10 Exercises Completed",
      iconPath: "trophy",
      unlocked: false,
    },
    {
      id: 3,
      name: "100 XP Reached",
      iconPath: "star",
      unlocked: false,
    },
    {
      id: 4,
      name: "7 Day Streak",
      iconPath: "award",
      unlocked: false,
    },
    {
      id: 5,
      name: "Эртэч",
      iconPath: "checkCircle",
      unlocked: false,
    },
  ];

  if (updateUserMutation.isPending || !user) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader size="lg" color="primary" className="mt-4" />
      </div>
    );
  }

  const achievements = achievements1.map((el) => ({
    name: el.name,
    iconPath: el.iconPath,
    acquiredAt: user.achievements.find((ua) => ua.name === el.name)?.acquiredAt,
    unlocked: !!user.achievements.find((ua) => ua.name === el.name),
  }));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({
      username: user?.username,
      email: user?.email,
    });
  };

  const handleSave = () => {
    if (editedUser) {
      updateUserMutation.mutate({
        username: editedUser.username || "",
        email: editedUser.email || "",
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({});
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-6xl relative">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Тавтай морил,{" "}
            <span className="text-indigo-600">{user?.username}</span>
          </h1>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="text-red-500 hover:bg-red-50 flex items-center gap-2 self-end sm:self-auto"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm sm:text-base">Гарах</span>
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Card className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-0">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-6 text-white relative">
                <div className="absolute top-3 max-sm:hidden sm:top-4 right-3 sm:right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium flex items-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {user?.points} оноо
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <UserIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">
                      Хувийн мэдээлэл
                    </h2>
                    <p className="text-indigo-100 text-xs sm:text-sm">
                      Таны хувийн профайл
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {isEditing ? (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center">
                          <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Хэрэглэгчийн нэр
                        </label>
                        <Input
                          value={editedUser.username || ""}
                          onChange={(e) =>
                            setEditedUser({
                              ...editedUser,
                              username: e.target.value,
                            })
                          }
                          className="mt-1 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 flex items-center">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Имэйл
                        </label>
                        <Input
                          value={editedUser.email || ""}
                          onChange={(e) =>
                            setEditedUser({
                              ...editedUser,
                              email: e.target.value,
                            })
                          }
                          className="mt-1 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 sm:space-x-3 pt-3 sm:pt-4">
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        disabled={updateUserMutation.isPending}
                        className="px-4 sm:px-6 text-xs sm:text-sm"
                      >
                        Буцах
                      </Button>
                      <Button
                        onClick={handleSave}
                        disabled={updateUserMutation.isPending}
                        className="px-4 sm:px-6 text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
                      >
                        {updateUserMutation.isPending
                          ? "Хадгалаж байна..."
                          : "Хадгалах"}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center">
                          <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4 group-hover:bg-indigo-200 transition-colors">
                            <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                              Хэрэглэгчийн нэр
                            </p>
                            <p className="font-medium text-sm sm:text-base">
                              {user?.username}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>

                      <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center">
                          <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4 group-hover:bg-indigo-200 transition-colors">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                              Имэйл
                            </p>
                            <p className="font-medium text-sm sm:text-base">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>

                      <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center">
                          <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4 group-hover:bg-indigo-200 transition-colors">
                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                              Оноо
                            </p>
                            <p className="font-medium text-sm sm:text-base">
                              {user?.points}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>
                    </div>

                    <Button
                      onClick={handleEdit}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
                    >
                      <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                      Засах
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            <ActivityHeatmap userId={id} />
          </div>

          {/* Achievements Section */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-0">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-6 text-white">
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">Амжилтууд</h2>
                    <p className="text-indigo-100 text-xs sm:text-sm">
                      Таны олсон цомнууд
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-2 sm:p-4 rounded-lg sm:rounded-xl transition-all transform hover:scale-105 ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm"
                          : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      <div
                        className={`p-2 sm:p-3 rounded-full mb-2 sm:mb-3 ${
                          achievement.unlocked
                            ? "bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 shadow-sm"
                            : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {getAchievementIcon(achievement.iconPath)}
                      </div>
                      <span
                        className={`text-xs font-medium text-center ${
                          achievement.unlocked
                            ? "text-gray-800"
                            : "text-gray-500"
                        }`}
                      >
                        {achievement.name}
                      </span>
                      {achievement.unlocked && (
                        <span className="text-[10px] text-indigo-500 mt-1">
                          Олдсон
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Нийт амжилт:{" "}
                      <span className="font-medium">
                        {achievements.filter((a) => a.unlocked).length}/
                        {achievements.length}
                      </span>
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-indigo-600">
                      {Math.round(
                        (achievements.filter((a) => a.unlocked).length /
                          achievements.length) *
                          100
                      )}
                      % дууссан
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 sm:h-2.5 rounded-full"
                      style={{
                        width: `${
                          (achievements.filter((a) => a.unlocked).length /
                            achievements.length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
