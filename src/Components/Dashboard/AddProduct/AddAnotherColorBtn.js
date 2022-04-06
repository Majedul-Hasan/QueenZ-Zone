import React from "react";

export default function AddAnotherColorBtn({ addProduct, addSingleProduct }) {
  return (
    <div>
      {" "}
      <div className="m-2">
        <button
          className="btn btn-warning"
          onClick={() => addProduct(addSingleProduct + 1)}
        >
          Add Another Product's Color
        </button>
      </div>
    </div>
  );
}
