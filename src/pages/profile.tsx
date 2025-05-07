import { Card } from "@/components/ui/card";
import { User } from "@/constants/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { editProfile, getMe } from "@/services/auth";
import { EditProfileRequest } from "@/constants/types";
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
  const { getUser, signin } = useAuth();
  const userData = getUser();
  const id = userData?.id ? userData?.id : "";

  const { data: user } = useQuery({
    queryFn: () => getMe({ id }),
    queryKey: ["me"],
  });

  const updateUserMutation = useMutation({
    mutationFn: (updatedUserData: EditProfileRequest) =>
      editProfile(updatedUserData),
    onSuccess: (data) => {
      signin(data);
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
        return <Flame className="w-5 h-5" />;
      case "trophy":
        return <Trophy className="w-5 h-5" />;
      case "star":
        return <Star className="w-5 h-5" />;
      case "award":
        return <Award className="w-5 h-5" />;
      case "checkCircle":
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gray-400" />;
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
      <div className="min-h-screen w-full flex justify-center items-center border-2">
        <Loader size="lg" color="primary" className="mt-4" />;
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

      <div className="container mx-auto px-4 py-8 max-w-6xl relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Тавтай морил,{" "}
            <span className="text-indigo-600">{user?.username}</span>
          </h1>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="text-red-500 hover:bg-red-50 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Гарах
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden border-0">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white relative">
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    {user?.points} оноо
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <UserIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Хувийн мэдээлэл</h2>
                    <p className="text-indigo-100">Таны хувийн профайл</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {isEditing ? (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <UserIcon className="w-4 h-4 mr-2" />
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
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
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
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        disabled={updateUserMutation.isPending}
                        className="px-6"
                      >
                        Буцах
                      </Button>
                      <Button
                        onClick={handleSave}
                        disabled={updateUserMutation.isPending}
                        className="px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
                      >
                        {updateUserMutation.isPending
                          ? "Хадгалаж байна..."
                          : "Хадгалах"}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center">
                          <div className="bg-indigo-100 p-2 rounded-lg mr-4 group-hover:bg-indigo-200 transition-colors">
                            <UserIcon className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Хэрэглэгчийн нэр
                            </p>
                            <p className="font-medium">{user?.username}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center">
                          <div className="bg-indigo-100 p-2 rounded-lg mr-4 group-hover:bg-indigo-200 transition-colors">
                            <Mail className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Имэйл</p>
                            <p className="font-medium">{user?.email}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                        <div className="flex items-center">
                          <div className="bg-indigo-100 p-2 rounded-lg mr-4 group-hover:bg-indigo-200 transition-colors">
                            <Zap className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Оноо</p>
                            <p className="font-medium">{user?.points}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <Button
                      onClick={handleEdit}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg flex items-center justify-center gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Засах
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Activity Heatmap */}
            {/* <Card className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Идэвхийн диаграм
                </h2>
                <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  Энэ долоо хоног
                </span>
              </div>
            </Card> */}
            <ActivityHeatmap userId={id} />
          </div>

          {/* Achievements Section */}
          <div className="space-y-6">
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden border-0">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 mr-3" />
                  <div>
                    <h2 className="text-xl font-bold">Амжилтууд</h2>
                    <p className="text-indigo-100 text-sm">
                      Таны олсон цомнууд
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-4 rounded-xl transition-all transform hover:scale-105 ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm"
                          : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-full mb-3 ${
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

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Нийт амжилт:{" "}
                      <span className="font-medium">
                        {achievements.filter((a) => a.unlocked).length}/
                        {achievements.length}
                      </span>
                    </span>
                    <span className="text-sm font-medium text-indigo-600">
                      {Math.round(
                        (achievements.filter((a) => a.unlocked).length /
                          achievements.length) *
                          100
                      )}
                      % дууссан
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full"
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

            {/* Streak Card */}
            {/* <Card className="bg-white rounded-2xl shadow-lg overflow-hidden border-0">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Найт амжилт</h2>
                    <p className="text-pink-100 text-sm">1/5</p>
                  </div>
                  <div className="text-2xl font-bold">🔥</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">Дууссан</span>
                  <span className="text-sm font-medium text-pink-600">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-rose-500 h-2.5 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
