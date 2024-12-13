import { Card } from "@/components/ui/card";
import { consonants, letters } from "@/data/datas";

export default function Letters() {
  return (
    <div className="w-full h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Vowels Section */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Эгшиг үсэгнүүд
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {letters.map((letter, index) => (
              <Card
                key={index}
                className="p-4 flex flex-col items-center justify-center shadow-md border rounded-lg bg-white hover:bg-blue-100 transition-colors"
              >
                <div className="text-lg font-medium text-gray-700">
                  {letter.letter}
                </div>
                <div className="rotate-90 font-semibold text-2xl text-gray-900">
                  {letter.script}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Consonants Section */}
        <section>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Гийгүүлэгч үсэгнүүд
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {consonants.map((letter, index) => (
              <Card
                key={index}
                className="p-4 flex flex-col items-center justify-center shadow-md border rounded-lg bg-white hover:bg-green-100 transition-colors"
              >
                <div className="text-lg font-medium text-gray-700">
                  {letter.letter}
                </div>
                <div className="rotate-90 font-semibold text-2xl text-gray-900">
                  {letter.script}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
