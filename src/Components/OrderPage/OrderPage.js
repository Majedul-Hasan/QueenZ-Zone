import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory } from "react-router-dom";
import { UserInfoContext } from "../../App";
import EmptyCard from "../../Asset/undraw_empty_cart_co35.svg";
import OrderImage from "./OrderImage";

export default function OrderPage() {
  let history = useHistory();
  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  // order
  const [orderList, setOrderList] = useState([]);
  let count = 0;

  let [subprice, setsubprice] = useState();

  // // useEfect for read order info
  useEffect(() => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneOrderFind/${loggingUserInfo.email}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(
          "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
          json[0].UserSelectproduct.selectedProduct
        );
        setOrderList(json);

        // for price
        // json[0].UserSelectproduct.selectedProduct.map((pc) =>
        //   console.log(
        //     "hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ::::::::",
        //     pc[0].ProductOffer === "null"
        //       ? pc[0].ProductOffer
        //       : pc[0].ProductPrice
        //   )
        // );

        for (
          let i = 0;
          i < json[0].UserSelectproduct.selectedProduct.length;
          i++
        ) {
          count =
            count +
            parseInt(
              json[0].UserSelectproduct.selectedProduct[i][0].ProductPrice
            );

          console.log(
            "this is loop : ",
            json[0].UserSelectproduct.selectedProduct[i][0].ProductOffer
          );
        }

        console.log("this sub total :::::: ", count);
        setsubprice(count);
      });
  }, []);

  // // useEfect for read order info
  useEffect(() => {
    if (orderList.length) {
      console.log(
        "this is order list : ",
        orderList[0].UserSelectproduct.selectedProduct
      );

      orderList[0].UserSelectproduct.selectedProduct.map((pri) =>
        console.log("this is order list map :", pri[0].ProductPrice)
      );
    }
  }, [orderList]);

  // // // useEfect for read order info
  // useEffect(() => {
  //   for (let index = 0; index < orderList; index++) {
  //     console.log("this is loop");
  //   }
  // }, [orderList]);

  console.log("this is user info :", loggingUserInfo.email);

  return (
    <div className="mb-5 pb-5">
      <div
        class="p-2 d-flex justify-content-center"
        style={{ fontSize: "22px", color: "red" }}
      >
        MY ORDER
      </div>
      <div>
        {orderList.length === 0 ? (
          <div>
            <div class="d-flex justify-content-center">
              <div>You have placed no order</div>
            </div>

            <div class="mt-5 pt-5 d-flex justify-content-center">
              <img style={{ width: "245px" }} src={EmptyCard} alt="" />
            </div>
          </div>
        ) : (
          orderList.map((or) => (
            <div class="p-2 d-flex justify-content-center">
              <div
                className="p-2 w-100"
                style={{ border: "2px solid #fec400", borderRadius: "10px" }}
              >
                <div
                  style={{
                    border: "1px solid #fec400",
                    borderRadius: "5px",
                    alignItems: "center",
                  }}
                >
                  <div className="p-2 d-flex justify-content-between">
                    <div>
                      {" "}
                      Order Number : <b>{or._id}</b>
                    </div>
                    <div
                      className="p-2"
                      style={{
                        backgroundColor: "#fec400",
                        borderRadius: "5px",
                        color: "white",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Pending
                    </div>
                  </div>
                  <div className="p-2 d-flex justify-content-between">
                    <div> Delivery Date</div>
                    <div className="" style={{}}>
                      DeliveryTime
                    </div>
                  </div>
                  <div
                    style={{ marginTop: "-18px" }}
                    className="p-2 d-flex justify-content-between"
                  >
                    <div>2022-04-17</div>
                    <div className="" style={{}}>
                      3:30 PM
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    {or.UserSelectproduct.selectedProduct.map((dt) => (
                      <OrderImage dt={dt}> </OrderImage>
                    ))}
                  </div>
                </div>
                <div
                  className="p-2 w-100"
                  style={{ border: "2px solid #fec400", borderRadius: "5px" }}
                >
                  <div class="d-flex justify-content-between">
                    <div>Total : </div>

                    <div>{subprice}</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>Delivery fee : </div>

                    <div>20</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div></div>

                    <div>----------------------------</div>
                  </div>
                  <div
                    style={{ color: "red", fontWeight: "600" }}
                    class="d-flex justify-content-between"
                  >
                    <div>SubTotal</div>

                    <div>SAR {subprice + 20}</div>
                  </div>
                </div>
                <div className="mt-2 ">
                  <div
                    className="p-2"
                    style={{
                      backgroundColor: "#F4ECB6",
                      borderRadius: "5px",
                      alignItems: "center",
                      boxShadow: "rgb(213 205 149) 0px 3px 7px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        fontSize: "20px",
                        color: "#686868",
                      }}
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon className="carAni" icon={faTruck} />
                      </span>

                      <span style={{ marginLeft: "20px" }}>
                        Cash On Delivery
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mt-2 d-flex justify-content-between">
                  <Button
                    onClick={() => history.push(`/Edit/EditMyOrder/${or._id}`)}
                    style={{ backgroundColor: "#fec400", color: "white" }}
                    variant=""
                  >
                    Edit My Order
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
