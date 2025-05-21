import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MongolianScript from "@/components/mongolian-script";

type TutorialContent = {
  title: string;
  description: string;
  letters?: string[];
  audioPaths?: string[];
  examples?: { word: string; meaning: string }[];
};

const tutorialContents: Record<string, TutorialContent> = {
  "67ed64b92e4cedc9339de36f": {
    title: "Монгол бичгийн зурлага",
    description:
      "Монгол бичгээр дээрээс доошоо бичдэг бөгөөд кирилл бичгийн дугуй зурлагыг нар буруу эргүүлж бичдэг бол монгол бичгийн дугуй зурлагыг нар зөв эргүүлж бичдэг. Монгол бичиг үндсэн зурлага, ялгах үүрэгтэй туслах зурлагатай байдаг. Монгол бичиг ундсэн 7 зурлагатай: Эдгээрийг зөв ялган бичих нь чухал.",
    letters: ["ᠡ‍", "᠊ᠠ‍", "᠊ᠢ‍", "᠊᠊", "᠊ᠣ‍"],
    examples: [
      { word: "ᠡ‍", meaning: "Титэм" },
      { word: "᠊ᠠ‍", meaning: "Шүд" },
      { word: "᠊ᠢ‍", meaning: "Шилбэ" },
      { word: "᠊ᠣ‍", meaning: "Гэдэс" },
      { word: "‍ᠢ", meaning: "Нум" },
      { word: "‍ᠠ", meaning: "Сүүл" },
      { word: "ᠡ᠋", meaning: "Орхиц" },
    ],
  },
  "6809b7edda6323d169183d7a": {
    title: "Шүд үсгийн хэрэглээ",
    description:
      "Шүд үсгийг дуудлага, байрлалаар нь зөв бичих нь чухал. Доорх жишээг харна уу.",
    examples: [
      { word: "ᠰᠢᠳᠦ", meaning: "шүд" },
      { word: "ᠰᠢᠳᠡᠨ", meaning: "шүдэн" },
    ],
  },
  "6809b829da6323d169183d7c": {
    title: "Эгшиг үсгүүд",
    description:
      "Эгшиг үсгүүдийн дуудлага, байрлалын ялгааг ойлгох нь бичгийн суурь ойлголт юм.",
    letters: ["ᠠ", "ᠡ", "ᠢ", "ᠣ", "ᠤ", "ᠥ", "ᠦ"],
    examples: [
      { word: "ᠠᠯᠠ", meaning: "алаг" },
      { word: "ᠡᠳᠦ", meaning: "эдүү" },
    ],
  },
};

export default function Tutorial() {
  const navigate = useNavigate();
  const location = useLocation();
  const exerciseId = location.state?.exerciseId;

  const [content, setContent] = useState<TutorialContent | null>(null);

  useEffect(() => {
    if (exerciseId && tutorialContents[exerciseId]) {
      setContent(tutorialContents[exerciseId]);
    } else {
      setContent({
        title: "Мэдээлэл алга",
        description: "Энэ хичээлийн талаар дэлгэрэнгүй мэдээлэл ороогүй байна.",
      });
    }
  }, [exerciseId]);

  const goToExercise = () => {
    navigate("/exercise", { state: { exerciseId } });
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
          <h1 className="text-2xl font-bold text-center">{content?.title}</h1>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            {content?.description}
          </p>

          {/* {content?.letters && (
            <div className="text-center">
              <h2 className="font-semibold text-indigo-700 mb-2">Үсгүүд</h2>
              <div className="flex justify-center flex-wrap gap-4">
                {content.letters.map((letter, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-xl bg-gray-50 shadow-sm"
                  >
                    <MongolianScript script={letter} className="text-3xl" />
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {content?.examples && (
            <div className="text-center">
              <h2 className="font-semibold text-indigo-700 mb-2">
                Үндсэн зурлагууд
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.examples.map((ex, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-xl bg-amber-50 shadow-sm"
                  >
                    <MongolianScript script={ex.word} className="text-2xl" />
                    <p className="text-sm text-gray-600 mt-1">{ex.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="text-white p-6">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Энэхүү бүлгээр монгол бичгийн үндсэн зурлагуудын талаар дасгалууд
              ажиллана. Амжилт хүсье.
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <Button
              variant="outline"
              onClick={() => navigate("/lesson")}
              className="text-lg py-4 px-8 rounded-xl"
            >
              ← Буцах
            </Button>
            <Button
              onClick={goToExercise}
              className="py-4 px-8 text-lg rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
            >
              Дасгал эхлүүлэх
            </Button>
            <div className="mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
