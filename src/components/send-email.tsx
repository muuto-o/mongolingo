import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

import { emailCheck } from "@/services/auth";

type SendEmailProps = {
  nextPage: () => void;
  cancel: () => void;
};

export default function SendEmail({ nextPage, cancel }: SendEmailProps) {
  const { toast } = useToast();
  const resetPasswordMutation = useMutation({
    mutationFn: emailCheck,
    onSuccess: () => {
      // addResetPasswordToken(data.reset_password_token);
      nextPage();
    },
    onError: () => {
      toast({
        title: "Бүртгэлгүй имэйл байна.",
      });
    },
  });
  const FormSchema = z.object({
    email: z
      .string()
      .email({
        message: "messages.emailType",
      })
      .min(11, {
        message: "messages.emailType",
      }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    resetPasswordMutation.mutate({
      email: data.email,
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold">Нууц үг шинэчлэх</h1>
          <Separator className="my-3 bg-slate-300" />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <br />
                <FormControl>
                  <Input
                    placeholder={"Өөрийн бүртгэлтэй имэйлийг оруулна уу."}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <Button
            variant="outline"
            className="rounded-xl px-6 py-2"
            onClick={cancel}
            disabled={resetPasswordMutation.isPending}
          >
            Буцах
          </Button>
          <Button
            className="py-2 px-6 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
            disabled={resetPasswordMutation.isPending}
          >
            Үргэлжлүүлэх
          </Button>
        </div>
      </form>
    </Form>
  );
}
