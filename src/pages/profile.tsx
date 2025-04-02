import { Card } from "@/components/ui/card";
import { User } from "@/constants/types";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { editProfile, getMe } from "@/services/auth";
import { EditProfileRequest } from "@/constants/types";
import { useAuth } from "@/hooks/auth";
import { Trophy, Award, Star, CheckCircle, Flame } from "lucide-react";

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
    queryFn: () => {
      return getMe({ id });
    },
    queryKey: ["me"],
  });

  const updateUserMutation = useMutation({
    mutationFn: (updatedUserData: EditProfileRequest) =>
      editProfile(updatedUserData),
    onSuccess: (data) => {
      // localStorage.setItem("user", JSON.stringify(data));
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

  // Mock achievements data
  const achievements = [
    {
      id: 1,
      name: "Fast Learner",
      icon: <Flame className="w-6 h-6" />,
      unlocked: true,
    },
    {
      id: 2,
      name: "5-Day Streak",
      icon: <Trophy className="w-6 h-6" />,
      unlocked: true,
    },
    {
      id: 3,
      name: "Perfect Lesson",
      icon: <Star className="w-6 h-6" />,
      unlocked: false,
    },
    {
      id: 4,
      name: "Vocabulary Master",
      icon: <Award className="w-6 h-6" />,
      unlocked: false,
    },
    {
      id: 5,
      name: "Early Bird",
      icon: <CheckCircle className="w-6 h-6" />,
      unlocked: true,
    },
  ];

  if (user === null) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({
      username: user?.username,
      email: user?.email,
      // password: "",
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
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-6xl space-y-6">
        {/* Combined Profile and Achievements */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Card - Fixed width */}
          <div className="w-full md:w-2/3">
            <Card className="bg-white rounded-xl shadow-lg overflow-hidden border-0 h-full">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold">
                    Тавтай морил, {user?.username}
                  </h2>
                  <div className="mt-2 px-4 py-1 bg-white/10 rounded-full text-sm font-medium">
                    {user?.points} оноо
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {isEditing ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Шинэ нууц үг
                      </label>
                      <Input
                        type="password"
                        value={editedUser.password || ""}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            password: e.target.value,
                          })
                        }
                        className="mt-1"
                        placeholder="Leave blank to keep current"
                      />
                    </div> */}
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
                        className="px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
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
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="text-sm text-gray-500">
                            Хэрэглэгчийн нэр
                          </p>
                          <p className="font-medium">{user?.username}</p>
                        </div>
                        <div className="text-indigo-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="text-sm text-gray-500">Имэйл</p>
                          <p className="font-medium">{user?.email}</p>
                        </div>
                        <div className="text-indigo-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="text-sm text-gray-500">Оноо</p>
                          <p className="font-medium">{user?.points}</p>
                        </div>
                        <div className="text-indigo-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleEdit}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    >
                      Засах
                    </Button>
                    {/* Logout Button */}
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                      Гарах
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Achievements Card - Fixed width */}
          <div className="w-full md:w-1/3">
            <Card className="bg-white rounded-xl shadow-lg overflow-hidden border-0 h-full">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  <h2 className="text-xl font-bold">Амжилтууд</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                        achievement.unlocked
                          ? "bg-indigo-50 border border-indigo-100"
                          : "bg-gray-50 border border-gray-100 opacity-50"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-full mb-2 ${
                          achievement.unlocked
                            ? "bg-indigo-100 text-indigo-600"
                            : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {achievement.icon}
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
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Нийт амжилт:{" "}
                      {achievements.filter((a) => a.unlocked).length}/
                      {achievements.length}
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
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full"
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
