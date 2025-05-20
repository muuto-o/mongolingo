import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CircleX, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

// import { useAuth } from "@/hooks/auth";

import { resetPassword } from "@/services/auth";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const validateToken = (token: string | null) => {
  if (token === null) return false;
  else if (token.length < 185) return true;
  return true;
};

export default function ResetPassword() {
  const { toast } = useToast();
  const query = useQuery();
  const token = query.get("token");
  const navigate = useNavigate();
  const FormSchema = z
    .object({
      password: z.string().min(8, {
        message: "messages.passwordMin",
      }),
      repeatPassword: z.string().min(8, {
        message: "messages.passwordMin",
      }),
    })
    .refine((data) => data.password === data.repeatPassword, {
      path: ["repeatPassword"],
      message: "messages.passwordNotMatch",
    });

  // const { getResetPasswordToken, removeResetPasswordToken } = useAuth();
  // const resetPasswordToken = getResetPasswordToken();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });
  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast({
        title: "Амжилттай шинэчлэгдлээ.",
      });
      // removeResetPasswordToken();
      navigate("/login");
    },
    onError: () => {
      toast({
        title: "Нууц шинэчлэх хугацаа дууссан байна",
        // description: t("messages.invalidTokenDesc"),
      });
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordRepeat = () => {
    setShowPasswordRepeat(!showPasswordRepeat);
  };
  function onSubmit(data: z.infer<typeof FormSchema>) {
    resetPasswordMutation.mutate({
      resetToken: token || "",
      password: data.password,
    });
  }

  // if (!resetPasswordToken) return <Navigate to={"/login"} />;
  return (
    //
    <div className="flex h-screen items-center justify-center">
      {!validateToken(token) ? (
        <Card className="h-60 w-10/12 px-5 py-3 md:w-[23rem]">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full flex-col justify-around">
              <div className="flex items-center space-x-2">
                <CircleX size={32} color="#ea0606" strokeWidth={2.5} />
                {/* <CircleX className="text-3xl text-rose-600" /> */}
                <h1 className="text-3xl">invalidToken</h1>
              </div>
              <div className="space-y-4">
                <p>invalidTokenDesc</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    // removeResetPasswordToken();
                    navigate("/login");
                  }}
                  className="w-full bg-[#143f91] text-white hover:bg-[#1d2053] hover:text-white"
                >
                  cancel
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="h-96 w-10/12 px-5 py-3 md:w-[27rem]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="h-[80%] w-full"
            >
              <div className="flex h-full w-full flex-col justify-evenly">
                <div>
                  <h1 className="text-2xl font-bold">resetPassword</h1>
                  <Separator className="my-3 bg-slate-300" />
                </div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>password</FormLabel>
                      <div className="flex flex-col space-y-4">
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder={"password"}
                              className="dark:focus-visible:ring-none rounded-md bg-white outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              type={showPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              onClick={toggleShowPassword}
                              className="absolute inset-y-0 right-0 flex items-center bg-transparent px-2 text-gray-600 hover:bg-transparent"
                            >
                              {showPassword ? (
                                <Eye width={20} height={20} />
                              ) : (
                                <EyeOff width={20} height={20} />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="repeatPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            placeholder={"repeatPassword"}
                            className="dark:focus-visible:ring-none rounded-md bg-white outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            type={showPasswordRepeat ? "text" : "password"}
                            {...field}
                          />
                          <Button
                            type="button"
                            onClick={toggleShowPasswordRepeat}
                            className="absolute inset-y-0 right-0 flex items-center bg-transparent px-2 text-gray-600 hover:bg-transparent"
                          >
                            {showPasswordRepeat ? (
                              <Eye width={20} height={20} />
                            ) : (
                              <EyeOff width={20} height={20} />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    // removeResetPasswordToken();
                    navigate("/login");
                  }}
                >
                  cancel
                </Button>
                <Button
                  variant="default"
                  className="w-full bg-[#143f91] text-white hover:bg-[#1d2053] hover:text-white"
                >
                  submit
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      )}
    </div>
  );
}
