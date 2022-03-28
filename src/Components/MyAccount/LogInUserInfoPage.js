import { React, useContext } from "react";
import { UserInfoContext } from "../../App";
export default function LogInUserInfoPage() {
  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  // sign out
  const signOutUser = () => {
    setLoginUsserInfo("");
  };

  return (
    <div>
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
            Your Info
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <img
            style={{
              display: `${loggingUserInfo.photoURL ? "block" : "none"}   `,
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
        </div>
        <div className="p-2 m-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => signOutUser()}
            style={{
              boxShadow: "rgb(213 205 149)  0 3px 7px",
              borderRadius: "5px",
              fontFamily: "poppins",
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
