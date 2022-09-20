import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ShoppingCardPage() {
  const { enqueueSnackbar } = useSnackbar();
  let history = useHistory();
  const [seasonData, setseasonData] = useState([]);

  useEffect(() => {
    console.log(
      "this is check for any info in season stroage : ",
      window.sessionStorage.addToShoppingCard
    );
    if (!window.sessionStorage.addToShoppingCard === false) {
      setseasonData(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
    }
  }, []);

  const handleClickVariant = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Product removed success!", { variant });
  };

  // error for product size
  const [errorproductSize, setErrorProductSize] = useState();

  const [updateProductQty, setUpdateProductQty] = useState([]);

  const [editProductQty, setEditProductQty] = useState();

  console.log("this is product qty: ", editProductQty);

  // useEffetc for product qty
  useEffect(() => {
    if (editProductQty != undefined) {
      const removeProduct = seasonData.filter((dt) => dt != editProductQty);

      const conted = removeProduct.concat([editProductQty]);

      sessionStorage.setItem("addToShoppingCard", JSON.stringify(conted));
    }
  }, [updateProductQty]);

  // remove item
  const removeItem = (props) => {
    setTimeout(() => {
      console.log("hlwwwwwwwwwww", props);

      handleClickVariant("success");
      const removeProduct = seasonData.filter((dt) => dt != props);
      console.log("weeeeeeeeeeeeeeeeeeeeeeeeee", removeProduct);
      setseasonData(removeProduct);
      sessionStorage.setItem(
        "addToShoppingCard",
        JSON.stringify(removeProduct)
      );
    }, 500);
  };

  const proQtyNumberCheck = (props) => {
    console.log("check the prodcut Qty : ", props);
    setUpdateProductQty(props[0].qty);
    setEditProductQty(props);
  };

  // count porduct subtotal price

  const [productSubProce, setProductSubPrice] = useState();

  // useEffetc for product qty
  useEffect(() => {
    console.log("this is updateProductQty : ", seasonData);

    seasonData.map((dt) => console.log("this is dt : ", dt[0]));

    let count_sum = 0;

    // seasonData.map((dt) => {
    //   count_sum =
    //     count_sum + dt[0].ProductOffer != "null"
    //       ? dt[0].ProductPrice
    //       : dt[0].ProductOffer;

    //   // console.log(
    //   //   "hiii  ",
    //   //   dt[0].ProductOffer != "null" ? dt[0].ProductPrice : dt[0].ProductOffer
    //   // );
    // });

    console.log("this is loop : ");

    console.log("yess kah hoise : ");

    seasonData.map(
      (dt) =>
        (count_sum =
          count_sum + dt[0].ProductOffer != "null"
            ? dt[0].ProductPrice
            : dt[0].ProductOffer)
    );

    // for (let i = 1; i <= seasonData.length; i++) {
    //   console.log("this is loop : ", seasonData[i]);

    //   // let dt = seasonData[0];

    //   // count_sum =
    //   //   count_sum + dt[0].ProductOffer != "null"
    //   //     ? dt[0].ProductPrice
    //   //     : dt[0].ProductOffer;
    // }

    console.log("hiii  count : ", count_sum);
  }, [!seasonData.length === true]);

  // useEffect(() => {
  //   let sum = 0;

  //   let demSubTotal = seasonData;

  //   console.log("this is demoSubTotal check : ", demSubTotal);

  //   for (let i = 0; i < demSubTotal.length; i++) {
  //     console.log("this is check for loop ");

  //     let product_price =
  //       demSubTotal[i][0].ProductOffer != "null"
  //         ? demSubTotal[i][0].ProductPrice
  //         : demSubTotal[i][0].ProductOffer;

  //     let product_qty =
  //       demSubTotal[i][0].qty === undefined ? 1 : demSubTotal[i][0].qty;

  //     console.log("this is single product price : ", product_price);

  //     sum = sum + product_price * product_qty;
  //   }

  //   // let demSubTotal = seasonData.map((sr) => {
  //   //   sr[0].ProductPrice * sr[0].qty;
  //   // });
  //   console.log(sum);
  //   setProductSubPrice(sum);

  //   sessionStorage.setItem("ProductSubTotal", JSON.stringify(sum));
  // }, [updateProductQty]);

  setTimeout(() => {
    let sum = 0;

    let demSubTotal = seasonData;

    for (let i = 0; i < demSubTotal.length; i++) {
      // let product_price =
      //   demSubTotal[i][0].ProductOffer === "null"
      //     ? demSubTotal[i][0].ProductOffer
      //     : demSubTotal[i][0].ProductPrice;

      let product_price = demSubTotal[i][0].ProductPrice;

      let product_qty =
        demSubTotal[i][0].qty === undefined ? 1 : demSubTotal[i][0].qty;

      console.log(product_price);

      sum = sum + product_price * product_qty;
    }

    // let demSubTotal = seasonData.map((sr) => {
    //   sr[0].ProductPrice * sr[0].qty;
    // });
    console.log(sum);
    setProductSubPrice(sum);
    sessionStorage.setItem("ProductSubTotal", JSON.stringify(sum));
  }, 1000);

  // product size
  const [productSize, setproductSize] = useState();

  // useEffetc for product qty
  useEffect(() => {
    if (productSize != undefined) {
      const removeProduct = seasonData.filter((dt) => dt != productSize);

      const conted = removeProduct.concat([productSize]);

      sessionStorage.setItem("addToShoppingCard", JSON.stringify(conted));
    }

    console.log("this is subTotal submit btn ", productSize);
  }, [productSize]);

  // subtotal submit btn
  const SubTotalOrderBtn = () => {
    let subMub = JSON.parse(sessionStorage.getItem("addToShoppingCard"));

    console.log(subMub);

    const pSizeChectShow = subMub.filter((dt) => dt[0].isSizeShow === true);

    console.log(pSizeChectShow);

    // console.log(subMub);

    const pSizeChect = pSizeChectShow.filter((dt) => dt[0].pSize === undefined);

    if (pSizeChect.length) {
      if (pSizeChect[0][0].isSizeShow === true) {
        console.log("please submit the product size : ", pSizeChect);
        setErrorProductSize(pSizeChect);
        alert("Please Enter the product's Size");
      } else {
      }

      // console.log(
      //   "please submit the product size : ",
      //   pSizeChect[0][0].isSizeShow
      // );
    } else if (seasonData.length > 0) {
      console.log("successFull", subMub);

      if (productSubProce > 0) {
        history.push("/Order");
      }

      //   //
    }
  };

  // console.log(seasonData);

  // useEffect(() => {
  //   if (removeProduct.length != 0) {
  //     sessionStorage.setItem(
  //       "addToShoppingCard",
  //       JSON.stringify(editProductQty)
  //     );
  //   }
  // }, [removeProduct]);

  return (
    <div>
      <div style={{ display: ` ${productSubProce === 0 ? "block" : "none"}` }}>
        <div className=" mt-5 pt-5 d-flex justify-content-center">
          <h3>Your cart is empty 🛒</h3>
        </div>
      </div>
      <div style={{ display: ` ${productSubProce === 0 ? "none" : "block"}` }}>
        <div className="mb-5 pb-5">
          <div
            className="mt-2 p-2"
            style={{
              border: "2px solid #fec400",
              borderRadius: "10px",
              // opacity: `${animationShow === "tra" && "0.5"}`,
              // transition: "0.5s",
            }}
          >
            <div class="d-flex justify-content-between">
              <div>Total :</div> <div>{productSubProce}</div>
            </div>
            <div class="d-flex justify-content-between">
              <div>Delivery Fee : </div> <div>25</div>
            </div>
            <div class="d-flex justify-content-between">
              <div></div> <div>------------------------</div>
            </div>
            <div
              style={{ color: "red", fontWeight: "bold" }}
              class="d-flex justify-content-between"
            >
              <div>Subtotal</div> <div>{productSubProce + 25}</div>
            </div>
          </div>
          <div className="mb-5 pb-5">
            {seasonData.map((dt) => (
              <ProductCard
                editProductQty={editProductQty}
                setEditProductQty={setEditProductQty}
                dt={dt}
                removeItem={removeItem}
                proQtyNumberCheck={proQtyNumberCheck}
                setproductSize={setproductSize}
                errorproductSize={errorproductSize}
              ></ProductCard>
            ))}
          </div>
        </div>

        <div
          className="mb-5"
          style={{
            display: `${productSubProce === 0 ? "none" : "block"}`,
          }}
        >
          <div
            class="p-2 fixed-bottom mb-5 pb-5 w-100"
            style={{ backgroundColor: "white", height: "50px" }}
          >
            <div
              className=""
              style={{
                backgroundColor: "white",
                height: "63px",
              }}
            >
              <div>
                <div class="d-grid gap-2">
                  <button
                    class="btn btn-warning"
                    type="button"
                    onClick={() => SubTotalOrderBtn()}
                    style={{ fontSize: "13px" }}
                  >
                    Subtotal : <span style={{ fontSize: "12px" }}>SAR</span>{" "}
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                      {productSubProce + 25}
                    </span>{" "}
                    | Proceed to Buy{" "}
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                      ({seasonData.length} items)
                    </span>
                    <FontAwesomeIcon
                      style={{ marginLeft: "4px" }}
                      icon={faPaperPlane}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
