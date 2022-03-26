import React from "react";
import pic from "../../Asset/MaskGroup4.png";

export default function ShowGroupPicFirst() {
  return (
    <div>
      <div class="" style={{ backgroundColor: "#FEC400" }}>
        <div class="d-flex justify-content-around">
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              class="img-fluid "
              alt="..."
            ></img>
          </div>
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              class="img-fluid "
              alt="..."
            ></img>
          </div>
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              class="img-fluid "
              alt="..."
            ></img>
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              class="img-fluid "
              alt="..."
            ></img>
          </div>
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              class="img-fluid "
              alt="..."
            ></img>
          </div>
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              class="img-fluid "
              alt="..."
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
