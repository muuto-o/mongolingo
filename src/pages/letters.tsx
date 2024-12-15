import { Card } from "@/components/ui/card";
import { consonants, letters } from "@/data/datas";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Letters() {
  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Vowels Section */}
        <section className="mb-8">
          <h1 className="w-full border-2 border-gray-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-bold text-2xl text-center text-white py-4 mb-12 shadow-lg">
            Эгшиг үсэгнүүд
          </h1>
          {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Эгшиг үсэгнүүд
          </h1> */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {letters.map((letter, index) => (
              <Dialog key={index}>
                <DialogTrigger>
                  {" "}
                  <Card
                    key={index}
                    className="p-4 flex flex-col items-center justify-center shadow-md border rounded-lg bg-white hover:bg-gray-200 transition-colors"
                  >
                    <div className="text-lg font-medium text-gray-700">
                      {letter.letter}
                    </div>
                    <div className="rotate-90 font-semibold text-2xl text-gray-900">
                      {letter.script}
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Тусламж</DialogTitle>
                    <DialogDescription className="flex ">
                      <div> {letter.desc[0]} </div>
                      <img
                        src={letter.img[0]}
                        alt=""
                        className="w-6 rotate-90 mx-2"
                      />
                      {letter.desc[1]}{" "}
                      <img
                        src={letter.img[1]}
                        alt=""
                        className="w-4 rotate-90 mx-2"
                      />
                      {letter.desc[2]}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Consonants Section */}
        <section>
          <h1 className="w-full border-2 border-gray-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-bold text-2xl text-center text-white py-4 mb-12 shadow-lg">
            Гийгүүлэгч үсэгнүүд
          </h1>
          {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Гийгүүлэгч үсэгнүүд
          </h1> */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {consonants.map((letter, index) => (
              <Dialog key={index}>
                <DialogTrigger>
                  {" "}
                  <Card
                    key={index}
                    className="p-4 flex flex-col items-center justify-center shadow-md border rounded-lg bg-white hover:bg-gray-200 transition-colors"
                  >
                    <div className="text-lg font-medium text-gray-700">
                      {letter.letter}
                    </div>
                    <div className="rotate-90 font-semibold text-2xl text-gray-900">
                      {letter.script}
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Тусламж</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
