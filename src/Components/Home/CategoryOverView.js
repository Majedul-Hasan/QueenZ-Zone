import React from "react";

export default function CategoryOverView({ img }) {
  return (
    <div className="mt-1 p-1">
      {img.target === "" ? (
        <img
          style={{ width: "100%" }}
          src={img.link}
          class="img-fluid"
          alt="..."
        ></img>
      ) : (
        <a href={img.target === "" ? "" : img.target}>
          {" "}
          <img
            style={{ width: "100%" }}
            src={img.link}
            class="img-fluid"
            alt="..."
          ></img>
        </a>
      )}
    </div>
  );
}
