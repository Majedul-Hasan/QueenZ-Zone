import { Button } from "@mui/material";
import { default as React, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function EditOrderCommingSoon() {
  let history = useHistory();

  // order
  const [orderList, setOrderList] = useState([]);
  let { ONumber } = useParams();
  // const socket = useRef();
  // socket.current = io(globeSocketIo);

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

  const orderDelete = (porps) => {
    // // useEfect for read order info

    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneOrderDelete/${porps}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });

    // socket.current.emit("new-order", "DELETE ORDER");
    history.push("/UserOrderPage");
  };

  return (
    <div>
      <div
        class="mt-3 d-flex justify-content-between p-2 w-100"
        style={{
          border: "2px solid #fec400",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <div>
          <b>
            {orderList[0] &&
              orderList[0].UserSelectproduct.selectedProduct.length}{" "}
            items /
            <span style={{ color: "red" }}>
              SubTotal {orderList[0] && orderList[0].UserSelectproduct.SubTotal}
            </span>
          </b>
        </div>
        <div>
          <Button
            onClick={() => orderDelete(ONumber)}
            style={{ backgroundColor: "red", color: "white" }}
            variant="outlined"
            color="error"
          >
            <b>Delete This Order</b>
          </Button>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-2">OR</div>
      <div
        class="mt-3 d-flex justify-content-between p-2 w-100"
        style={{
          border: "2px solid #fec400",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <span>
          If you need change <b>Size</b>,<b>Qty</b>,<b>Delivery Date</b> and{" "}
          <b>Delivery Time</b> or any <b>question</b>.Your also Contect us on{" "}
          <b>Facebook</b> and <b>whatsapp.</b>
        </span>
      </div>
    </div>
  );
}
