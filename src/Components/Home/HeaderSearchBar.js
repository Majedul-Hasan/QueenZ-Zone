import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import queenz_zone_logo from "../../Asset/queenz_zone_logo.png";

export default function HeaderSearchBar() {
  return (
    <div>
      <div
        className="p-2 w-100 d-flex align-items-center justify-content-around"
        style={{ height: "75px", backgroundColor: "#FEC400" }}
      >
        <div style={{ marginRight: "10px" }}>
          <img src={queenz_zone_logo} className="img-fluid" alt="ded" />
        </div>
        <div>
          <div class="input-group ">
            <input
              type="text"
              class="form-control"
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
              class="input-group-text"
              id="basic-addon2"
            >
              Search
              <FontAwesomeIcon
                style={{ paddingLeft: "5px" }}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
