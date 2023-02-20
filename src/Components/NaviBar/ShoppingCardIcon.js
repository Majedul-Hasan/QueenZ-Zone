import { CBadge, CButton } from "@coreui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
    <ShoppingCardIconStyle>
      <CButton
        style={{ backgroundColor: "#fec400", border: "none", padding: "0px" }}
        className="position-relative"
      >
        <ShoppingCartIcon
          style={{
            color: `${
              location.pathname === "/ShoppingCard" ||
              location.pathname === "/Order"
                ? "black"
                : "white"
            }`,
          }}
        ></ShoppingCartIcon>

        <CBadge color="danger" position="top-end" shape="rounded-pill">
          {productList === null ? 0 : productList.length}
          <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      {/* <IconButton aria-label="cart">
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
      </IconButton> */}
    </ShoppingCardIconStyle>
  );
}

const ShoppingCardIconStyle = styled.div`
  .MuiButtonBase-root
    .MuiIconButton-root
    .MuiIconButton-sizeMedium
    .css-1yxmbwk {
    padding: 0px !important;
  }
  .css-1yxmbwk {
    padding: 0px !important;
  }
`;
