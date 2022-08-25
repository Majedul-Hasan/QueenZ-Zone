import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import "./Order.css";

// English.
import { Button } from "@mui/material";
import en from "javascript-time-ago/locale/en";
const now = new Date();

TimeAgo.addDefaultLocale(en);

export default function OrderList({ or }) {
  //console.log("this is single order page : ", or);

  const timeAgo = new TimeAgo("en-US");

  let userCarentTime = or.UserCurrentDateAndTime;

  const [editDate, setEditDate] = useState([userCarentTime]);
  const [editTime, setEditTime] = useState([userCarentTime]);

  //console.log(or);

  // if (!or.length === true) {
  //   userCarentTime = userCarentTime.split("T");
  //   console.log("this is edit time : ", userCarentTime);
  // }

  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    setTimeout(function () {
      setEditDate(editDate[0].split("T"));
      setEditTime(editTime[0].split("T"));
    }, 2000);
  }, []);

  return (
    <div className="">
      {" "}
      <div>
        <div
          className="m-1 p-2 hoverEffect"
          style={{
            border: "2px solid hwb(46deg 0% 0%)",
            borderRadius: "5px ",
          }}
        >
          {/* <div class="d-flex justify-content-between">
            <div>
              <span>
                Order Number : <b>#38937429385</b>
              </span>
            </div>
            <div>
              <span>
                Sub Total : <b>385 SAR</b>
              </span>
            </div>
            <div>
              <span>
                Delivery Date : <b>2022-04-17</b>
              </span>
            </div>
            <div>
              <span>
                Delivery Time : <b>3:30 PM</b>
              </span>
            </div>
            <div>
              <span>
                Status :{" "}
                <span
                  className="p-1"
                  style={{
                    color: "white",
                    backgroundColor: "hwb(46deg 0% 0%)",
                    borderRadius: "5px",
                  }}
                >
                  <b>Panding</b>
                </span>
              </span>
            </div>
          </div> */}
          <div>
            <div className="row ">
              <div className="col">
                <div>
                  <span>Order Number :</span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>Sub Total :</span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Product List : </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Delivery Date :</span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Delivery Time :</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>
                    Status :{" "}
                    <span
                      className="p-1"
                      // style={{
                      //   color: "white",
                      //   backgroundColor: "hwb(46deg 0% 0%)",
                      //   borderRadius: "5px",
                      // }}
                    ></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row ">
              <div className="col">
                <div>
                  <span style={{ fontSize: "12px" }}>
                    <b>{or._id}</b>
                  </span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserSelectproduct.SubTotal}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserSelectproduct.selectedProduct.length}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{editDate[0]}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserExpectedDeliveryTime}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                <div> Pending</div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="row ">
              <div className="col">
                <div>
                  <span>Name :</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>Email :</span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Phone Number 1 :</span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>Phone Number 2 :</span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>Address :</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>User House Number :</span>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <div>
                  <span>
                    <b>{or.UserName}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>
                    <b>{or.UserEmail}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserPhoneNumber_1}</b>
                  </span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserPhoneNumber_2}</b>
                  </span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserAddress ? or.UserAddress : "null"}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>
                    <b>{or.UserHouseNumber}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="p-2"
              style={{
                marginTop: "10px",
                border: "2px solid red",
                borderRadius: "5px ",
              }}
            >
              <div>
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    User Secret Info{" "}
                    <span style={{ fontSize: "10px", color: "gray" }}>
                      ( sometimes this information not correct )
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    height: "2px",

                    width: "387px",
                    backgroundColor: "#ff0c0c6b",
                  }}
                ></div>
                <div>
                  <div className="row">
                    <div className="col">User IP</div>
                    <div className="col">Country Code</div>
                    <div className="col">City</div>
                    <div className="col">Latitude</div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ fontSize: "13px" }}>
                      {or.UserIp ? or.UserIp.data.ip : "null"}
                    </div>
                    <div className="col">{or.UserIp.data.country}</div>
                    <div className="col">{or.UserIp.data.region}</div>
                    <div className="col" style={{ color: "red" }}>
                      {or.UserIp ? or.UserIp.data.latitude : "null"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">User IP Version</div>
                    <div className="col">User Current Date</div>
                    <div className="col">User Current Time</div>

                    <div className="col">Longitude</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      {or.UserIp ? or.UserIp.data.version : "null"}
                    </div>
                    <div className="col">{editDate[0]}</div>
                    <div className="col">
                      {new Date(or.UserCurrentDateAndTime).getHours() +
                        ":" +
                        new Date(or.UserCurrentDateAndTime).getMinutes() +
                        ":" +
                        new Date(or.UserCurrentDateAndTime).getSeconds()}
                      {`  (${timeAgo.format(
                        new Date(or.UserCurrentDateAndTime)
                      )})`}
                    </div>

                    <div className="col" style={{ color: "red" }}>
                      {or.UserIp ? or.UserIp.data.longitude : "null"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="p-2"
              style={{
                marginTop: "10px",
                border: "2px solid #fec400",
                borderRadius: "5px ",
              }}
            >
              <div>
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Order Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        {or.UserSelectproduct.selectedProduct.map((pd) => (
                          <div className=" p-1 row">
                            <div className="col-2">
                              <img
                                style={{ width: "170px", borderRadius: "5px" }}
                                src={pd[1][0]}
                                alt=""
                              />
                            </div>
                            <div className="col-10">
                              <div className="row">
                                <div className="col-2">
                                  <b>Product Name</b>
                                </div>
                                {pd[0].isSizeShow && (
                                  <div className="col-2">
                                    <b>Product's Size</b>
                                  </div>
                                )}{" "}
                                <div className="col-2">
                                  <b>Product Category</b>
                                </div>
                                <div className="col-2">
                                  <b>Product Price</b>
                                </div>
                                <div className="col-2">
                                  <b>Product Offer</b>
                                </div>
                                <div className="col-1">
                                  <b>Qty</b>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">{pd[0].ProductName}</div>
                                {pd[0].isSizeShow && (
                                  <div className="col-2">{pd[0].pSize}</div>
                                )}
                                <div className="col-2">
                                  {pd[0].ProductCategory}
                                </div>
                                <div className="col-2">
                                  {pd[0].ProductPrice}
                                </div>
                                <div className="col-2">
                                  {pd[0].ProductOffer}
                                </div>
                                <div className="col-1">
                                  {pd[0].qty ? pd[0].qty : 1}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ backgroundColor: "#ffde4d" }}
                    className="mt-2"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>State Change</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <div className="row">
                          <div className="col-6">
                            <div
                              class="px-4 d-flex "
                              style={{ alignItems: "center" }}
                            >
                              <div>
                                <span style={{ fontSize: "18px" }}>
                                  <b> State :</b>{" "}
                                </span>
                              </div>
                              <div className="px-3">
                                <select
                                  style={{ fontSize: "15px" }}
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>
                                    Open this select menu
                                  </option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div>
                                <Button
                                  style={{
                                    backgroundColor: "#fec400",
                                    color: "black",
                                  }}
                                  variant="contained"
                                >
                                  Contained
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="col-1">
                            <div style={{ height: "42px" }} class="vr"></div>
                          </div>

                          <div className="col-5">
                            <div
                              class="d-flex justify-content-around"
                              style={{ alignItems: "center" }}
                            >
                              <div>
                                <span>
                                  <b style={{ color: "red" }}>
                                    Cancel The Order
                                  </b>
                                </span>
                              </div>
                              <div>
                                <Button
                                  className="px-5"
                                  variant="contained"
                                  color="error"
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
