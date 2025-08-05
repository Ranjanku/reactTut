import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div className="flex flex-col h-screen">
      <div className={`flex-1 ${bgColor}`}></div>

      <div className="bg-white p-4 shadow-md border-t border-black">
        <div className="flex justify-between gap-2 overflow-x-auto">
          <button className="w-24 h-10 bg-red-500 text-white rounded-full text-sm font-semibold"
            onClick={() => setBgColor("bg-red-500")}>
            RED
          </button>

          <button className="w-24 h-10 bg-gray-800 text-white rounded-full text-sm font-semibold"
            onClick={() => setBgColor("bg-gray-800")}>
            BLACK
          </button>

          <button className="w-24 h-10 bg-blue-500 text-white rounded-full text-sm font-semibold"
            onClick={() => setBgColor("bg-blue-500")}>
            BLUE
          </button>

          <button className="w-24 h-10 bg-purple-500 text-white rounded-full text-sm font-semibold"
            onClick={() => setBgColor("bg-purple-500")}>
            PURPLE
          </button>

          <button className="w-24 h-10 bg-green-500 text-white rounded-full text-sm font-semibold"
            onClick={() => setBgColor("bg-green-500")}>
            GREEN
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
