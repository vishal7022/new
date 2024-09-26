import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-20"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-3 py-2 px-3">
        <div className=" flex flex-wrap gap-10 bg-white px-5 py-2 rounded-lg shadow-slate-700">
          <button
            onClick={() => setcolor("red")}
            className="px-6 py-2 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
          onClick={() => setcolor("green")}
            className="px-6 py-2 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
          onClick={() => setcolor("yellow")}
            className="px-6 py-2 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#8B8000" }}
          >
            Yellow
          </button>

          <button
          onClick={() => setcolor("blue")}
            className="px-6 py-2 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Navy Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
