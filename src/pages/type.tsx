import TypingPractice from "@/components/typer";

export default function TypingPracticePage() {
  // You can use a longer sample or generate randomly later
  const sampleText =
    "᠊ᠡ‍ᠢ᠋᠊ᠣ‍᠊ᠠ  ᠹᠸᠡᠥᠢᠵᠹᠸᠡᠢᠹᠵ ᠸᠡᠢᠥᠹᠵᠢᠸᠡᠹᠵ ᠸᠡᠢᠥᠹᠵᠸᠡᠥᠵᠹ ᠸᠡᠥᠢᠹᠵᠸᠡᠥ ᠹᠥᠢᠸᠵᠡᠹ ᠸᠡᠥᠵᠹ ᠸᠡᠥᠢᠹᠵᠸᠡᠥᠹᠸᠡᠥᠢᠵᠹ ᠸᠡᠱ";

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <TypingPractice text={sampleText} />
      </div>
    </section>
  );
}
