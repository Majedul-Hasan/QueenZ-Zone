import React from "react";

export default function MyAccount() {
  // register btn
  const registerBtn = () => {
    console.log("clicked");
  };

  return (
    <div>
      {" "}
      <div>
        <div
          className="p-2 m-3 mt-4 "
          style={{
            backgroundColor: "#FFF7BF",
            width: "100px",
            boxShadow: "rgb(213 205 149)  0 3px 7px",
            borderRadius: "5px",
          }}
        >
          <span
            className="d-flex justify-content-center"
            style={{
              fontSize: "16",
              fontFamily: "Poppins",
              fontWeight: "600",
              margin: "",
            }}
          >
            SIGN IN
          </span>
        </div>
        <div
          className=" m-3 "
          style={{
            backgroundColor: "#FFF7BF",
            boxShadow: "rgb(213 205 149)  0 3px 7px",
            borderRadius: "5px",
          }}
        >
          <div className="p-2">
            <label
              for="Email"
              className=" mt-2 form-label"
              style={{
                fontSize: "16",
                fontFamily: "Poppins",
                fontWeight: "400",
                margin: "",
              }}
            >
              Email Address
            </label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                id="Email"
                placeholder="email..."
                aria-describedby="basic-addon3"
                style={{
                  fontSize: "16",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              />
            </div>
            <label
              for="Password"
              class="form-label"
              style={{
                fontSize: "16",
                fontFamily: "Poppins",
                fontWeight: "400",
                margin: "",
              }}
            >
              Password
            </label>
            <div class="input-group mb-3">
              <input
                type="text"
                placeholder="password"
                className=" form-control"
                id="Password"
                aria-describedby="basic-addon3"
                style={{
                  fontSize: "16",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  margin: "",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="p-2 m-3 mx-auto "
          style={{
            backgroundColor: "#FEC400",
            width: "100px",
            boxShadow: "rgb(213 205 149)  0 3px 7px",
            borderRadius: "5px",
            width: "195px",
          }}
        >
          <span
            className="d-flex justify-content-center"
            style={{
              fontSize: "16",
              fontFamily: "Poppins",
              fontWeight: "600",
              margin: "",
              color: "white",
            }}
          >
            SIGN IN
          </span>
        </div>
        <div class="d-flex justify-content-center">
          <span
            style={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
          >
            If you don't have an account please{" "}
            <span
              onClick={() => registerBtn()}
              style={{
                color: "blue",
              }}
            >
              REGISTER
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
