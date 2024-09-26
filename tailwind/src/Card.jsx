import React from "react";

function Card({ username, Btnname = "click me" }) {
  // console.log(props);
  return (
    <div className="w-60 h-60 rounded-xl mt-7">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="rounded-t-xl"
      />
      <div className="glass py-4 px-5 relative -top-[15.5rem]  rounded-b-xl z-10">
        <h1 className="font-bold  font-mono  text-xl">{username}</h1>
      </div>

      <button className="glass relative -top-[7rem]  rounded-xl bg-orange-700">
        {Btnname}
      </button>
    </div>
  );
}

export default Card;
