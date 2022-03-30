import { React, useContext, useState } from "react";
import { UserInfoContext } from "../../App";

export default function LogInUserInfoPage() {
  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  // usestate for edit btn
  const [editOn, setEditOn] = useState(false);

  // edit btn
  const editBtn = () => {
    console.log("edit btn clicked");
    setEditOn(true);
  };

  // sign out
  const signOutUser = () => {
    setLoginUsserInfo("");
  };

  return (
    <div>
      <div>
        <div style={{ display: `${editOn === true ? "none" : "block"}` }}>
          <div class="d-flex justify-content-between">
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
                Profile
              </span>
            </div>
            <div
              className="p-2 m-3 mt-4 bg-info"
              onClick={() => editBtn()}
              style={{
                width: "100px",
                boxShadow: "rgb(13 202 240)  0 3px 7px",
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
                Edit
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <img
              style={{
                display: `${loggingUserInfo.photoURL ? "block" : "none"}   `,
                borderRadius: "50%",
              }}
              src={loggingUserInfo.photoURL}
              class="img-fluid"
              alt="..."
            />
          </div>
          <div
            className=" m-3 p-2 "
            style={{
              backgroundColor: "#FFF7BF",
              boxShadow: "rgb(213 205 149)  0 3px 7px",
              borderRadius: "5px",
              fontFamily: "poppins",
            }}
          >
            <div className="row pt-2">
              <div className="col-4">Name</div>
              <div
                className="col-7"
                style={{ backgroundColor: "white", borderRadius: "5px" }}
              >
                <span className="p-2 ">{loggingUserInfo.displayName}</span>
              </div>
            </div>{" "}
            <div className="row pt-2">
              <div className="col-4">Email</div>
              <div
                className="col-7"
                style={{ backgroundColor: "white", borderRadius: "5px" }}
              >
                <span className="p-2 ">{loggingUserInfo.email}</span>
              </div>
            </div>{" "}
            <div className="row pt-2 pb-2">
              <div className="col-4">Phone</div>
              <div
                className="col-7 "
                style={{ backgroundColor: "white", borderRadius: "5px" }}
              >
                <span className="p-2 ">
                  {loggingUserInfo.phoneNumber
                    ? loggingUserInfo.phoneNumber
                    : "Null"}
                </span>
              </div>
            </div>{" "}
            <div className="row  pb-2">
              <div className="col-4">Address</div>
              <div
                className="col-7 "
                style={{ backgroundColor: "white", borderRadius: "5px" }}
              >
                <span className="p-2 ">
                  {loggingUserInfo.address ? loggingUserInfo.address : "Null"}
                </span>
              </div>
            </div>{" "}
          </div>
        </div>

        <div style={{ display: `${editOn === false ? "block" : "none"}` }}>
          <div class="d-flex justify-content-between">
            <div className="p-2 m-2">
              <button
                onClick={() => signOutUser()}
                type="button"
                class="btn btn-danger"
                style={{
                  boxShadow: "#d15e5e  0 3px 7px",
                  borderRadius: "5px",
                  fontFamily: "poppins",
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: `${editOn === true ? "block" : "none"}` }}>
          <div>
            <div>
              <div
                className="p-2 m-3 mt-4 "
                style={{
                  backgroundColor: "#FFF7BF",
                  width: "150px",
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
                  Edit Profile
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <img
                  style={{
                    display: `${
                      loggingUserInfo.photoURL ? "block" : "none"
                    }   `,
                    borderRadius: "50%",
                  }}
                  src={loggingUserInfo.photoURL}
                  class="img-fluid"
                  alt="..."
                />
              </div>

              <div
                className=" m-3 p-2 "
                style={{
                  backgroundColor: "#FFF7BF",
                  boxShadow: "rgb(213 205 149)  0 3px 7px",
                  borderRadius: "5px",
                  fontFamily: "poppins",
                }}
              >
                <div className="row pt-2">
                  <div className="col-4">Name</div>
                  <div
                    className="col-7"
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                  >
                    <input
                      className=""
                      placeholder={loggingUserInfo.displayName}
                      style={{ border: "none" }}
                    ></input>
                  </div>
                </div>{" "}
                <div className="row pt-2">
                  <div className="col-4">Email</div>
                  <div
                    className="col-7"
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                  >
                    <input
                      className=""
                      value={loggingUserInfo.email}
                      style={{ border: "none" }}
                    ></input>
                  </div>
                </div>{" "}
                <div className="row pt-2">
                  <div className="col-4">Phone</div>
                  <div
                    className="col-7"
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                  >
                    <input
                      className=""
                      placeholder={loggingUserInfo.phoneNumber}
                      style={{ border: "none" }}
                    ></input>
                  </div>
                </div>{" "}
                <div className="row pt-2">
                  <div className="col-4">Address</div>
                  <div
                    className="col-7"
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                  >
                    <input
                      className=""
                      placeholder={loggingUserInfo.address}
                      style={{ border: "none" }}
                    ></input>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: `${editOn === false ? "none" : "block"}` }}>
          <div class="d-flex justify-content-between">
            <div className="p-2 m-2">
              <button
                onClick={() => setEditOn(false)}
                type="button"
                class="btn btn-danger"
                style={{
                  boxShadow: "#d15e5e  0 3px 7px",
                  borderRadius: "5px",
                  fontFamily: "poppins",
                }}
              >
                Cancel
              </button>
            </div>
            <div className="p-2 m-2">
              <button
                type="button"
                class="btn btn-success"
                style={{
                  boxShadow: "green  0 3px 7px",
                  borderRadius: "5px",
                  fontFamily: "poppins",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
