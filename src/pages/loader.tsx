import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInterface } from "@/hooks/interface";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function LoaderPage() {
  const { setSidebar } = useInterface();

  useEffect(() => {
    setSidebar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const nextPage = () => {};

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <Card className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden flex flex-col items-center p-8 space-y-4 border border-gray-100">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-ping opacity-75"></div>
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-xl font-semibold text-gray-800">
            Түр хүлээнэ үү...
          </h2>
          <p className="text-sm text-gray-500">Систем ачааллаж байна</p>
        </div>

        {/* <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
          <div className="bg-blue-500 h-1.5 rounded-full animate-pulse w-3/4"></div>
        </div> */}
      </Card>
    </div>
  );
}
