import { consonants, vowels } from "@/data/datas";
import VowelCard from "@/components/vowel-card";
import ConsonantCard from "@/components/consonant-card";

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
            {vowels.map((vowel, index) => (
              <VowelCard key={index} vowel={vowel} />
            ))}
          </div>
        </section>

        {/* Consonants Section */}
        <section className="mb-2">
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
              <ConsonantCard consonant={letter} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
