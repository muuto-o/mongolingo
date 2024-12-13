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

// import { signUp } from "@/services/auth";

import Logo from "@/assets/mongolbichig.png";
import { users } from "@/data/datas";
import { useToast } from "@/hooks/use-toast";

const formSchema = z
  .object({
    firstName: z.string().min(3, {
      message: "Хамгийн багадаа 3 тэмдэгттэй байна.",
    }),
    lastName: z.string().min(3, {
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
    repeatPassword: z.string().min(8, {
      message: "хамгийн багадаа 8 оронтой байх",
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Passwords do not match.",
  });

export default function RegisterPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  // const { t } = useTranslation("login");

  // const signUpMutation = useMutation({
  //   mutationFn: signUp,
  //   onSuccess: () => {
  //     navigate("/login");
  //   },
  // });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordRepeat = () => {
    setShowPasswordRepeat(!showPasswordRepeat);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user = users.find((user) => user.email === values.email);

    if (user) {
      toast({
        variant: "destructive",
        title: "Системд бүртгэлтэй хэрэглэгч байна.",
      });
    } else {
      users.push(values);
      console.log(users);
      navigate("/login");
    }
    // signUpMutation.mutate({
    //   user: {
    //     email: values.email,
    //     password: values.password,
    //     firstName: values.firstName,
    //     lastName: values.lastName,
    //     password_confirmation: values.repeatPassword,
    //   },
    // });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  return (
    <div className="flex h-screen w-full landscape:h-full">
      <div className="hidden h-screen w-5/12 flex-col space-y-4 bg-white pl-20 xl:flex">
        {/* <img src={Logo} alt="Logo" className="h-screen w-full" /> */}
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center space-y-5 bg-white py-6 lg:h-screen xl:w-7/12">
        <div>
          <div className="flex flex-row items-center justify-around">
            <h1 className="text-[44px] font-bold text-blue-600">Бүртгүүлэх</h1>
          </div>
        </div>
        <div className="w-10/12 sm:w-6/12">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              name="contact-form"
            >
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Овог" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Нэр" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Имэйл" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
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
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repeatPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <Input
                        placeholder="Нууц үг давтах"
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
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <Link
                to="/login"
                className="flex w-full justify-end text-[13px] font-bold text-blue-600"
              >
                <p className="-mt-6">Аль хэдийн бүртгүүлсэн</p>
              </Link>
              <div className="flex w-full justify-center">
                <Button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 hover:bg-blue-800"
                  // disabled={signUpMutation.isPending}
                >
                  БҮРТГҮҮЛЭХ
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
