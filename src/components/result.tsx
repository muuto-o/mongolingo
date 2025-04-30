import { ChevronRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  points: number;
  nextLesson: () => void;
  isLoading: boolean;
};

export default function ShowResult({ points, nextLesson, isLoading }: Props) {
  return (
    <div className="max-w-2xl mx-auto text-center p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Баяр хүргэе!</h2>
          {/* <p className="text-blue-100">
              You made {exercises.length - (lives > 0 ? lives : 0)} mistakes in
              this lesson
            </p> */}
        </div>
        <div className="p-8">
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm w-full sm:w-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="text-amber-600" size={24} />
                <p className="text-amber-800 font-bold">Нийт оноо</p>
              </div>
              <p className="text-3xl font-bold text-amber-900">{points}</p>
            </div>
            {/* <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm w-full sm:w-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="text-emerald-600" size={24} />
                  <p className="text-emerald-800 font-bold">Онч</p>
                </div>
                <p className="text-3xl font-bold text-emerald-900">
                  {accuracy}%
                </p>
              </div> */}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              className="gap-2 py-5 px-6 rounded-xl"
              disabled={true}
            >
              coming soon...
            </Button>
            <Button
              className="gap-2 py-5 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              disabled={isLoading}
              onClick={nextLesson}
            >
              Үргэлжлүүлэх <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
