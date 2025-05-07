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
import { Card } from "@/components/ui/card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/services/auth";
import { useAuth } from "@/hooks/auth";

const formSchema = z.object({
  email: z.string().min(11, {
    message: "жишээ нь: example@gmail.com",
  }),
  password: z.string().min(8, {
    message: "хамгийн багадаа 8 оронтой байх",
  }),
});

export default function LoginPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signin } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: loginMutation } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast({ title: "Амжиллтай нэвтэрлээ.", description: data.username });
      signin(data);
      navigate("/lesson");
      queryClient.invalidateQueries({ queryKey: ["units"] });
      queryClient.invalidateQueries({ queryKey: ["questions"] });
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Нэвтрэх нэр эсвэл нууц үг буруу байна.",
      });
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    loginMutation({ email: values.email, password: values.password });
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-background via-muted/50 to-muted p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
              Нэвтрэх
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Тавтай морилно уу! Нэвтрэх хэсэгт тавтай морил.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-6 space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Имэйл"
                        autoComplete="username"
                        className="w-full px-4 py-3 rounded-lg focus-visible:ring-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-destructive" />
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
                        autoComplete="current-password"
                        className="w-full px-4 py-3 rounded-lg focus-visible:ring-blue-500"
                        {...field}
                      />
                      <Button
                        type="button"
                        onClick={toggleShowPassword}
                        variant="ghost"
                        size="icon"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:bg-transparent"
                      >
                        {showPassword ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                    <FormMessage className="text-sm text-destructive" />
                  </FormItem>
                )}
              />

              <Link to="/recover" className="block text-right">
                <p className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  Нууц үгээ мартсан?
                </p>
              </Link>

              <Button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all"
              >
                Нэвтрэх
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Бүртгэл байхгүй юу?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    Бүртгүүлэх
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}
