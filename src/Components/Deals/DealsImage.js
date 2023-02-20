import React from "react";

import image1 from "../../Asset/mega/1.png";
// import image2 from '../../Asset/mega/2.png'
// import image3 from '../../Asset/mega/3.png'
// import image4 from '../../Asset/mega/4.png'

export default function DealsImage() {
  return (
    <div className="p-1">
      <img
        style={{ borderRadius: "10px", width: "100%" }}
        src={image1}
        class="img-fluid"
        alt="..."
      ></img>
    </div>
  );
}
