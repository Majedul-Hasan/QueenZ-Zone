import {
  faCartShopping,
  faClipboardList,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { UserInfoContext } from "../../App";
import queenz_zone_logo from "../../Asset/real_queenzZoneLogoNoBG.png";
import MessageOption from "../NaviBar/MessageOption";

export default function HeaderSearchBar() {
  let history = useHistory();
  let location = useLocation();

  const optionName = (props) => {
    console.log();

    history.push(`/${props}`);
  };

  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  return (
    <HeaderStyleBack>
      <div
        className="p-2 w-100 d-flex align-items-center justify-content-around"
        style={{ height: "60px", backgroundColor: "#FEC400" }}
      >
        <div style={{ marginRight: "0px" }}>
          <img
            onClick={() => history.push("/Home")}
            style={{ width: "52px" }}
            src={queenz_zone_logo}
            className="img-fluid"
            alt="ded"
          />
        </div>
        <div
          className="d-flex justify-content-evenly"
          style={{ padding: "0px 10px" }}
        >
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderRadius: "10px 0 0 10px" }}
            />
            <button
              style={{
                borderRadius: "0px 10px 10px 0px",
                backgroundColor: "#FFF080",
                fontSize: "18px",
                fontFamily: "Poppins",
              }}
              className="input-group-text"
              id="basic-addon2"
            >
              <FontAwesomeIcon
                style={{ paddingLeft: "0" }}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>

          <div
            className="d-flex align-items-center headerOption"
            style={{ fontSize: "20px" }}
          >
            {/* <div
              className=""
              style={{ margin: "0px 15px", paddingLeft: "5px" }}
              onClick={() => optionName("MyMessage")}
            >
              <div ClassName="" style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faMessage} />
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
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
            </div> */}

            <div
              onClick={() => optionName("Favorite")}
              style={{
                padding: " 0px",
                margin: "0px 10px",
                marginTop: "-4px",
                color: `${
                  location.pathname === "/Favorite" ? "black" : "white"
                }`,
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div
              onClick={() => optionName("MyMessage")}
              style={{ padding: " 0px", margin: "0px 10px", marginTop: "-4px" }}
            >
              <MessageOption></MessageOption>
            </div>
            <div
              onClick={() => optionName("ShoppingCard")}
              style={{ padding: " 0px", margin: "0px 10px", marginTop: "-4px" }}
            >
              <FontAwesomeIcon
                style={{
                  color: `${
                    location.pathname === "/ShoppingCard" ? "black" : "white"
                  }`,
                }}
                icon={faCartShopping}
              />
            </div>
            <div
              onClick={() => optionName("ShoppingCard")}
              style={{ padding: " 0px", margin: "0px 10px", marginTop: "-4px" }}
            >
              <FontAwesomeIcon
                style={{
                  color: `${
                    location.pathname === "/UserOrderPage" ? "black" : "white"
                  }`,
                }}
                icon={faClipboardList}
              />
            </div>
            <div
              onClick={() => optionName("MyAccount")}
              style={{ padding: " 0px", margin: "0px 10px", marginTop: "-4px" }}
            >
              <FontAwesomeIcon
                onClick={() =>
                  console.log("this is account page : ", loggingUserInfo)
                }
                style={{
                  color: `${
                    location.pathname === "/MyAccount" ? "black" : "white"
                  }`,
                }}
                icon={faUser}
              />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyleBack>
  );
}

const HeaderStyleBack = styled.div`
  @media screen and (max-width: 550px) {
    .headerOption {
      display: none !important;
      background-color: red;
    }
  }
`;
