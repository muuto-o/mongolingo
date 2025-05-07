import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Уучлаарай! Таны хайсан хуудас олдсонгүй.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Нүүр хуудас руу буцах
        </Button>
      </div>
    </div>
  );
}
