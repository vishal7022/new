import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState(2);

  let addvalue = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      console.log(count);
    }
  };

  let removevalue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log(count);
    }
  };

  let myobj = {
    name: "vishal",
    DOB: "Frb",
  };

  let myarry = [1, 3, 5];

  return (
    <>
      <h1 className="text-yellow-600">Helllo tailwind</h1>
      <button onClick={addvalue} className="bg-slate-800 text-white mt-3">
        Add to cart {count}
      </button>
      <br />
      <button onClick={removevalue} className="bg-slate-800 text-white mt-3">
        Add to cart {count}
      </button>

      <Card someobj={myobj} username="Vishal" Btnname="visit me" />
      <Card obj={myarry} username="Bittu" Btnname="get start" />
      <Card obj={myarry} username="Vivek" Btnname="quick start" />
      <Card obj={myarry} username="Rak" />
    </>
  );
}

export default App;
