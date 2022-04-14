import {
  faCartShopping,
  faClipboardList,
  faHeart,
  faHouse,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { default as React, useContext, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { UserInfoContext } from "../../App";

// message icon style
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function NaviBar() {
  let { url } = useRouteMatch();
  // react router dom history
  let history = useHistory();

  const [seasonData, setseasonData] = useState([]);

  useEffect(() => {
    setseasonData(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  }, []);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setProductList(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
    }, 1000);
  }, []);

  // useEffect(() => {
  //   setProductList(JSON.parse(sessionStorage.getItem("addToShoppingCard")));
  // }, []);

  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  const optionName = (props) => {
    console.log();

    history.push(`/${props}`);
  };

  return (
    <div>
      <div className="fixed-bottom ">
        <div className="mx-auto" style={{ width: "100%" }}>
          <div
            className="w-100"
            style={{
              height: "50px",
              backgroundColor: "#FEC400",
              fontSize: "24px",
            }}
          >
            <div className=" p-2 d-flex justify-content-around">
              <div onClick={() => optionName("Home")}>
                <FontAwesomeIcon style={{ color: "black" }} icon={faHouse} />
              </div>
              <div onClick={() => optionName("Category")}>
                {" "}
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faClipboardList}
                />
              </div>
              <div onClick={() => optionName("Favorite")}>
                <FontAwesomeIcon style={{ color: "white" }} icon={faHeart} />
              </div>
              <div onClick={() => optionName("MyMessage")}>
                <div ClassName="" style={{ position: "relative" }}>
                  <FontAwesomeIcon
                    style={{ color: "white" }}
                    icon={faMessage}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      fontSize: "14px",
                      borderRadius: "100%",
                      backgroundColor: "#fec400",
                      padding: "2px",
                      right: "-4px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                    }}
                  >
                    <span>5</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => optionName("ShoppingCard")}
                style={{ padding: " 0px", margin: "0px", marginTop: "-4px" }}
              >
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={productList.length ? productList.length : 0}
                    color="warning"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faCartShopping}
                    />
                  </StyledBadge>
                </IconButton>
              </div>
              <div onClick={() => optionName("MyAccount")}>
                {loggingUserInfo.photoURL ? (
                  <img
                    className="img-fluid mb-1"
                    style={{ borderRadius: "50%", width: "30px" }}
                    src={loggingUserInfo.photoURL}
                    alt="user pic"
                  />
                ) : (
                  <FontAwesomeIcon style={{ color: "white" }} icon={faUser} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
