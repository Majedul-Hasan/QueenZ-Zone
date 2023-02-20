import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./AnimationStyle.css";
import "./ShoppingCardPage";

export default function ProductCard({
  removeItem,
  editProductQty,
  setEditProductQty,
  dt,
  proQtyNumberCheck,
  errorproductSize,
  setproductSize,
  productSizeGlo,
}) {
  let history = useHistory();
  console.log("this is dt : ", dt);
  console.log("this is dt[0].ProductPrice : ", dt[0].ProductPrice);

  const PnameDemo =
    "Skyland Fitness 2 in 1 Treadmill Machine Walking Pad & Running Pad with Remote Control and Bluetooth Speaker -Motor =2.25 HP-4 HP peak-EM-1282(Gray,Blue,Black)";

  if (errorproductSize != undefined) {
    console.log("tttt : ", errorproductSize[0] === dt);
  }

  const [animationShow, setanimationShow] = useState("show");

  const [animationProps, setanimationProps] = useState();

  const removeAnimation = (props) => {
    console.log("this is remove animation");
    setanimationShow("tra");
    setanimationProps(props);
    setTimeout(() => {
      console.log("this is remove setInterval");
      setanimationShow("none");
    }, 1000);
  };

  const [selected, setSelected] = useState([]);

  const options = [
    { label: "XS (extra small)", value: "XS" },
    { label: "XSSMLXLXXL (small)", value: "S" },
    { label: "M (medium)", value: "M" },
    { label: "L (large)", value: "L" },
    { label: "XL (extra large)", value: "XL" },
    { label: "XXL (extra extra large)", value: "XXL" },
  ];

  const [qty, setQty] = useState(dt[0].qty === undefined ? 1 : dt[0].qty);

  const [pSize, setPsize] = useState();

  console.log("this is sizee::;,", pSize);

  useEffect(() => {
    if (selected.length > 0) {
      setPsize(selected.length);
    } else {
      setPsize(1);
    }
  }, [selected]);

  const [pricePro, setPricePro] = useState();

  useEffect(() => {
    setPricePro(pricePro * qty);
  }, [qty]);

  const [localPsize, setLocalPsize] = useState(
    dt[0].pSize !== undefined && dt[0].pSize
  );

  const ProductSize = (props) => {
    console.log("this is product size : ", props);
    setproductSize(dt, (dt[0].pSize = props));
  };

  const changeQty = (props) => {
    console.log("this is qty ", props, (dt[0].qty = props));
    setQty(props);

    // setEditProductQty(dt, (dt[0].qty = props));
    proQtyNumberCheck(dt, (dt[0].qty = props));
  };

  return (
    <Porductcardback
      className={animationShow === "tra" && "mystyle"}
      style={{
        transition: "2s",
      }}
    >
      {/* old start */}
      <div className="row" style={{ display: "none" }}>
        <div className="col-sm-3 col-md-3 col-lg-3">
          <div
            className=" mt-2 p-2  d-flex container row"
            style={{
              border: "3px solid #fec400",
              borderRadius: "10px",
              // opacity: `${animationShow === "tra" && "0.5"}`,
              // transition: "0.5s",
            }}
          >
            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="">
                <Carousel
                  showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                >
                  {dt[1].map((dt) => (
                    <div>
                      <img src={dt} alt="pro" />
                    </div>
                  ))}
                </Carousel>
                <div class="d-flex justify-content-around">
                  <div
                    style={{ marginTop: "-25px" }}
                    className="d-flex justify-content-center"
                  >
                    <button
                      onClick={() => {
                        removeItem(dt);
                        removeAnimation(dt);
                      }}
                      type="button"
                      class="btn  btn-danger m-1"
                    >
                      Remove
                    </button>
                  </div>

                  <div
                    style={{ marginTop: "-25px" }}
                    className="d-flex justify-content-center"
                  >
                    <button
                      onClick={() => {
                        history.push(
                          `/Category/${dt[0].ProductCategory}/${dt[0].ProductName}/${dt[0]._id}`
                        );
                      }}
                      type="button"
                      class="btn btn-warning m-1"
                    >
                      View
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div
              className="col-sm-4 col-lg-4 col-md-4 d-flex flex-row bd-highlight"
              style={{}}
            >
              <div className="pt-1 p-2">
                <div style={{ fontSize: "18px", fontWeight: "600" }}>
                  {dt[0].ProductName}
                </div>
                <div className="pt-2 ">
                  <span>
                    {" "}
                    <strong>SAR </strong>
                  </span>
                  <span
                    className=""
                    style={{
                      fontSize: "22px",
                      fontFamily: "Poppins",
                      color: "red",
                    }}
                  >
                    {" "}
                    <strong>{dt[0].ProductPrice}</strong>
                  </span>
                  <div
                    style={{
                      fontSize: "15px",
                      paddingLeft: "4px",
                      fontFamily: "Poppins",
                      display: `${
                        dt[0].ProductOffer != "null" ? "inline-block" : "none"
                      }`,
                    }}
                  >
                    <strong>
                      <s>SAR</s>
                    </strong>
                    <span
                      className=""
                      style={{
                        fontSize: "15px",
                        fontFamily: "Poppins",
                        color: "red",
                      }}
                    >
                      {" "}
                      <strong>
                        <s>{dt[0].ProductOffer}</s>
                      </strong>
                    </span>
                  </div>
                </div>
                {/* <div className="mt-3 d-flex justify-content-start">
              <div>
                <h6>Color : </h6>
              </div>
              <div
                style={{
                  height: "20px",
                  width: "50px",
                  backgroundColor: `${dt[0].color}`,

                  marginLeft: "15px",
                  borderRadius: "5px",
                }}
              ></div>
            </div> */}
                <div className="mt-3 ">
                  <div>
                    <h6>Qty : </h6>
                  </div>
                  <div class="d-flex justify-content-center">
                    <QuantityPicker
                      onChange={(value) => {
                        // here value is the final update value of the component
                        changeQty(value);
                        console.log(value);
                        setQty(value);
                      }}
                      value={dt[0].qty === undefined ? 1 : dt[0].qty}
                      min={1}
                      max={15}
                      smooth
                    />
                  </div>
                </div>
                {/* <div className="mt-2">
              <div>
                <h6> Select Size :</h6>
              </div>

              {selected.map((dt) => (
                <span
                  className="p-2 m-1"
                  style={{
                    backgroundColor: "#fec400",
                    fontSize: "14px",
                    fontWeight: "bold",
                    borderRadius: "3px",
                  }}
                >
                  {dt.value}
                </span>
              ))}
              <MultiSelect
                options={options}
                className="mt-3"
                value={selected}
                onChange={setSelected}
                labelledBy="Select Size"
              />
            </div> */}
                <div
                  className="mt-3"
                  style={{
                    display: `${dt[0].isSizeShow === true ? "block" : "none"}`,
                  }}
                >
                  <select
                    value={dt[0].pSize !== undefined && dt[0].pSize}
                    onChange={(e) => ProductSize(e.target.value)}
                    class="form-select"
                    aria-label="Default select example"
                    style={{
                      backgroundColor: "#fff",
                      color: "#362121",
                      boxShadow: "0 5px 45px -10px rgb(0 0 0 / 25%)",
                      border: "none",
                      boxSizing: "border-box",
                      fontWeight: "lighter",
                    }}
                  >
                    <option selected>Select Size</option>
                    {dt[0].productSize !== false &&
                      dt[0].productSize.map((sz) => (
                        <option value={sz}>{sz}</option>
                      ))}
                  </select>
                </div>

                <div>
                  <div class="mt-2 d-flex justify-content-between">
                    <div>Product Price</div>
                    <div>{dt[0].ProductPrice}</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>Quantity</div>
                    <div>{dt[0].qty}</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div></div>
                    <div>--------------</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div className="">
                    {" "}
                    <strong>Total : </strong>{" "}
                  </div>
                  <div className="">
                    <span
                      style={{
                        fontSize: "21px",
                        fontFamily: "Poppins",
                        color: "red",
                        paddingLeft: "5px",
                      }}
                    >
                      <strong>{dt[0].ProductPrice * qty}</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          commodi quisquam repellat in, harum at, dolor vel modi dolores quasi
          quae provident et dolorem praesentium suscipit consequatur. Officiis
          veniam error iure explicabo voluptatum ducimus facilis soluta cumque
          id ratione autem odio sequi temporibus asperiores, eos veritatis
          commodi repellat in, vel mollitia! Tenetur voluptate mollitia ad
          officiis esse deleniti quibusdam debitis, praesentium magnam quis
          iusto obcaecati. Quisquam quibusdam iusto voluptatum adipisci autem,
          atque ratione laborum id odit ab veniam. Sapiente vero voluptatibus
          dicta, consequuntur necessitatibus rem deleniti quod fugit officia
          quos tempore incidunt iusto possimus magnam dolor ab neque dolores
          autem.
        </div>
      </div>
      {/* old end */}
      <div class="">
        <div class="row">
          <div class="col-5">
            <Carousel showThumbs={false} showArrows={false} showStatus={false}>
              {dt[1].map((dt) => (
                <div>
                  <img src={dt} alt="pro" />
                </div>
              ))}
            </Carousel>
          </div>

          <div class="col-7">
            <div>
              <div
                className="proName"
                onClick={() => {
                  history.push(
                    `/Category/${dt[0].ProductCategory}/${dt[0].ProductName}/${dt[0]._id}`
                  );
                }}
              >
                <span>{PnameDemo.substring(0, 50) + "..."}</span>
              </div>

              <div className="proSizeNew">
                <div
                  className="mt-3"
                  style={{
                    display: `${dt[0].isSizeShow === true ? "block" : "none"}`,
                  }}
                >
                  <select
                    onChange={(e) => {
                      setLocalPsize(e.target.value);
                      setproductSize(dt, (dt[0].pSize = e.target.value));
                    }}
                    // value={dt[0].pSize !== undefined && dt[0].pSize}
                    value={localPsize}
                    class="form-select"
                    aria-label="Default select example"
                    style={{
                      backgroundColor: "#fff",
                      color: "#362121",
                      boxShadow: "0 5px 45px -10px rgb(0 0 0 / 25%)",
                      border: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <option selected>Select Size</option>
                    {dt[0].productSize !== false &&
                      dt[0].productSize.map((sz) => (
                        <option value={sz}>{sz}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="proPrice">
                <div>
                  <div
                    className="pt-1"
                    style={{
                      fontSize: "13px",
                      fontFamily: "Poppins",
                      display: "inline-block",
                    }}
                  >
                    <span>SAR </span>
                    <span
                      className=""
                      style={{
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        color: "red",
                      }}
                    >
                      {" "}
                      <strong>{dt[0].ProductPrice}</strong>
                    </span>
                  </div>
                  <s>
                    <div
                      style={{
                        fontSize: "10px",
                        fontFamily: "Poppins",
                        paddingLeft: "5px",
                        display: `${
                          dt[0].ProductOffer != "null" ? "inline-block" : "none"
                        }`,
                      }}
                    >
                      <strong>SAR</strong>
                      <span
                        className=""
                        style={{
                          fontSize: "10px",
                          fontFamily: "Poppins",
                          color: "red",
                        }}
                      >
                        {" "}
                        <strong>
                          <s>{dt[0].ProductOffer}</s>
                        </strong>
                      </span>
                    </div>
                  </s>
                </div>
              </div>
              <div className="cod">
                {" "}
                <span style={{ color: "gray", fontSize: "15px" }}>
                  Cash On Delivery
                </span>{" "}
              </div>
              <div className="stockThisProduct " style={{ color: "#0d7d0d" }}>
                <span>In Stock </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row d-flex mt-1"
          style={{
            alignItems: "center",
          }}
        >
          <div className="col-5">
            <div className="d-flex justify-content-between ">
              <div>
                {" "}
                {parseInt(dt[0].qty === undefined ? 1 : dt[0].qty) === 1 ? (
                  <Button
                    onClick={() => {
                      removeItem(dt);
                      removeAnimation(dt);
                    }}
                    className="qtyBtn qtyBtnleft"
                    variant="contained"
                    size="small"
                  >
                    <DeleteIcon className="SvgIcon"></DeleteIcon>
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      changeQty(dt[0].qty === undefined ? 1 : dt[0].qty - 1)
                    }
                    className="qtyBtn qtyBtnleft"
                    variant="contained"
                    size="small"
                  >
                    <RemoveIcon className="SvgIcon"></RemoveIcon>
                  </Button>
                )}
              </div>
              <div className="qtyNumber">
                <span>{dt[0].qty === undefined ? 1 : dt[0].qty}</span>
              </div>
              <div>
                {" "}
                <Button
                  onClick={() =>
                    changeQty(dt[0].qty === undefined ? 1 + 1 : dt[0].qty + 1)
                  }
                  className="qtyBtn qtyBtnright"
                  variant="contained"
                  size="small"
                >
                  <AddIcon className="SvgIcon"></AddIcon>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="d-flex">
              <div>
                <Button
                  onClick={() => {
                    history.push(
                      `/Category/${dt[0].ProductCategory}/${dt[0].ProductName}/${dt[0]._id}`
                    );
                  }}
                  variant="contained"
                  size="small"
                  style={{
                    backgroundColor: "#fec400",
                    borderRadius: "5px",
                    padding: "4px 20px",
                    boxShadow: "none",
                    color: "black",
                    fontSize: "14px",
                  }}
                >
                  visit
                </Button>
              </div>
              <div className="mx-2">
                {" "}
                <Button
                  variant="contained"
                  size="small"
                  style={{
                    backgroundColor: "#fec400",
                    borderRadius: "5px",
                    padding: "6.5px 20px",
                    boxShadow: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Porductcardback>
  );
}

const Porductcardback = styled.div`
  .carousel .slide img {
    border-radius: 10px;
  }
  .qtyBtn {
    padding: 0px;
    min-width: 50px;
    background-color: #eaecef;
    color: black;
    padding: 5px;

    box-shadow: rgb(50 50 93 / 0%) -1px 7px 9px 0px inset,
      rgb(0 0 0 / 5%) 0px 18px 19px 0px inset;
  }
  .fSXQda .css-11qr2p8-MuiButtonBase-root-MuiButton-root:hover {
    background-color: #b1b1b1;
  }
  .css-11qr2p8-MuiButtonBase-root-MuiButton-root:hover {
    background-color: #b1b1b1;
  }
  .qtyBtn .SvgIcon {
    font-size: 21px;
  }
  .qtyBtnleft {
    border-radius: 5px 0px 0px 5px;
  }
  .qtyBtnright {
    border-radius: 0px 5px 5px 0px;
  }
  .qtyNumber {
    background-color: #f7f9fa;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .heart-with-gradient {
    width: 50px;
    display: inline-block;
    -webkit-mask: radial-gradient(circle at 60% 65%, red 64%, transparent 65%)
        top left,
      radial-gradient(circle at 40% 65%, red 64%, transparent 65%) top right,
      linear-gradient(to bottom left, red 43%, transparent 43%) bottom left,
      linear-gradient(to bottom right, red 43%, transparent 43%) bottom right;
    -webkit-mask-size: 50% 50%;
    -webkit-mask-repeat: no-repeat;
    mask: radial-gradient(circle at 60% 65%, red 64%, transparent 65%) top left,
      radial-gradient(circle at 40% 65%, red 64%, transparent 65%) top right,
      linear-gradient(to bottom left, red 43%, transparent 43%) bottom left,
      linear-gradient(to bottom right, red 43%, transparent 43%) bottom right;
    mask-size: 50% 50%;
    mask-repeat: no-repeat;
    background: linear-gradient(red, blue);
  }

  .heart-with-gradient::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;
