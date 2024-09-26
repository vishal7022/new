import { useState } from "react";

function App() {
  // let count = 12;

  let [count, hitcounter] = useState(2);


  // below of the 20 count 
  // let Addvalue = () => {
  //   if (count < 20) {
  //     // count = count + 1;
  //     hitcounter(count + 1);
  //     // console.log("Clickef", count);
  //   } else {
  //     hitcounter(count);
  //   }
  // };


  // It count and the 4 time of integer and add it at the same time
  let Addvalue = () => {
      hitcounter(precount => precount+1);
      hitcounter(precount => precount+1);
      hitcounter(precount => precount+1);
      hitcounter(precount => precount+1);
  };

  let Removevalue = () => {
    if (count > 0) {
      hitcounter(count - 1);
    } else {
      hitcounter(count);
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={Addvalue}>Add {count}</button>
      <br />
      <button onClick={Removevalue}>Remove {count}</button>
    </>
  );
}

export default App;
