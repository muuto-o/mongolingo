import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Lock, Info, ChevronRight } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Монгол Үсэг</h1>
          <p className="text-gray-600">Монгол бичгийн үсгүүдийг суралцацгаая</p>
        </div>

        {/* Chapter 1 - Active */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
          <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                    БҮЛЭГ 1
                  </span>
                  <Dialog>
                    <DialogTrigger className="text-blue-600 hover:text-blue-800 transition-colors">
                      <Info className="w-4 h-4" />
                    </DialogTrigger>
                    <DialogContent className="rounded-lg max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-xl">
                          БҮЛЭГ 1 - Дэлгэрэнгүй
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 mt-2">
                          Энэхүү бүлгийн хүрээнд монгол бичгийн үсгүүдийн талаар
                          сурж, дасгал ажиллан дадлага хийнэ. 5 хичээлээр
                          бүрдсэн энэ бүлэг нь үндсэн эгшиг үсгүүдийг
                          танилцуулна.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  Үндсэн эгшиг үсгүүд
                </h2>
                <p className="text-gray-600 text-sm flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  5 хичээл
                </p>
              </div>
              <button
                onClick={() => navigate("/lesson")}
                className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:shadow-md transition-all"
              >
                Эхлүүлэх
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Chapter 2 - Locked */}
        <div className="relative ">
          <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                    БҮЛЭГ 2
                  </span>
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-600 mb-1">
                  Гийгүүлэгч үсгүүд
                </h2>
                <p className="text-gray-500 text-sm flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  10 хичээл
                </p>
              </div>
              <button
                disabled
                className="flex items-center justify-center bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
              >
                Тун удахгүй
                <Lock className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-white/30 rounded-xl backdrop-blur-sm"></div> */}
        </div>

        {/* Progress Section */}
        {/* <div className="bg-white rounded-xl p-6 shadow border border-gray-200 mt-8">
          <h3 className="font-medium text-gray-800 mb-3">Таны дэвшил</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>0% дууссан</span>
            <span>0/15 хичээл</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
