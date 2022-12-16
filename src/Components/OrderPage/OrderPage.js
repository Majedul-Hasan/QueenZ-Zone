import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserInfoContext } from "../../App";
import EmptyCard from "../../Asset/undraw_empty_cart_co35.svg";
import OrderImage from "./OrderImage";
import StepperView from "./StepperView";

export default function OrderPage() {
  let history = useHistory();
  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  // order
  const [orderList, setOrderList] = useState([]);
  // order
  const [allOrder, setAllOrder] = useState([]);
  let count = 0;

  let [subprice, setsubprice] = useState();

  // // useEfect for read order info
  useEffect(() => {
    fetch(
      `https://queenzzoneserver-production.up.railway.app/queenZoneOrderFind/${loggingUserInfo.email}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(
          "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
          json[0].UserSelectproduct.selectedProduct
        );

        setAllOrder(json);

        const forder = json.filter((or) => or.orderStatus !== "Complete");
        setOrderList(forder);

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
  console.log(
    "this is user orderList :",
    !orderList.length === false && orderList
  );

  const [orderFilterOption, setOrderFilterOption] = useState("Pending Order");

  useEffect(() => {
    if (orderFilterOption === "Pending Order") {
      const forder = allOrder.filter((or) => or.orderStatus !== "Complete");
      setOrderList(forder);
      console.log("this is ffffffff not com ", forder);
    } else {
      const forder = allOrder.filter((or) => or.orderStatus === "Complete");

      console.log("this is ffffffff com ", forder);

      setOrderList(forder);
    }
  }, [orderFilterOption]);

  return (
    <OrderPageBack className="mb-5 pb-5 container">
      <div
        class="p-2 d-flex justify-content-center"
        style={{ fontSize: "22px", color: "red" }}
      >
        MY ORDER
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <div
            onClick={() => setOrderFilterOption("Pending Order")}
            className="p-2"
            style={{
              backgroundColor: `${
                orderFilterOption === "Pending Order" ? "#fec400" : "white"
              }`,
              borderRadius: "5px 0px 0px 5px",
              border: "1px solid #fec400",
              cursor: "pointer",
            }}
          >
            <span>Pending Order</span>
          </div>
          <div
            className="p-2"
            onClick={() => setOrderFilterOption("Order Complete")}
            style={{
              backgroundColor: `${
                orderFilterOption === "Order Complete" ? "#fec400" : "white"
              }`,
              border: "1px solid #fec400",
              borderRadius: "0px 5px 5px 0px",
              cursor: "pointer",
            }}
          >
            <span>Order Complete</span>
          </div>
        </div>
      </div>
      <div className="row">
        {orderList.length === 0 ? (
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div class="d-flex justify-content-center">
              <div>You have placed no order</div>
            </div>

            <div class="mt-5 pt-5 d-flex justify-content-center">
              <img style={{ width: "245px" }} src={EmptyCard} alt="" />
            </div>
          </div>
        ) : (
          orderList
            .sort((a, b) =>
              b.UserCurrentDateAndTime.localeCompare(a.UserCurrentDateAndTime)
            )
            .map((or) => (
              <div className="col-sm-12 col-md-6 col-lg-4">
                {console.log("this is order list ::::: -> ", or)}
                <div class=" p-2 d-flex justify-content-center ">
                  <div
                    className="p-2 w-100"
                    style={{
                      border: "2px solid #fec400",
                      borderRadius: "10px",
                      boxShadow: "0 5px 45px -10px rgb(0 0 0 / 25%)",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #fec400",
                        borderRadius: "5px",
                        alignItems: "center",
                      }}
                    >
                      <div className="p-2 ">
                        <div>
                          {" "}
                          Order Number : <b>{or._id}</b>
                        </div>
                        <div
                          className="p-2"
                          style={{
                            display: "none",
                            backgroundColor: "#fec400",
                            borderRadius: "5px",
                            color: "white",
                            fontWeight: "600",
                            // display: "flex",
                            alignItems: "center",
                          }}
                        >
                          On The Way
                        </div>
                      </div>
                      <StepperView
                        orderFilterOption={orderFilterOption}
                        or={or}
                      ></StepperView>
                      <div className="p-2 d-flex justify-content-between">
                        <div> Delivery Date</div>
                        <div className="" style={{}}>
                          Delivery Time
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
                      <div
                        className="p-2 w-100"
                        // style={{ border: "2px solid #fec400", borderRadius: "5px" }}
                      >
                        <div class="d-flex justify-content-between">
                          <div>
                            {" "}
                            <b>Total :</b>{" "}
                          </div>

                          <div>
                            SAR{" "}
                            {!orderList.length === false &&
                              orderList[0].UserSelectproduct.SubTotal}
                          </div>
                        </div>
                        <div class="d-flex justify-content-between">
                          <div>
                            <b>Delivery fee :</b>{" "}
                          </div>

                          <div style={{ textAlign: "right" }}>
                            <span>
                              Delivery fee will be determined by negotiation
                            </span>
                          </div>
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

                          <div>
                            SAR{" "}
                            {!orderList.length === false &&
                              orderList[0].UserSelectproduct.SubTotal}
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span>
                            <b>Cash On Delivery</b>{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        {or.UserSelectproduct.selectedProduct.map((dt) => (
                          <OrderImage
                            or={or}
                            loggingUserInfo={loggingUserInfo}
                            dt={dt}
                          >
                            {" "}
                          </OrderImage>
                        ))}
                      </div>
                      <div></div>
                    </div>

                    <div className="mt-2 " style={{ display: "none" }}>
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
                            <FontAwesomeIcon
                              className="carAni"
                              icon={faTruck}
                            />
                          </span>

                          <span style={{ marginLeft: "20px" }}>
                            Cash On Delivery
                          </span>
                        </div>
                      </div>
                    </div>

                    {or.orderStatus === "Pending" ? (
                      <div class="mt-2 d-flex justify-content-between">
                        {console.log(
                          "this is middle : ",
                          orderList[0].orderStatus
                        )}
                        <Button
                          onClick={() =>
                            history.push(`/Edit/EditMyOrder/${or._id}`)
                          }
                          style={{ backgroundColor: "#fec400", color: "white" }}
                          variant=""
                        >
                          Edit My Order
                        </Button>
                      </div>
                    ) : (
                      <div class="mt-2 ">
                        {console.log("this is middle : ", or.orderStatus)}
                        {or.orderStatus !== "Complete" && (
                          <Button variant="contained" disabled>
                            Edit My Order
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </OrderPageBack>
  );
}

const OrderPageBack = styled.div`
  .carousel .slide img {
    border-radius: 10px;
  }
`;
