import {
  faCartShopping,
  faClipboardList,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NaviBar() {
  const optionName = (props) => {
    console.log(props);
  };

  return (
    <div>
      <div class="fixed-bottom ">
        <div className="mx-auto" style={{ width: "100%" }}>
          <div
            className="w-100"
            style={{ height: "70px", backgroundColor: "#FEC400" }}
          >
            <div class=" p-3 d-flex justify-content-around">
              <div onClick={() => optionName("Home")}>
                <FontAwesomeIcon
                  style={{ color: "black", fontSize: "28px" }}
                  icon={faHouse}
                />
              </div>
              <div onClick={() => optionName("Category")}>
                {" "}
                <FontAwesomeIcon
                  style={{ color: "white", fontSize: "28px" }}
                  icon={faClipboardList}
                />
              </div>
              <div onClick={() => optionName("ShoppingCard")}>
                <FontAwesomeIcon
                  style={{ color: "white", fontSize: "28px" }}
                  icon={faCartShopping}
                />
              </div>
              <div onClick={() => optionName("MyAccount")}>
                <FontAwesomeIcon
                  style={{ color: "white", fontSize: "28px" }}
                  icon={faUser}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
