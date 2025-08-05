import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="bg-green-500 h-screen w-full duration-900" style={{backgroundColor : color}}>
      <div className="fixed flex flax-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor :"red"}}
          onClick={() => setColor("red")}
          >Red</button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor :"Green"}}
          onClick={() => setColor("green")}
          >Green</button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor :"blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor :"olive"}}
          onClick={() => setColor("olive")}
          >Olive</button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor :"gray"}}
          onClick={() => setColor("gray")}
          >Gray</button>

          <button
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style={{backgroundColor :"yellow"}}
          onClick={() => setColor("yellow")}
          >yellow</button>

          <button
          className="outline-none px-4 py-1 rounded-full  shadow-lg"
          style={{backgroundColor :"pink"}}
          onClick={() => setColor("pink")}
          >Pink</button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor :"purple"}}
          onClick={() => setColor("purple")}
          >Purple</button>

          <button
          className="outline-none px-4 py-1 rounded-full  shadow-lg"
          style={{backgroundColor :"lavender"}}
          onClick={() => setColor("lavender")}
          >lavender</button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor :"black"}}
          onClick={() => setColor("black")}
          >black</button>
        </div>
      </div>

    </div>
  )
}

export default App
