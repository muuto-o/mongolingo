export default function HomePage() {
  return (
    <div className="p-4 w-full h-full bg-gray-100 flex-col align-middle justify-center">
      <div className="bg-white p-4 rounded-lg mb-4 shadow-lg border-2 border-gray-300 w-10/12">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-blue-600 text-sm">ДЭЛГЭРЭНГҮЙ</div>
            <div className="text-gray-800 text-xl font-bold">БҮЛЭГ 1</div>
            <div className="flex items-center mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              <div className="bg-gray-300 h-2 rounded-full flex-grow ml-2"></div>
              <i className="fas fa-trophy text-gray-800 ml-2"></i>
            </div>
            <div className="text-gray-800 text-sm mt-1">3 / 16</div>
          </div>
          <div className="relative">
            {/* Optional additional content */}
          </div>
        </div>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">Үргэлжлүүлэх</button>
      </div>

      <div className="bg-white p-4 rounded-lg border-2 border-gray-300 w-10/12">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-blue-600 text-sm">ДЭЛГЭРЭНГҮЙ</div>
            <div className="text-gray-600 text-xl font-bold">Бүлэг 2</div>
            <div className="text-gray-600 text-sm mt-1">10 хичээл</div>
          </div>
          <div className="relative">
            {/* Optional additional content */}
          </div>
        </div>
        <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mt-4">Үсрэх</button>
      </div>
    </div>
  );
}