import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SendEmail from "@/components/send-email";
import SentEmailMessage from "@/components/sent-email-message";
import { Card } from "@/components/ui/card";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);

  const nextPage = () => {
    setCounter(counter + 1);
  };
  const cancel = () => {
    setCounter(0);
    navigate("/login");
  };

  const [pages] = useState<JSX.Element[]>([
    <SendEmail key={0} nextPage={nextPage} cancel={cancel} />,
    <SentEmailMessage key={1} cancel={cancel} />,
  ]);
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="flex h-56 w-10/12 items-center justify-center px-5 py-3 md:w-[27rem]">
        {pages[counter]}
      </Card>
    </div>
  );
}
