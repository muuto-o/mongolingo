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
        title: "messages.unregistered",
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
          <h1 className="text-2xl font-bold">resetPassword</h1>
          <Separator className="my-3 bg-slate-300" />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>resetPasswordDesc</FormLabel>
                <br />
                <FormControl>
                  <Input placeholder={"email"} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={cancel}
            disabled={resetPasswordMutation.isPending}
          >
            cancel
          </Button>
          <Button
            variant="default"
            className="bg-[#143f91] text-white hover:bg-[#1d2053] hover:text-white"
            disabled={resetPasswordMutation.isPending}
          >
            continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
