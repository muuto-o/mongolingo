import { Card } from "@/components/ui/card";
import { letters } from "@/data/datas";

export default function Letters() {
  return (
    <div className="border-2 border-black p-2 w-full ">
        <div className="w-10/12 p-2">
            {letters.map((letter, index)=>
                <Card key={index} className="m-2 w-28 h-16 flex flex-col justify-center text-center ">
                    {letter.letter}
                    <div className="rotate-90 font-medium text-3xl">{letter.script}</div>

                </Card>
            )}
        </div>
    </div>
  )
}
