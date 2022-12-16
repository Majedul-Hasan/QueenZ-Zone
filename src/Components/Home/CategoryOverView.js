import React from "react";
import imageCate from "../../Asset/cateOverView.png";

export default function CategoryOverView({ ca }) {
  return (
    <div className="mt-1 p-1">
      <img
        style={{ width: "100%" }}
        src={imageCate}
        class="img-fluid"
        alt="..."
      ></img>
    </div>
  );
}
