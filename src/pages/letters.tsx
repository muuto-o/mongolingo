import { Card } from "@/components/ui/card";
import { consonants, letters } from "@/data/datas";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Volume2 } from "lucide-react";

export default function Letters() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Vowels Section */}
        <section className="mb-12">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3">
                А
              </span>
              Эгшиг үсэгнүүд
            </h1>
            <p className="text-gray-600">Монгол хэлний үндсэн үсгүүд</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {letters.map((letter, index) => (
              <Dialog key={index}>
                <DialogTrigger>
                  <Card className="group relative p-6 flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:border-blue-300 overflow-hidden">
                    {/* Letter Display */}
                    <div className="text-3xl font-bold text-blue-600 mb-2 transition-transform group-hover:scale-110">
                      {letter.letter}
                    </div>
                    <div className="rotate-90 font-semibold text-3xl text-gray-800 mb-3">
                      {letter.script}
                    </div>

                    {/* Audio Button */}
                    <button className="absolute top-2 right-2 p-2 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-center py-4 border-b border-gray-200">
                      {letter.letter} үсгийн дуудахуй
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                      <div className="text-5xl font-bold text-blue-600 mb-4">
                        {letter.letter}
                      </div>
                      <div className="rotate-90 font-semibold text-5xl text-gray-800 mb-6">
                        {letter.script}
                      </div>
                      <button className="p-4 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                        <Volume2 className="w-8 h-8" />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center flex flex-col items-center">
                      {letter.desc.map((part, i) => (
                        <div
                          key={i}
                          className="flex items-center my-1 mongolian-text"
                        >
                          {part}
                          {letter.img[i] && (
                            <img
                              src={letter.img[i]}
                              alt=""
                              className="w-6 rotate-90 mx-2"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Consonants Section */}
        <section>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-3">
                Б
              </span>
              Гийгүүлэгч үсэгнүүд
            </h1>
            <p className="text-gray-600">Монгол хэлний гийгүүлэгч үсгүүд</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {consonants.map((letter, index) => (
              <Dialog key={index}>
                <DialogTrigger>
                  <Card className="group relative p-6 flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all hover:border-green-300 overflow-hidden">
                    {/* Letter Display */}
                    <div className="text-3xl font-bold text-green-600 mb-2 transition-transform group-hover:scale-110">
                      {letter.letter}
                    </div>
                    <div className="rotate-90 font-semibold text-3xl text-gray-800 mb-3">
                      {letter.script}
                    </div>

                    {/* Audio Button */}
                    {/* <button className="absolute top-2 right-2 p-2 rounded-full bg-green-50 text-green-500 hover:bg-green-100 transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button> */}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-center py-4 border-b border-gray-200">
                      {letter.letter} үсгийн дуудахуй
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                      <div className="text-5xl font-bold text-green-600 mb-4">
                        {letter.letter}
                      </div>
                      <div className="rotate-90 font-semibold text-5xl text-gray-800 mb-6">
                        {letter.script}
                      </div>
                      <button className="p-4 bg-green-100 rounded-full text-green-600 hover:bg-green-200 transition-colors">
                        <Volume2 className="w-8 h-8" />
                      </button>
                    </div>
                    <div className="text-gray-700 text-center">
                      {/* {letter.desc?.length > 0 ? (
                        letter.desc.map((part, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-center my-1"
                          >
                            {part}
                            {letter.img?.[i] && (
                              <img
                                src={letter.img[i]}
                                alt=""
                                className="w-6 rotate-90 mx-2"
                              />
                            )}
                          </div>
                        ))
                      ) : (
                        <p>Дэлгэрэнгүй мэдээлэл оруулаагүй байна</p>
                      )} */}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
