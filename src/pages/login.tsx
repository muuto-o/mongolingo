import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";
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

// import { useAuth } from "@/hooks/auth";

// import { signIn } from "@/services/auth";

import Logo from "@/assets/mongolbichig.png";
import { users } from "@/data/datas";
import { Card } from "@/components/ui/card";

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
  // const { login } = useAuth();
  // const { t } = useTranslation("login");
  const navigate = useNavigate();

  // const signInMutation = useMutation({
  //   mutationFn: signIn,
  //   onSuccess: (data) => {
  //     login(data);
  //     navigate("/");
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Нэвтрэх нэр эсвэл нууц үг буруу байна.",
  //     });
  //   },
  // });
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      toast({
        variant: "destructive",
        title: "Нэвтрэх нэр эсвэл нууц үг буруу байна.",
      });
    }
    // signInMutation.mutate({
    //   user: {
    //     email: values.email,
    //     password: values.password,
    //   },
    // });
  }
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex h-full w-full">
      <div className="hidden w-5/12 flex-col space-y-6 bg-gray-100 pl-28 xl:flex">
        {/* <img src={Logo} alt="Logo" className="w-full" /> */}
      </div>
      <Card className="flex w-full flex-col items-center justify-center space-y-7 bg-white xl:w-7/12">
        <div>
          <div className="flex flex-row items-center justify-around">
            <h1 className="text-[44px] font-bold text-blue-600">Нэвтрэх</h1>
          </div>
        </div>
        <div className="w-10/12 sm:w-6/12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Имэйл" {...field} />
                    </FormControl>
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link to="/recover" className="flex w-full justify-end">
                <p className="-mt-2 text-[13px] font-bold text-blue-600">
                  Нууц үгээ мартсан?
                </p>
              </Link>
              <div className="flex w-full justify-center">
                <Button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 hover:bg-blue-800"
                  // disabled={signInMutation.isPending}
                >
                  Нэвтрэх
                </Button>
              </div>
              <Link
                to="/register"
                className="flex w-full justify-center font-bold text-blue-600"
              >
                <p className="text-[14px]">Бүртгүүлэх</p>
              </Link>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}
