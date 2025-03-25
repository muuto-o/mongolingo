import { Card } from "@/components/ui/card";
import { User } from "@/constants/types";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { editProfile } from "@/services/auth";
import { EditProfileRequest } from "@/constants/types";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser) as User;
    }
    return null;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});

  const updateUserMutation = useMutation({
    mutationFn: (updatedUserData: EditProfileRequest) =>
      editProfile(updatedUserData),
    onSuccess: (data) => {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      setIsEditing(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: "There was an error updating your profile.",
      });
    },
  });

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
      username: user.username,
      email: user.email,
      password: "",
    });
  };

  const handleSave = () => {
    if (editedUser) {
      updateUserMutation.mutate({
        username: editedUser.username || "",
        email: editedUser.email || "",
        password: editedUser.password || "",
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({});
  };

  // Get initials for avatar
  // const getInitials = (name: string) => {
  //   return name
  //     .split(" ")
  //     .map((part) => part[0])
  //     .join("")
  //     .toUpperCase();
  // };

  return (
    <div className="w-7/12 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-3xl">
        <Card className="w-full bg-white rounded-xl shadow-lg overflow-hidden border-0">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
            <div className="flex flex-col items-center">
              {/* <Avatar className="w-24 h-24 border-4 border-white/20 mb-4">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-white/20 text-3xl font-bold">
                  {getInitials(user.username)}
                </AvatarFallback>
              </Avatar> */}
              <h2 className="text-2xl font-bold">
                Welcome back, {user.username}
              </h2>
              <div className="mt-2 px-4 py-1 bg-white/10 rounded-full text-sm font-medium">
                {user.points} Points
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 md:p-8">
            {isEditing ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <Input
                    value={editedUser.username || ""}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, username: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    value={editedUser.email || ""}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <Input
                    type="password"
                    value={editedUser.password || ""}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, password: e.target.value })
                    }
                    className="mt-1"
                    placeholder="Leave blank to keep current"
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    disabled={updateUserMutation.isPending}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={updateUserMutation.isPending}
                    className="px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    {updateUserMutation.isPending
                      ? "Saving..."
                      : "Save Changes"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <p className="text-sm text-gray-500">Username</p>
                      <p className="font-medium">{user.username}</p>
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
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user.email}</p>
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
                      <p className="text-sm text-gray-500">Points</p>
                      <p className="font-medium">{user.points}</p>
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
                  Edit Profile
                </Button>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-4">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
