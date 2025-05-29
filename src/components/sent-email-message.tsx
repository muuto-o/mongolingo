import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function SentEmailMessage({ cancel }: { cancel: () => void }) {
  return (
    <div className="flex h-full flex-col justify-around">
      <div className="flex w-full items-center justify-center text-xl gap-2">
        <MailCheck size={36} color="#15b300" strokeWidth={2.5} />
        <div>Та имэйл ээ шалгана уу.</div>
      </div>

      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="rounded-xl px-6 py-2"
          onClick={cancel}
        >
          Буцах
        </Button>
        <Link
          to={"https://mail.google.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="py-2 px-6 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
            Шалгах
          </Button>
        </Link>
      </div>
    </div>
  );
}
