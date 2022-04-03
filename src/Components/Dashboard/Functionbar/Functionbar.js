import React, { useState } from "react";

export default function Functionbar() {
  const [imageNumbr, setImageNumber] = useState([]);

  const addImage = (props) => {
    console.log("dkj");
    setImageNumber([...imageNumbr, props]);
  };

  const seeeeee = () => {
    console.log("this is :::::        ", imageNumbr);
  };

  return (
    <div>
      <button onClick={() => addImage("1")}>Add</button>
      <button onClick={() => seeeeee()}>seeeeeee</button>
      {imageNumbr.map((dt) => (
        <h2>hiiiiii</h2>
      ))}
    </div>
  );
}
