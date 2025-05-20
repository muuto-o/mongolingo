import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { registerQuestion } from "@/services/questions";

type MultipleChoiceForm = {
  type: "multiple_choice";
  title: string;
  exerciseId: string;
  options: string[];
  correctAnswer: string;
  audioPath: string;
};

type MatchingForm = {
  type: "matching";
  title: string;
  exerciseId: string;
  pairs: { word: string; meaning: string }[];
  correctAnswer: { [key: string]: string };
};

export default function QuestionRegistration() {
  const [questionType, setQuestionType] = useState<
    "multiple_choice" | "matching"
  >("multiple_choice");
  const [multipleChoice, setMultipleChoice] = useState<MultipleChoiceForm>({
    type: "multiple_choice",
    title: "",
    exerciseId: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    audioPath: "",
  });

  const [matching, setMatching] = useState<MatchingForm>({
    type: "matching",
    title: "",
    exerciseId: "",
    pairs: [{ word: "", meaning: "" }],
    correctAnswer: {},
  });

  const registerMutation = useMutation({
    mutationFn: registerQuestion,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {
      console.log("error");
    },
  });

  const handleSubmit = () => {
    if (questionType === "multiple_choice") {
      console.log("Multiple Choice Question:", multipleChoice);
      registerMutation.mutate(multipleChoice);
    } else {
      const correctMap: { [key: string]: string } = {};
      matching.pairs.forEach((pair) => {
        correctMap[pair.word] = pair.meaning;
      });
      setMatching({ ...matching, correctAnswer: correctMap });
      console.log("Matching Question:", {
        ...matching,
        correctAnswer: correctMap,
      });
      registerMutation.mutate({
        ...matching,
        correctAnswer: correctMap,
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">Асуулт бүртгэх</h2>

      <div className="flex gap-4">
        <Button
          variant={questionType === "multiple_choice" ? "default" : "outline"}
          onClick={() => setQuestionType("multiple_choice")}
        >
          Multiple Choice
        </Button>
        <Button
          variant={questionType === "matching" ? "default" : "outline"}
          onClick={() => setQuestionType("matching")}
        >
          Matching
        </Button>
      </div>

      {questionType === "multiple_choice" && (
        <div className="space-y-4">
          <Input
            placeholder="Гарчиг"
            value={multipleChoice.title}
            onChange={(e) =>
              setMultipleChoice({ ...multipleChoice, title: e.target.value })
            }
          />
          <Input
            placeholder="Exercise ID"
            value={multipleChoice.exerciseId}
            onChange={(e) =>
              setMultipleChoice({
                ...multipleChoice,
                exerciseId: e.target.value,
              })
            }
          />
          {multipleChoice.options.map((opt, idx) => (
            <Input
              key={idx}
              placeholder={`Option ${idx + 1}`}
              value={opt}
              onChange={(e) => {
                const newOptions = [...multipleChoice.options];
                newOptions[idx] = e.target.value;
                setMultipleChoice({ ...multipleChoice, options: newOptions });
              }}
            />
          ))}
          <Input
            placeholder="Зөв хариулт"
            value={multipleChoice.correctAnswer}
            onChange={(e) =>
              setMultipleChoice({
                ...multipleChoice,
                correctAnswer: e.target.value,
              })
            }
          />
          <Input
            placeholder="Audio Path (optional)"
            value={multipleChoice.audioPath}
            onChange={(e) =>
              setMultipleChoice({
                ...multipleChoice,
                audioPath: e.target.value,
              })
            }
          />
        </div>
      )}

      {questionType === "matching" && (
        <div className="space-y-4">
          <Input
            placeholder="Гарчиг"
            value={matching.title}
            onChange={(e) =>
              setMatching({ ...matching, title: e.target.value })
            }
          />
          <Input
            placeholder="Exercise ID"
            value={matching.exerciseId}
            onChange={(e) =>
              setMatching({ ...matching, exerciseId: e.target.value })
            }
          />
          {matching.pairs.map((pair, idx) => (
            <div key={idx} className="flex gap-2">
              <Input
                placeholder="Word"
                value={pair.word}
                onChange={(e) => {
                  const newPairs = [...matching.pairs];
                  newPairs[idx].word = e.target.value;
                  setMatching({ ...matching, pairs: newPairs });
                }}
              />
              <Input
                placeholder="Meaning"
                value={pair.meaning}
                onChange={(e) => {
                  const newPairs = [...matching.pairs];
                  newPairs[idx].meaning = e.target.value;
                  setMatching({ ...matching, pairs: newPairs });
                }}
              />
            </div>
          ))}
          <Button
            onClick={() =>
              setMatching({
                ...matching,
                pairs: [...matching.pairs, { word: "", meaning: "" }],
              })
            }
          >
            + Хос нэмэх
          </Button>
        </div>
      )}

      <Button className="w-full mt-4" onClick={handleSubmit}>
        Бүртгэх
      </Button>
    </div>
  );
}
