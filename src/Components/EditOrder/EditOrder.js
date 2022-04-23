import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditImage from "./EditImage";

export default function EditOrder() {
  // order
  const [orderList, setOrderList] = useState([]);
  let { ONumber } = useParams();

  console.log(ONumber);

  // // useEfect for read order info
  useEffect(() => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneEditOrderFind/${ONumber}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setOrderList(json);
      });
  }, []);

  return (
    <div className="mb-5 pb-5">
      <div>
        <div>
          <div
            className="m-1 p-1"
            style={{ border: "2px solid #fec400", borderRadius: "10px" }}
          >
            <div>
              {" "}
              Order Number : <b>{orderList[0] && orderList[0]._id}</b>
            </div>
            <div>
              <hr
                style={{
                  padding: "0px 10px ",
                  border: "1px solid #fec400",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div>
              {orderList[0] &&
                orderList[0].UserSelectproduct.selectedProduct.map((dt) => (
                  <EditImage dt={dt}></EditImage>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
