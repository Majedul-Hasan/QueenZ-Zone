import React, { useEffect, useState } from "react";
import OrderList from "./OrderList";

export default function Order() {
  const [order, setOrder] = useState([]);

  const [reload, setReload] = useState(1);

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
        setOrder(json);
        console.log("this is order : ", order);
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
          {order
            .sort((a, b) =>
              b.UserCurrentDateAndTime.localeCompare(a.UserCurrentDateAndTime)
            )
            .map((or) => (
              <OrderList or={or}></OrderList>
            ))}
        </div>
      </div>
    </div>
  );
}
