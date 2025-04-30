import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function LivesOut() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6 text-center p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-rose-800 mb-3">
            Уучлаарай, та дасгалыг дахин ажиллана уу
          </h3>
          <p className="text-gray-600 mb-4">
            Таны амь дууссан. Дараагийн удаа илүү сайн хийгээрэй😉
          </p>
          <Button
            onClick={() => navigate("/lesson")}
            className="py-5 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium shadow-md transition-all"
          >
            Буцах
          </Button>
        </div>
      </div>
    </div>
  );
}
