import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Exercise() {
  const navigate = useNavigate();
  return (
    <Card className="w-full h-full border-2 flex flex-col items-center">
      {/* progress bar*/}
      <div className="flex h-8 w-10/12 justify-evenly items-center">
        <ArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
        <Progress value={10} className="w-11/12 [&>*]:bg-[#279c86] h-4" />
      </div>
      {/* Questoins  */}
      <div className="border-2 w-full h-2/5">Question</div>
      {/* Answers */}
      <div>Answers</div>
    </Card>
  );
}
