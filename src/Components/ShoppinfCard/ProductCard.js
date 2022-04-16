import React, { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
}) {
  console.log("ttttttttttttttttttttttttttttttttttttttt", dt);

  if (errorproductSize != undefined) {
    console.log(
      "ttttttttttttttttttttttttttttttttttttttt",
      errorproductSize[0] === dt
    );
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
    }, 500);
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
    <div
      className={animationShow === "tra" && "mystyle"}
      style={{
        transition: "2s",
      }}
    >
      <div
        className=" mt-2 p-2  d-flex justify-content-between"
        style={{
          border: "3px solid #fec400",
          borderRadius: "10px",
          // opacity: `${animationShow === "tra" && "0.5"}`,
          // transition: "0.5s",
        }}
      >
        <div>
          <div className="" style={{ width: "150px" }}>
            <Carousel>
              {dt[1].map((dt) => (
                <div>
                  <img src={dt} />
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
                  class="btn  btn-danger"
                >
                  Remove
                </button>
              </div>

              <div
                style={{ marginTop: "-25px" }}
                className="d-flex justify-content-center"
              >
                <button
                  onClick={() => {}}
                  type="button"
                  class="btn btn-warning"
                >
                  View
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className=" d-flex flex-row bd-highlight" style={{}}>
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
                <strong>
                  {dt[0].ProductOffer != "null"
                    ? dt[0].ProductOffer
                    : dt[0].ProductPrice}
                </strong>
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
                    <s>{dt[0].ProductPrice}</s>
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
            <div className="mt-3">
              <select
                value={dt[0].pSize != undefined && dt[0].pSize}
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
                <option value="XS">XS</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <div>
              <div class="mt-2 d-flex justify-content-between">
                <div>Product Price</div>
                <div>
                  {dt[0].ProductOffer != "null"
                    ? dt[0].ProductOffer
                    : dt[0].ProductPrice}
                </div>
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
                  <strong>
                    {dt[0].ProductOffer != "null"
                      ? dt[0].ProductOffer * qty
                      : dt[0].ProductPrice * qty}
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
