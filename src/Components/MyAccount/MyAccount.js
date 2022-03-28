import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserInfoContext } from "../../App";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../FirebaseAuth/FirebaseAuth";
import LogInUserInfoPage from "./LogInUserInfoPage";

export default function MyAccount() {
  // user state for register btn and sign in btn
  const [signInOrRegister, setSignInOrRegister] = useState("Sign in");

  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  // error handile
  const [showError, setShowError] = useState({
    error: false,
    msg: "",
  });

  // login with email and password
  // react form hook
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const auth = getAuth();
    // valid password check
    if (data.ConfirmPassword != data.Password) {
      const localErrorMsg = {
        error: true,
        msg: "password don't match",
      };

      setShowError(localErrorMsg);
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          //   console.log(user);

          const shortdata = {
            displayName: `${data.FirstName} ${data.LastName}`,
            email: user.email,
            phoneNumber: data.phoneNumber,
          };

          setLoginUsserInfo(shortdata);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(error);

          const localErrorMsg = {
            error: true,
            msg: error,
          };

          setShowError(localErrorMsg);
        });
    }
  };

  // sign in all things
  const [signInEmail, setSignInEmail] = useState();
  const [signInPassword, setSignInPassword] = useState();
  const onSignInEmail = (props) => {
    setSignInEmail(props);
  };
  const onSignInPassword = (props) => {
    setSignInPassword(props);
  };

  const onSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setLoginUsserInfo(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // register btn
  const registerBtn = (props) => {
    console.log(props);
    setSignInOrRegister(props);
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
        const shortdata = {
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
        };

        setLoginUsserInfo(shortdata);
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
          style={{
            display: `${loggingUserInfo.email ? "none" : "block"}   `,
          }}
        >
          <div
            style={{
              display: ` ${
                signInOrRegister === "Register" ? "none" : "block"
              } `,
            }}
          >
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
                      onChange={(e) => onSignInEmail(e.target.value)}
                      type="email"
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
                      onChange={(e) => onSignInPassword(e.target.value)}
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
                <div
                  onClick={() => onSignIn()}
                  className="btn btn-warning d-flex justify-content-center"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    margin: "",
                    color: "white",
                  }}
                >
                  SIGN IN
                </div>
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
                    onClick={() => registerBtn("Register")}
                    style={{
                      color: "blue",
                    }}
                  >
                    SIGN UP
                  </span>
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className=""
              style={{
                display: ` ${
                  signInOrRegister === "Sign in" ? "none" : "block"
                } `,
              }}
            >
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
                    SIGN UP
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
                      for="First Name"
                      className=" mt-2 form-label"
                      style={{
                        fontSize: "16",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        margin: "",
                      }}
                    >
                      First Name
                    </label>
                    <div class="input-group ">
                      <input
                        {...register("FirstName", {
                          required: true,
                        })}
                        type="text"
                        class="form-control"
                        id="First Name"
                        placeholder="firsh name..."
                        aria-describedby="basic-addon3"
                        style={{
                          fontSize: "16",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                    <label
                      for="Last Name"
                      className=" mt-2 form-label"
                      style={{
                        fontSize: "16",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        margin: "",
                      }}
                    >
                      Last Name
                    </label>
                    <div class="input-group ">
                      <input
                        {...register("LastName", {
                          required: true,
                        })}
                        type="text"
                        class="form-control"
                        id="Last Name"
                        placeholder="last name..."
                        aria-describedby="basic-addon3"
                        style={{
                          fontSize: "16",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                    <label
                      for="Phone Number"
                      className=" mt-2 form-label"
                      style={{
                        fontSize: "16",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        margin: "",
                      }}
                    >
                      Phone Number
                    </label>
                    <div class="input-group ">
                      <input
                        {...register("phoneNumber", {
                          required: true,
                        })}
                        type="number"
                        class="form-control"
                        id="Phone Number"
                        placeholder="phone number..."
                        aria-describedby="basic-addon3"
                        style={{
                          fontSize: "16",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                    <label
                      for="Passwordd"
                      className=" mt-2 form-label"
                      style={{
                        fontSize: "16",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        margin: "",
                      }}
                    >
                      Password
                    </label>
                    <div class="input-group ">
                      <input
                        {...register("Password", {
                          required: true,
                          minLength: 8,
                        })}
                        type="password"
                        class="form-control"
                        id="Passwordd"
                        placeholder="password..."
                        aria-describedby="basic-addon3"
                        style={{
                          fontSize: "16",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                    <label
                      for="Confirm Password"
                      className=" mt-2 form-label"
                      style={{
                        fontSize: "16",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        margin: "",
                      }}
                    >
                      Confirm Password
                    </label>
                    <div class="input-group">
                      <input
                        type="password"
                        {...register("ConfirmPassword", {
                          required: true,
                          minLength: 8,
                        })}
                        class="form-control"
                        id="Confirm Password"
                        placeholder="password..."
                        aria-describedby="basic-addon3"
                        style={{
                          fontSize: "16",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                    <label
                      for="Emaill"
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
                        type="email"
                        {...register("email", {
                          required: true,
                        })}
                        class="form-control"
                        id="Emaill"
                        placeholder="email..."
                        aria-describedby="basic-addon3"
                        style={{
                          fontSize: "16",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 m-3  "
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <button
                    type="submit"
                    className="mx-auto btn btn-warning d-flex justify-content-center "
                    style={{
                      fontSize: "16px",
                      backgroundColor: "rgb(254 196 0)",
                      boxShadow: "rgb(213 205 149)  0 3px 7px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      width: "200px",
                      color: "white",
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
                <div class="d-flex justify-content-center">
                  <span
                    style={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                    }}
                  >
                    If you have an account please{" "}
                    <span
                      onClick={() => registerBtn("Sign in")}
                      style={{
                        color: "blue",
                      }}
                    >
                      SIGN IN
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </form>

          <div
            class="alert alert-danger alert-dismissible fade show m-3"
            role="alert"
            style={{
              display: `${showError.error === true ? "block" : "none"}   `,
            }}
          >
            <strong>{`${
              showError.msg.message ? showError.msg.message : showError.msg
            } `}</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
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
            <div className="mb-5 pb-5">
              <div
                class="d-flex bd-highlight  "
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
                <div class="p-2 flex-shrink-1 bd-highlight ">
                  <FontAwesomeIcon icon={faG} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: `${loggingUserInfo.email ? "block" : "none"}   `,
          }}
        >
          <LogInUserInfoPage></LogInUserInfoPage>
        </div>
      </div>
    </div>
  );
}
