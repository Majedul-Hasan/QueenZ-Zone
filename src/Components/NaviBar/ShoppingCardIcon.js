import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ShoppingCardIcon({
  location,
  faCartShopping,
  StyledBadge,
  setAniImg,
}) {
  const [productList, setProductList] = useState(["1"]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setProductList(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  //   }, 1000);
  // }, [setAniImg]);

  useEffect(() => {
    setTimeout(() => {
      setProductList(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
    }, 1000);
  }, [setAniImg]);

  console.log(productList);

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge
          //   badgeContent={
          //     // window.sessionStorage.length != 0 ? productList.length : 0
          //     !window.sessionStorage.addToShoppingCard === false
          //       ? productList.length === null
          //       : 0
          //       ? productList.length
          //       : 0
          //   }
          //   color="warning"
          // >
          badgeContent={productList === null ? 0 : productList.length}
          color="warning"
        >
          <FontAwesomeIcon
            style={{
              color: `${
                location.pathname === "/ShoppingCard" ||
                location.pathname === "/Order"
                  ? "black"
                  : "white"
              }`,
            }}
            icon={faCartShopping}
          />
        </StyledBadge>
      </IconButton>
    </div>
  );
}
