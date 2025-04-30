import { useRef, useEffect } from "react";
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
import { Letter } from "@/constants/types";

export default function VowelCard({ vowel }: { vowel: Letter }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (vowel.desc) {
      audioRef.current = new Audio(vowel.desc);
    }
  }, [vowel.desc]);

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
        <Card className="group relative p-6 flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:border-blue-300 overflow-hidden">
          <div className="text-3xl font-bold text-blue-600 mb-2 transition-transform group-hover:scale-110">
            {vowel.name}
          </div>
          <div className="rotate-90 font-semibold text-3xl text-gray-800 mb-3">
            {vowel.script}
          </div>
          <button
            onClick={playAudio}
            className="absolute top-2 right-2 p-2 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl text-center py-4 border-b border-gray-200">
            {vowel.name} үсгийн дуудахуй
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="text-5xl font-bold text-blue-600 mb-4">
              {vowel.name}
            </div>
            <div className="rotate-90 font-semibold text-5xl text-gray-800 mb-6">
              {vowel.script}
            </div>
            <button
              onClick={playAudio}
              className="p-4 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <Volume2 className="w-8 h-8" />
            </button>
          </div>
          <LetterTable letter={vowel} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
