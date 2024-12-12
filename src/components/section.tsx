interface SectionProps {
    title: string;
    progress: number;
    total: number;
    message: string;
    buttonText: string;
    locked?: boolean;   
  }
  
  export default function Section({ title, progress, total, message, buttonText, locked } : SectionProps) {
    return (
      <div className={`p-4 bg-gray-800 rounded-lg mb-6 ${locked ? 'opacity-50' : ''}`}>
        <div className="text-blue-300 text-sm font-semibold mb-1">SEE DETAILS</div>
        <div className="text-white text-lg font-bold mb-2">{title}</div>
        <div className="flex items-center mb-4">
          <div className="relative w-full bg-gray-700 h-4 rounded-full mr-2">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${(progress / total) * 100}%` }}
            ></div>
          </div>
          <span className="text-gray-400 text-xs">{progress} / {total}</span>
          <span className="ml-2 text-white text-lg">🏆</span>
        </div>
        <button
          className={`w-full py-2 rounded-md font-semibold ${locked ? 'bg-gray-600 text-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          disabled={locked}
        >
          {buttonText}
        </button>
        <div className="flex items-start mt-4">
          <div className="bg-gray-900 text-white text-sm p-3 rounded-md mr-2">{message}</div>
          <img src="/path/to/character-image.png" alt="Character" className="w-12 h-12" />
        </div>
      </div>
    );
  };