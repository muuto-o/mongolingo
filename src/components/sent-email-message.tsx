import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function SentEmailMessage({ cancel }: { cancel: () => void }) {
  return (
    <div className="flex h-full flex-col justify-around">
      <div className="flex w-full text-center text-xl">
        <MailCheck size={36} color="#15b300" strokeWidth={2.5} />
        <div>sentEmail</div>
      </div>

      <div className="flex justify-center space-x-4">
        <Button variant="outline" onClick={cancel}>
          cancel
        </Button>
        <Link
          to={"https://mail.google.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="default"
            className="bg-[#143f91] text-white hover:bg-[#1d2053] hover:text-white"
          >
            check
          </Button>
        </Link>
      </div>
    </div>
  );
}
