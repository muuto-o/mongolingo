import { useRef, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import { LetterTable } from "@/components/letter-table";
import { Button } from "./ui/button";
import { Consonant, Letter } from "@/constants/types";

export default function ConsonantCard({ consonant }: { consonant: Consonant }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [letter, setLetter] = useState<Letter>(consonant);

  useEffect(() => {
    if (letter.desc) {
      audioRef.current = new Audio(letter.desc);
    }
  }, [letter.desc]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Card className="group relative p-6 flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:border-green-300 overflow-hidden">
          {/* Letter Display */}
          <div className="text-3xl font-bold text-green-600 mb-2 transition-transform group-hover:scale-110">
            {consonant.name}
          </div>
          <div className="rotate-90 font-semibold text-3xl text-gray-800 mb-3">
            {consonant.script}
          </div>

          {/* Audio Button */}
          {/* <button className="absolute top-2 right-2 p-2 rounded-full bg-green-50 text-green-500 hover:bg-green-100 transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button> */}

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl text-center py-4 border-b border-gray-200">
            {consonant.name}А толгойт үсэг
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="text-5xl font-bold text-green-600 mb-4">
              {consonant.name}
            </div>
            <div className="rotate-90 font-semibold text-5xl text-gray-800 mb-6">
              {consonant.script}
            </div>
            <button
              onClick={playAudio}
              className="p-4 bg-green-100 rounded-full text-green-600 hover:bg-green-200 transition-colors"
            >
              <Volume2 className="w-8 h-8" />
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3 md:gap-4">
            {consonant.letters.map((el, index) => (
              <Button
                key={index}
                onClick={() => setLetter(el)}
                variant="outline"
                className={`rounded-full px-4 py-3 text-base md:text-sm font-semibold w-full transition-all duration-200 border-2 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 active:scale-95 ${
                  letter?.name === el.name
                    ? "bg-blue-100 border-blue-500 text-blue-600"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                {el.name}
              </Button>
            ))}
          </div>

          <div className="text-gray-700 text-center mt-4">
            <LetterTable letter={letter} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
