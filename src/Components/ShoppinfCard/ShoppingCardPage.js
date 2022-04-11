import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ShoppingCardPage() {
  const [seasonData, setseasonData] = useState([]);

  useEffect(() => {
    setseasonData(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  }, []);

  const [editProductQty, setEditProductQty] = useState();

  // useEffetc for product qty
  useEffect(() => {
    if (editProductQty != undefined) {
      const removeProduct = seasonData.filter((dt) => dt != editProductQty);

      const conted = removeProduct.concat([editProductQty]);

      sessionStorage.setItem("addToShoppingCard", JSON.stringify(conted));
    }
  }, [editProductQty]);

  const removeItem = (props) => {
    console.log(props);
    const removeProduct = seasonData.filter((dt) => dt != props);
    console.log(removeProduct);
    setseasonData(removeProduct);
    sessionStorage.setItem("addToShoppingCard", JSON.stringify(removeProduct));
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
        {seasonData.map((dt) => (
          <ProductCard
            editProductQty={editProductQty}
            setEditProductQty={setEditProductQty}
            dt={dt}
            removeItem={removeItem}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}
