import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./Order.css";

export default function OrderList({ or }) {
  // console.log("this is single order page : ", or);

  let userCarentTime = or.UserCurrentDateAndTime;

  const [editDate, setEditDate] = useState([userCarentTime]);
  const [editTime, setEditTime] = useState([userCarentTime]);

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
                      style={{
                        color: "white",
                        backgroundColor: "hwb(46deg 0% 0%)",
                        borderRadius: "5px",
                      }}
                    >
                      <b>Pending</b>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row ">
              <div className="col">
                <div>
                  <span>
                    <b>#38937429385</b>
                  </span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>385 SAR</b>
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
                    <b>2022-04-17</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>3:30 PM</b>
                  </span>
                </div>
              </div>
              <div className="col">
                <div></div>
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
                    <b>{or.UserAddress}</b>
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
                      {or.UserIp.data.ip}
                    </div>
                    <div className="col">{or.UserIp.data.country}</div>
                    <div className="col">{or.UserIp.data.region}</div>
                    <div className="col" style={{ color: "red" }}>
                      {or.UserIp.data.latitude}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">User IP Version</div>
                    <div className="col">User Current Date</div>
                    <div className="col">User Current Time</div>

                    <div className="col">Longitude</div>
                  </div>
                  <div className="row">
                    <div className="col">{or.UserIp.data.version}</div>
                    <div className="col">{editDate[0]}</div>
                    <div className="col">{editTime[1]}</div>

                    <div className="col" style={{ color: "red" }}>
                      {or.UserIp.data.longitude}
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
                      <Typography>Show Details</Typography>
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
                                <div className="col-4 ">
                                  <b>Product Name</b>
                                </div>
                                <div className="col-4">
                                  <b>Product Category</b>
                                </div>

                                <div className="col-2">
                                  <b>Product Price</b>
                                </div>
                                <div className="col-2">
                                  <b>Product Offer</b>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-4">{pd[0].ProductName}</div>
                                <div className="col-4">
                                  {pd[0].ProductCategory}
                                </div>
                                <div className="col-2">
                                  {pd[0].ProductPrice}
                                </div>
                                <div className="col-2">
                                  {pd[0].ProductOffer}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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
