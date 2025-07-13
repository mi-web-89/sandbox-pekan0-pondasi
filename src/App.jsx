import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);

  const prevCount = () => setCount(count - 1);

  return (
    <>
    <div className="bg-slate-900 min-h-screen flex items-center justify-center text-white">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Aplikasi Counter Tailwind</h1>
          <p className="text-slate-400">Nilai saat ini:</p>
          <h2 className="text-7xl font-mono font-bold my-4">{count}</h2>
           <div className="flex gap-4 justify-center">
          <button
            onClick={prevCount}
            className="bg-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors text-black"
          >
            - Kurangi
          </button>
          <button
            onClick={addCount}
            className="bg-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-black"
          >
            + Tambah
          </button>
        </div>
      </div>
    </div>
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
    </>
  );
}

export default App;
