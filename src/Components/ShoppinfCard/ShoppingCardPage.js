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
    setseasonData(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  }, []);

  const handleClickVariant = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Product removed success!", { variant });
  };

  // error for product size
  const [errorproductSize, setErrorProductSize] = useState();

  const [updateProductQty, setUpdateProductQty] = useState();

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

  // remove iteam
  const removeItem = (props) => {
    console.log("hlwwwwwwwwwww", props);

    handleClickVariant("success");
    const removeProduct = seasonData.filter((dt) => dt != props);
    console.log("weeeeeeeeeeeeeeeeeeeeeeeeee", removeProduct);
    setseasonData(removeProduct);
    sessionStorage.setItem("addToShoppingCard", JSON.stringify(removeProduct));
  };

  const proQtyNumberCheck = (props) => {
    console.log("check the prodcut Qty : ", props);
    setUpdateProductQty(props[0].qty);
    setEditProductQty(props);
  };

  // count porduct subtotal price

  const [productSubProce, setProductSubPrice] = useState();

  useEffect(() => {
    let sum = 0;

    let demSubTotal = seasonData;

    for (let i = 0; i < demSubTotal.length; i++) {
      let product_price =
        demSubTotal[i][0].ProductOffer === "null"
          ? demSubTotal[i][0].ProductPrice
          : demSubTotal[i][0].ProductOffer;

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
  }, [updateProductQty]);

  setTimeout(() => {
    let sum = 0;

    let demSubTotal = seasonData;

    for (let i = 0; i < demSubTotal.length; i++) {
      let product_price =
        demSubTotal[i][0].ProductOffer === "null"
          ? demSubTotal[i][0].ProductPrice
          : demSubTotal[i][0].ProductOffer;

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

    const pSizeChect = subMub.filter((dt) => dt[0].pSize === undefined);

    if (pSizeChect.length) {
      console.log("please submit the product size : ", pSizeChect);
      setErrorProductSize(pSizeChect);
      alert("Please Enter the product's Size");
    } else {
      console.log("successFull");
      history.push("/Order");
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
      <div className="mb-5 pb-5">
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

      <div className="mb-5">
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
                >
                  Subtotal : <span style={{ fontSize: "13px" }}>SAR</span>{" "}
                  <span style={{ fontSize: "17px", fontWeight: "600" }}>
                    {productSubProce}
                  </span>{" "}
                  | Proceed to Buy{" "}
                  <span style={{ fontSize: "17px", fontWeight: "600" }}>
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
  );
}
