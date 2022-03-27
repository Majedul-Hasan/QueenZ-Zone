import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "../FirebaseAuth/FirebaseAuth";

export default function MyAccount() {
  // register btn
  const registerBtn = () => {
    console.log("clicked");
  };
  // LogInwithGoogle
  const LogInwithGoogle = () => {
    console.log("google");
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user, token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
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
        <div class="d-flex justify-content-center mt-3">
          <span
            pan
            style={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "400",
              opacity: "0.5",
            }}
          >
            -----Or Join With-----
          </span>
        </div>
        <div
          class="d-flex mt-4 justify-content-center "
          onClick={() => LogInwithGoogle()}
        >
          <div
            class="d-flex bd-highlight"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "5px 30px",
              borderRadius: "10px",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontWeight: "600",
              boxShadow: "rgb(213 205 149)  0 3px 7px",
            }}
          >
            <div class="p-2 w-100 bd-highlight">Google</div>
            <div class="p-2 flex-shrink-1 bd-highlight">
              <FontAwesomeIcon icon={faG} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
