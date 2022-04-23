import React from "react";

export default function DeliveryFee() {
  return (
    <div className=" m-2 " style={{ height: "50px" }}>
      <div>
        <div
          class="  "
          style={{
            border: "1px solid #fec400",
            borderRadius: "5px",

            // opacity: `${animationShow === "tra" && "0.5"}`,
            // transition: "0.5s",
          }}
        >
          <div class=" p-2 d-flex justify-content-between">
            <div>
              <b>Delivery Fee :</b>
            </div>
            <div className="">
              <b className="">SAR 20</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
