import { CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import io from "socket.io-client";
import styled from "styled-components";
import { UserInfoContext } from "../../App";
import LoadingImage from "../../Asset/Mask Group 1.png";
import globeSocketIo from "../../globeVar ";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "../FirebaseAuth/FirebaseAuth";
import LogInUserInfoPage from "./LogInUserInfoPage";

export default function MyAccount({ setcallUseEffectForCurrentUserInfo }) {
  let history = useHistory();
  let location = useLocation();
  const socket = useRef();

  socket.current = io(globeSocketIo);

  //
  //  back location not working
  let { from } = location.state || { from: { pathname: "/" } };

  console.log(from.pathname);

  // real time
  const [realTime, setRealTime] = useState(new Date());

  // user state for register btn and sign in btn
  const [signInOrRegister, setSignInOrRegister] = useState("Sign in");

  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);

  // error handile
  const [showError, setShowError] = useState({
    error: false,
    msg: "",
  });

  // useEfect for read user info in local stroage
  useEffect(() => {
    var localStroageuserInfo = JSON.parse(localStorage.getItem("UserInfo"));

    console.log("localStroageuserInfo", localStroageuserInfo);

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneGooglePopUser",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ localStroageuserInfo }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("this check data : ", data);

        if (!data.length) {
          console.log("empty array  ");
          fetchUserInfo(localStroageuserInfo);
        } else {
          console.log("full array  ");
          setLoginUsserInfo(data[0]._id);
        }
      })
      .catch((error) => {
        console.log("this check error : ", error);
      });
  }, []);

  // useEfect for read user info
  useEffect(() => {
    // fetch fins user
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindUser",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loggingUserInfo }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("this is find data from app js :", data[0]);
        setLoginUsserInfo(data[0]);

        // post data
        socket.current.emit("new-online-user", {
          activeUserInfo: "old",
          activeUserNumber: localStorage.getItem("localVisitorNumber"),
          oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
        });
        console.log("this is socket 6");
        setcallUseEffectForCurrentUserInfo(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [loggingUserInfo, socket]);

  // back location
  const backLocation = () => {
    if (from.pathname === "/Favorite" && loggingUserInfo.displayName) {
      history.push("/Favorite");
    }
    if (from.pathname === "/Order" && loggingUserInfo.displayName) {
      history.push("/Order");
    }
    // UserOrderPage
    if (from.pathname === "/UserOrderPage" && loggingUserInfo.displayName) {
      history.push("/UserOrderPage");
    }
  };

  backLocation();

  // history.replace(from);

  // check google pop user
  const isUserAlreadyCreate = (props) => {
    console.log(props);

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneGooglePopUserFind",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ props }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("this check data : ", data);

        if (!data.length) {
          console.log("empty array  ");
          fetchUserInfo(props);
        } else {
          console.log("full array  ");
          setLoginUsserInfo(data[0]._id);
        }
      })
      .catch((error) => {
        console.log("this check error : ", error);
      });
  };

  // fetch user login info
  const fetchUserInfo = (props) => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCreateUser",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLoginUsserInfo(data.insertedId);
        setcallUseEffectForCurrentUserInfo(true);

        // remove old user in array

        // post data
        socket.current.emit("new-online-user", {
          activeUserInfo: "old",
          activeUserNumber: localStorage.getItem("localVisitorNumber"),
          oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
        });
        console.log("this is socket 7");
      })
      .catch((error) => {});
  };

  // login with email and password
  // react form hook
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
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
            password: data.Password,
            phoneNumber: data.phoneNumber,
            time: realTime,
            address: data.address,
          };
          localStorage.setItem("UserInfo", JSON.stringify(shortdata));
          fetchUserInfo(shortdata);
          setcallUseEffectForCurrentUserInfo(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..

          const localErrorMsg = {
            error: true,
            msg: error,
          };

          setShowError(localErrorMsg);
        });
    }
  };

  // call socket for new user
  const callNewUserSocketIo = () => {
    // post data
    socket.current.emit("new-online-user", {
      activeUserInfo: "old",
      activeUserNumber: localStorage.getItem("localVisitorNumber"),
      oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
    });
    console.log("this is socket 8");
    setcallUseEffectForCurrentUserInfo(true);
  };

  // fetch One user
  const fetchOneUserInfo = (props) => {
    console.log("this is sign in user : ", props.email);

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindOneUser",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: props.email }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        console.log("this is sign in user : ", data[0]);
        localStorage.setItem("UserInfo", JSON.stringify(data[0]));

        callNewUserSocketIo();

        setLoginUsserInfo(data[0]._id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // ^ loading
  const [loading, setLoading] = useState(false);

  // sign in all things
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const onSignInEmail = (props) => {
    setSignInEmail(props);
  };
  const onSignInPassword = (props) => {
    setSignInPassword(props);
  };

  const onSignIn = () => {
    if (signInEmail === "" || signInPassword === "") {
      const localErrorMsg = {
        error: true,
        msg: "Please,fill up the input box",
      };

      setShowError(localErrorMsg);
    } else {
      setLoading(true);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...

          fetchOneUserInfo(user.providerData[0]);
          setLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const localErrorMsg = {
            error: true,
            msg: error,
          };

          setShowError(localErrorMsg);
          setLoading(false);
        });
    }
  };

  // register btn
  const registerBtn = (props) => {
    setSignInOrRegister(props);
  };
  // Log In with Google
  // const LogInwithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;

  //       console.log("this is google");

  //       const shortdata = {
  //         displayName: user.displayName,
  //         email: user.email,
  //         phoneNumber: user.phoneNumber,
  //         photoURL: user.photoURL,
  //         uid: user.uid,
  //         time: realTime,
  //       };

  //       // setLoginUsserInfo(shortdata);
  //       // fetchUserInfo(shortdata);
  //       localStorage.setItem("UserInfo", JSON.stringify(shortdata));
  //       isUserAlreadyCreate(shortdata);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;

  //       const email = error.email;

  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       console.log(error);
  //     });
  // };

  const [lazyLoading, setlazyLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setlazyLoading(false);
    }, 2000);
  }, []);

  return (
    <AccountStyle>
      {" "}
      {lazyLoading === true ? (
        <div
          className="d-flex"
          style={{
            margin: "100px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="d-flex"
            style={{
              alignContent: "flexEnd",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img className="rotate" src={LoadingImage} alt="QueenzZone" />
            </div>
            <div>
              <span>Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
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
                  <div className=" row p-2">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      {" "}
                      <label
                        for="Email"
                        className="  form-label"
                        style={{
                          fontSize: "16",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          margin: "",
                        }}
                      >
                        Email
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
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      {" "}
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
                          type="password"
                          placeholder="password..."
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
                    onClick={() => {
                      !loading && onSignIn();
                    }}
                    className="btn btn-warning d-flex justify-content-center"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      margin: "",
                      color: "white",
                    }}
                  >
                    {!loading ? (
                      "SIGN IN"
                    ) : (
                      <CircularProgress
                        style={{
                          width: "20px ",
                          height: "20px",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div class="d-flex justify-content-center mb-5 pb-5">
                  <span
                    style={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                  >
                    If you don't have an account please{" "}
                    <span
                      onClick={() => registerBtn("Register")}
                      style={{
                        color: "blue",
                      }}
                    >
                      {` `} SIGN UP
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="mb-5 pb-5 "
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
                    <div className="row p-2">
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        {" "}
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
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        {" "}
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
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        {" "}
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
                            type="phone number"
                            class="form-control"
                            id="PhoneNumber"
                            placeholder="phone number..."
                            aria-describedby="basic-addon3"
                            style={{
                              fontSize: "16",
                              fontFamily: "Poppins",
                              fontWeight: "400",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        {" "}
                        <label
                          for="PhoneNumber"
                          className=" mt-2 form-label"
                          style={{
                            fontSize: "16",
                            fontFamily: "Poppins",
                            fontWeight: "400",
                            margin: "",
                          }}
                        >
                          Address
                        </label>
                        <div class="input-group ">
                          <input
                            {...register("address", {
                              required: true,
                            })}
                            type="text"
                            class="form-control"
                            id="PhoneNumber"
                            placeholder="your address..."
                            aria-describedby="basic-addon3"
                            style={{
                              fontSize: "16",
                              fontFamily: "Poppins",
                              fontWeight: "400",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        {" "}
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
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        {" "}
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
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        {" "}
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
                          cursor: "pointer",
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
              class="alert alert-danger alert-dismissible fade show m-3 mb-5"
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

            {/* <div
            class="d-flex justify-content-center mt-3"
            style={{ display: "none" }}
          >
            <span
              pan
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "400",
                opacity: "0.5",
              }}
            >
              -----Or Join With -----
            </span>
          </div> */}
            {/* <div
            class="d-flex mt-4 justify-content-center "
            style={{ display: "none" }}
            // onClick={() => LogInwithGoogle()}
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
          </div> */}
          </div>
          <div
            style={{
              display: `${loggingUserInfo.email ? "block" : "none"}   `,
            }}
          >
            <LogInUserInfoPage
              setcallUseEffectForCurrentUserInfo={
                setcallUseEffectForCurrentUserInfo
              }
            ></LogInUserInfoPage>
          </div>
        </div>
      )}
    </AccountStyle>
  );
}

const AccountStyle = styled.div`
  /* ENDLESS ROTATE */
  .rotate {
    animation: rotate 1.5s linear infinite;
    margin: 0px auto;

    width: 50px;
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  /* SPINNER JUST FOR DEMO */
  .spinner {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: inset -2px 0 0 2px #0bf;
  }
`;
