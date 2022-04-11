import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ShoppingCardPage() {
  const [seasonData, setseasonData] = useState([]);

  useEffect(() => {
    setseasonData(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  }, []);

  return (
    <div>
      <div className=" ">
        {seasonData.map((dt) => (
          <ProductCard dt={dt}></ProductCard>
        ))}
      </div>
    </div>
  );
}
