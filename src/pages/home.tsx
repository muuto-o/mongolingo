import {
  DialogHeader,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 w-full h-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center justify-center">
      {/* SECTION 1 */}
      <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 p-6 rounded-xl mb-8 shadow-xl border-2 border-gray-300 w-11/12 max-w-2xl flex justify-between ">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="">
                    <div className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-300">
                      ДЭЛГЭРЭНГҮЙ
                    </div>
                  </button>
                </DialogTrigger>
                <DialogPortal>
                  <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-40" />
                  <DialogContent className="fixed z-50 inset-0 m-auto w-full h-56 max-w-lg p-6 bg-white rounded-md shadow-lg">
                    <DialogHeader>
                      <DialogTitle className="text-lg font-semibold text-gray-800 text-center">
                        ДЭЛГЭРЭНГҮЙ
                      </DialogTitle>
                      <DialogDescription className="text-xl text-gray-600 flex items-center">
                        Энэхүү бүлгийн хүрээнд монгол бичгийн үсгүүдийн талаар
                        сурж дасгал ажиллан дадлага хийнэ. {}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </DialogPortal>
              </Dialog>
              <div className="text-gray-800 text-xl font-bold">БҮЛЭГ 1</div>
              <div className="flex items-center mt-2">
                <div className="text-gray-600 text-sm mt-1">5 хичээл</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <button
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg mt-4 shadow-md hover:bg-blue-700 transition-colors duration-300"
            onClick={() => navigate("/lesson")}
          >
            Эхлүүлэх
          </button>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="bg-gradient-to-r from-gray-300 to-gray-400 p-6 rounded-xl border-2 border-gray-300 w-11/12 max-w-2xl cursor-not-allowed mb-8 shadow-xl flex justify-between ">
        <div>
          <div className="text-blue-600 text-sm font-medium">ДЭЛГЭРЭНГҮЙ</div>
          <div className="text-gray-800 text-xl font-bold">Бүлэг 2</div>
          <div className="text-gray-600 text-sm mt-1">10 хичээл</div>
        </div>
        <div className="relative"></div>
        <button className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg mt-4 cursor-not-allowed opacity-70">
          Тун удахгүй
        </button>
      </div>
    </div>
  );
}
