import React, { useEffect, useState } from "react";
import OrderList from "./OrderList";

export default function Order() {
  // for order details option
  const [orderdetailsOption, setOrderDetailsOption] = useState("All Order");

  const [order, setOrder] = useState([]);

  const [allOrder, setAllOrder] = useState([]);

  const [reload, setReload] = useState(1);

  const [_AllOrder, _setAllOrder] = useState([]);
  const [_pending, _setPending] = useState([]);
  const [_OnTheWay, _setOnTheWay] = useState([]);
  const [_orderComplete, _setOrderComplete] = useState([]);

  const [refreshTimeCount, setRefreshTimeCount] = useState(0);

  window.setTimeout(function () {
    setReload(reload + 1);
  }, 1000);

  // // button page refresh time
  // useEffect(() => {
  //   window.location.reload();
  // }, [reload === 3]);

  // find this user order
  useEffect(() => {
    fetch(`https://glacial-shore-36532.herokuapp.com/queenZoneAllOrder/`)
      .then((response) => response.json())
      .then((json) => {
        console.log("this is order : ", order);

        // order filtering
        if (orderdetailsOption === "All Order") {
          setOrder(json);
          console.log("this is all order json : ", json);
        } else {
          const allOrderFilter = json.filter(
            (or) => or.orderStatus === orderdetailsOption
          );
          setOrder(allOrderFilter);
          console.log("this is all allOrderFilter : ", allOrderFilter);
        }

        // array number

        _setAllOrder(json);
        const allOrderPendingFilter = json.filter(
          (or) => or.orderStatus === "Pending"
        );
        _setPending(allOrderPendingFilter);
        const allOrderOntheFilter = json.filter(
          (or) => or.orderStatus === "On The Way"
        );
        _setOnTheWay(allOrderOntheFilter);
        const allOrderComplFilter = json.filter(
          (or) => or.orderStatus === "Complete"
        );
        _setOrderComplete(allOrderComplFilter);
      });
  }, [reload]);

  // window.setTimeout(function () {
  //   setRefreshTimeCount(refreshTimeCount + 1);
  //  ;
  // }, 1000);

  // find this user order
  // useEffect(() => {

  // }, [reload]);

  return (
    <div>
      <div>
        <div className="  p-2 d-flex justify-content-between">
          <div>
            <span className="" style={{ fontSize: "24px", fontWeight: "bold" }}>
              Order Details
            </span>
          </div>{" "}
          <div class="d-flex flex-row-reverse">
            {/* <div>
              <div>
                <span className="" style={{ fontSize: "14px" }}>
                  Page Refresh Time ({refreshTimeCount}s / 1m)
                </span>
              </div>
              <div
                className="mt-1 d-flex justify-content-end"
                onClick={() => {
                  setReload(reload + 1);
                  setRefreshTimeCount(0);
                }}
              >
                <Stack direction="row" spacing={1}>
                  <Button
                    style={{ height: "30px", width: "200px" }}
                    variant="contained"
                    endIcon={<ReplayIcon />}
                  >
                    Reload
                  </Button>
                </Stack>
              </div>
            </div> */}

            <button
              style={{ backgroundColor: "red" }}
              class="btn btn-danger"
              type="button"
              disabled
            >
              <span style={{ paddingRight: "10px" }}>Live</span>

              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
        <div
          className="m-2 p-2"
          style={{
            border: "2px solid hwb(46deg 0% 0%)",
            borderRadius: "10px ",
          }}
        >
          <div className="p-2">
            <div
              class="d-flex justify-content-between"
              style={{ alignItems: "center" }}
            >
              <div class="d-flex justify-content-start">
                <div
                  onClick={() => setOrderDetailsOption("All Order")}
                  style={{
                    border: "1px solid black",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    margin: "0px 5px 0px 0px",
                    backgroundColor: `${
                      orderdetailsOption === "All Order" ? "black" : "white"
                    }`,
                    color: `${
                      orderdetailsOption === "All Order" ? " white" : " black"
                    }`,
                  }}
                >
                  <span>All Order : {_AllOrder.length}</span>
                </div>
                <div
                  onClick={() => setOrderDetailsOption("Pending")}
                  style={{
                    border: "1px solid hwb(46deg 0% 0%)",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    margin: "0px 5px ",
                    backgroundColor: `${
                      orderdetailsOption === "Pending"
                        ? " hwb(46deg 0% 0%)"
                        : "white"
                    }`,
                    color: `${
                      orderdetailsOption === "Pending"
                        ? " white"
                        : " hwb(46deg 0% 0%)"
                    }`,
                  }}
                >
                  <span>Order Pending : {_pending.length}</span>
                </div>
                <div
                  onClick={() => setOrderDetailsOption("On The Way")}
                  style={{
                    border: "1px solid #3300cf",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    margin: "0px 5px ",
                    backgroundColor: `${
                      orderdetailsOption === "On The Way" ? "#3300cf" : "white"
                    }`,
                    color: `${
                      orderdetailsOption === "On The Way"
                        ? " white"
                        : " #3300cf"
                    }`,
                  }}
                >
                  <span>Order On The Way : {_OnTheWay.length}</span>
                </div>
                <div
                  onClick={() => setOrderDetailsOption("Complete")}
                  style={{
                    border: "1px solid green",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    margin: "0px 5px ",
                    backgroundColor: `${
                      orderdetailsOption === "Complete" ? "green" : "white"
                    }`,
                    color: `${
                      orderdetailsOption === "Complete" ? " white" : "green"
                    }`,
                  }}
                >
                  <span>Order Complete : {_orderComplete.length}</span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    maxWidth: "100%",

                    display: "inline-flex",
                    padding: "13px",
                    alignItems: "center",

                    justifyContent: " center",
                    borderRadius: " 16px",
                    whiteSpace: " nowrap",
                    transition:
                      "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms",
                    cursor: "default",
                    outline: "0px",
                    textDecoration: "none",

                    verticalAlign: " middle",
                    boxSizing: "border-box",
                    marginLeft: "8px",
                    fontSize: " 0.625rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.04rem",
                    height: " 16px",
                    border: "1px solid rgba(23, 141, 70, 0.5)",
                    backgroundColor: " #7bffb0d9",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      padding: "8px 10px",
                      color: "#138741",
                    }}
                  >
                    new : 23
                  </span>
                </div>
              </div>
            </div>
          </div>
          {order
            .sort((a, b) =>
              b.UserCurrentDateAndTime.localeCompare(a.UserCurrentDateAndTime)
            )
            .map((or) => (
              <OrderList
                orderdetailsOption={orderdetailsOption}
                setOrderDetailsOption={setOrderDetailsOption}
                or={or}
              ></OrderList>
            ))}
        </div>
      </div>
    </div>
  );
}
