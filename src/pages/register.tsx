import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/auth";
import axios from "axios";

const formSchema = z
  .object({
    username: z.string().min(3, {
      message: "Хамгийн багадаа 3 тэмдэгттэй байна.",
    }),
    email: z
      .string()
      .email({
        message: "жишээ нь: example@gmail.com",
      })
      .min(11, {
        message: "жишээ нь: example@gmail.com",
      }),
    password: z.string().min(8, {
      message: "хамгийн багадаа 8 оронтой байх",
    }),
    repeat_password: z.string().min(8, {
      message: "хамгийн багадаа 8 оронтой байх",
    }),
  })
  .refine((data) => data.password === data.repeat_password, {
    path: ["repeat_password"],
    message: "Нууц үг таарахгүй байна.",
  });

export default function RegisterPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast({ title: `${data.message}` });
      navigate("/login");
    },
    onError: (error: unknown) => {
      if (axios.isAxiosError(error) && error.response) {
        // Axios error with a response from the server
        const errorMessage =
          error.response.data?.message ||
          error.message ||
          "An unexpected error occurred.";
        toast({
          variant: "destructive",
          title: errorMessage,
        });
      } else if (error instanceof Error) {
        // General error
        toast({
          variant: "destructive",
          title: error.message || "An unexpected error occurred.",
        });
      } else {
        // Handle other types of errors
        toast({
          variant: "destructive",
          title: "An unexpected error occurred.",
        });
      }
    },
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordRepeat = () => {
    setShowPasswordRepeat(!showPasswordRepeat);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeat_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    registerMutation.mutate(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Бүртгүүлэх
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Шинэ хэрэглэгч үү? Бүртгүүлэх хэсэгт тавтай морил.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-6 space-y-6"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Хэрэглэгчийн нэр"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Имэйл"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <Input
                        placeholder="Нууц үг"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        {...field}
                      />
                      <Button
                        type="button"
                        onClick={toggleShowPassword}
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent px-3 text-gray-500 hover:bg-transparent"
                      >
                        {showPassword ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="repeat_password"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <Input
                        placeholder="Нууц үг давтах"
                        type={showPasswordRepeat ? "text" : "password"}
                        autoComplete="new-password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        {...field}
                      />
                      <Button
                        type="button"
                        onClick={toggleShowPasswordRepeat}
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent px-3 text-gray-500 hover:bg-transparent"
                      >
                        {showPasswordRepeat ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                БҮРТГҮҮЛЭХ
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Аль хэдийн бүртгүүлсэн үү?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Нэвтрэх
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
