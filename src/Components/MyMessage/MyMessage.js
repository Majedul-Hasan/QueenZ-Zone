import CancelIcon from "@mui/icons-material/Cancel";
import ImageIcon from "@mui/icons-material/Image";
import MouseIcon from "@mui/icons-material/Mouse";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useRef, useState } from "react";
import InputFiles from "react-input-files";
import { useHistory, useLocation } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import styled from "styled-components";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export default function MyMessage({ curentUserInfo, message }) {
  //const socket = useRef();
  let location = useLocation();
  let history = useHistory();

  console.log("this is scroll param : ", location);

  const messageEndRef = useRef(null);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (scroll) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  /// ============ file put
  const [inputFile, setInputFile] = useState({
    createObjectURL: "",
    fullImgDetails: "",
  });

  // loading
  const [loading, setLoading] = useState(false);

  // socket.current = io(globeSocketIo);
  const [sendMessage, setSendMessage] = useState("");

  // console.log("this is user infoooooo ", curentUserInfo);

  // is room created
  const [userInfo, setUserInfo] = useState();

  console.log("this is user infooooooooo : ", userInfo);

  console.log("this is message allll ", message);

  const sendMsg = ({ img, product }) => {
    fetch(
      "https://glacial-shore-36532.herokuapp.com/queenZoneInboxSendMessage",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room: `${userInfo}`,
          sender: `${userInfo}`,
          receiver: "admin",
          message: img ? "" : sendMessage,
          image: img ? img : null,
          product: product !== null ? product : null,
          time: new Date(),
          userSeen: "seen",
          adminSeen: "unseen",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // callNewMessage();
        console.log("message sended:", data);
        setSendMessage("");
        setInputFile({
          createObjectURL: "",
          fullImgDetails: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const callNewMessage = () => {
  //   console.log("this is new message for socket io");

  //   // post data socket io
  //   socket.current.emit("new-message", `${userMessageInfo}`);
  //   updateMessageFunction(`${userMessageInfo}`);

  //   setSendMessage("");
  // };

  // post message
  const sendMessageBtn = () => {
    // ^ for image
    if (sendMessage !== "") {
      sendMsg({ img: null, product: null });
    } else {
      setLoading(true);
      //^ for message
      if (inputFile.createObjectURL !== "") {
        const data = new FormData();
        data.append("file", inputFile.fullImgDetails);
        data.append("upload_preset", "QueenzZone");

        fetch("https://api.cloudinary.com/v1_1/ddcppphbi/image/upload", {
          method: "POST", // or 'PUT'

          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            // setImageLoading(true);
            // //  sendMessageBtn({ img: data.url });
            sendMsg({ img: data.url, product: null });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  };

  // // for fetch message
  // useEffect(() => {
  //   console.log("this is useEffect message");

  //   // get message

  //   fetch(
  //     `http://localhost:5000/getInboxMessage?roomName=${"rony13647@gmail.com"}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);

  //       setAllMessage(json);
  //     });

  //   seCallUseEffect(false);
  // }, [callUseEffect]);

  // socket io

  // useEffect(() => {
  //   // get data
  //   socket.current.on("get-message", (user) => {
  //     seCallUseEffect(true);
  //   });
  // }, [socket]);

  // ^ old
  // create room check
  // useEffect(() => {
  //   fetch(
  //     `https://glacial-shore-36532.herokuapp.com/getInboxRoom?roomName=${
  //       curentUserInfo.activeUserInfo === "old"
  //         ? curentUserInfo.oldUserInfo.email
  //         : curentUserInfo.activeUserNumber
  //     }`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("this is room ", json, !json.length);

  //       // ok => false
  //       // not found => true
  //       setIsRoomCreate(!json.length);
  //     });
  // }, []);

  const checkRoom = (props) => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/getInboxRoom?roomName=${props}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is room check ", json);

        // ok => false
        // not found => true
        // setIsRoomCreate(json);

        json === false && createAnRoom(props);
      });
  };

  useEffect(() => {
    setTimeout(function () {
      console.log("this is room 4", curentUserInfo);

      console.log(
        "this is room 4",
        JSON.parse(localStorage.getItem("UserInfo"))
      );

      userInfoFunction({
        activeUserInfo:
          JSON.parse(localStorage.getItem("UserInfo")) === null ? "new" : "old",
        activeUserNumber: localStorage.getItem("localVisitorNumber"),
        oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
      });
    }, 500);
  }, []);

  const userInfoFunction = (props) => {
    console.log("this is room function : ", props);

    setUserInfo(
      props.activeUserInfo === "old"
        ? props.oldUserInfo.email
        : props.activeUserNumber
    );
    console.log(
      "this is room function : ",
      props.activeUserInfo === "old"
        ? props.oldUserInfo.email
        : props.activeUserNumber
    );

    const userCurrentInfo =
      props.activeUserInfo === "old"
        ? props.oldUserInfo.email
        : props.activeUserNumber;

    checkRoom(userCurrentInfo);
  };

  // create an room
  const createAnRoom = (props) => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/createAnInboxRoom?roomName=${props}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is room ", json, !json.length);
      });
  };

  // ^ keyboard enter btn
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key

    if (e.keyCode === 13) {
      sendMessage !== "" && sendMessageBtn();
    }
  };

  return (
    <InboxRoomBack className=" mb-5 pb-2 pt-1 px-1">
      {" "}
      <div
        style={{
          position: "fixed",

          bottom: "202px",
          right: "26px",
          padding: "10px",
          backgroundColor: `${scroll ? "green" : "red"}`,
          border: "50%",
          borderRadius: "50%",
          color: "white",
        }}
      >
        <MouseIcon onClick={() => setScroll(!scroll)}>scroll</MouseIcon>
      </div>
      <div>
        <WhatsAppWidget
          textReplyTime="Online Shopping"
          companyName="Queenz Zone"
          class="_1bpcM "
          phoneNumber="966590519267"
        />
      </div>
      <div className="messageDiv pb-1 ">
        {!message.length === false &&
          message.map((msg) => (
            <div>
              {
                // ^ for admin  and user message
                msg.message.message !== "" &&
                  msg.message.product === null &&
                  msg.message.image === null && (
                    <div
                      className={`${
                        msg.message.sender === "admin"
                          ? "OneMessageDiv_admin"
                          : "OneMessageDiv_user"
                      } `}
                    >
                      <div
                        className={`${
                          msg.message.sender === "admin"
                            ? "OneMessageDiv_admin_main"
                            : "OneMessageDiv_user_main"
                        } `}
                      >
                        <div
                          className={`${
                            msg.message.sender === "admin"
                              ? "OneMessageDiv_admin_main_time_ago"
                              : "OneMessageDiv_user_main_time_ago"
                          } `}
                          style={{ fontSize: "12px" }}
                        >
                          {" "}
                          {timeAgo.format(new Date(msg.message.time))}
                        </div>
                        <div>
                          <span>{msg.message.message}</span>
                        </div>
                      </div>
                    </div>
                  )
              }

              {
                // ^ for admin  and user image
                msg.message.message === "" &&
                  msg.message.product === null &&
                  msg.message.image !== null && (
                    <div
                      className={`${
                        msg.message.sender === "admin"
                          ? "OneImageDiv_admin"
                          : "OneImageDiv_user"
                      } `}
                    >
                      <div
                        className={`${
                          msg.message.sender === "admin"
                            ? "OneImageDiv_admin_main"
                            : "OneImageDiv_user_main"
                        } `}
                      >
                        <div
                          className={`${
                            msg.message.sender === "admin"
                              ? "OneImageDiv_admin_main_time_ago mt-1"
                              : "OneImageDiv_user_main_time_ago mt-1"
                          } `}
                          style={{ fontSize: "12px" }}
                        >
                          {" "}
                          {timeAgo.format(new Date(msg.message.time))}
                        </div>
                        <div>
                          <div>
                            <img
                              style={{ width: "100%" }}
                              src={msg.message.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              }

              {
                // ^ for admin send product
                msg.message.message === "" &&
                  msg.message.product !== null &&
                  msg.message.image === null && (
                    <div
                      onClick={() =>
                        history.push(
                          `/Category/${msg.message.product.props.ProductCategory}/${msg.message.product.props.ProductName}/${msg.message.product.props._id}`
                        )
                      }
                      className={`${
                        msg.message.sender === "admin"
                          ? "OneProductDiv_admin"
                          : "OneProductDiv_user"
                      } `}
                    >
                      <div
                        className={`${
                          msg.message.sender === "admin"
                            ? "OneProductDiv_admin_main"
                            : "OneProductDiv_user_main"
                        } `}
                      >
                        <div
                          className={`${
                            msg.message.sender === "admin"
                              ? "OneProductDiv_admin_main_time_ago"
                              : "OneProductDiv_user_main_time_ago"
                          } `}
                          style={{ fontSize: "12px" }}
                        >
                          {" "}
                          {timeAgo.format(new Date(msg.message.time))}
                        </div>
                        <div>
                          <img
                            src={
                              !msg.message.product.img[0][0][0] === "h"
                                ? msg.message.product.img[0][0][0]
                                : msg.message.product.img[0][0]
                            }
                            alt=""
                            style={{ width: "100%", borderRadius: "5px" }}
                          />

                          <div>
                            <span>
                              <b>{msg.message.product.props.ProductName}</b>
                            </span>
                          </div>
                          <div>
                            <span>
                              Category : {` `}
                              {msg.message.product.props.ProductCategory}
                            </span>
                          </div>
                          <div className="pt-1 d-flex">
                            <div>
                              <span>
                                {msg.message.product.props.ProductOffer !==
                                "null"
                                  ? "Offer"
                                  : "Price"}{" "}
                                {` `}:{" "}
                                <b>{msg.message.product.props.ProductPrice}</b>{" "}
                              </span>
                            </div>
                            {msg.message.product.props.ProductOffer !==
                              "null" && (
                              <div className="px-2">
                                <span style={{ fontSize: "12px" }}>
                                  Price :{" "}
                                  <s style={{ color: "red" }}>
                                    {" "}
                                    <b style={{ color: "white" }}>
                                      {msg.message.product.props.ProductOffer}
                                    </b>{" "}
                                  </s>
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              }
              <div ref={messageEndRef}></div>
            </div>
          ))}
      </div>
      <div className="w-100 inputDiv d-flex align-items-center  justify-content-between">
        <div
          className=""
          style={{ width: "11%", padding: "0px", margin: "0px" }}
        >
          <div style={{ width: "40px" }}>
            {inputFile.createObjectURL !== "" ? (
              <div style={{ position: "relative" }}>
                <img
                  style={{ width: "100%" }}
                  src={inputFile.createObjectURL}
                  alt={inputFile}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    right: "-10px",
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  <CancelIcon
                    onClick={() =>
                      setInputFile({ createObjectURL: "", fullImgDetails: "" })
                    }
                  ></CancelIcon>
                </div>
              </div>
            ) : (
              <InputFiles
                onChange={(files) => {
                  console.log("this is input file :", files);
                  setInputFile({
                    createObjectURL: URL.createObjectURL(files[0]),
                    fullImgDetails: files[0],
                  });
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #eaeaea",
                    padding: "8px",
                    borderRadius: "10px",
                  }}
                >
                  <ImageIcon></ImageIcon>
                </button>
              </InputFiles>
            )}
          </div>
        </div>

        <div
          className=""
          style={{ width: "67%", padding: "0px", margin: "0px" }}
        >
          {inputFile.createObjectURL === "" ? (
            <input
              onKeyUp={handleKeypress}
              style={{ width: "100%" }}
              class="form-control"
              onChange={(e) => setSendMessage(e.target.value)}
              value={sendMessage}
              type="text"
              placeholder="msg..."
            ></input>
          ) : (
            <span>
              Image Name : {inputFile.fullImgDetails.name.slice(0, 10)}...
            </span>
          )}
        </div>
        <div
          className=""
          style={{ width: "18%", padding: "0px", margin: "0px" }}
        >
          {loading ? (
            <div className="loadingAni">
              {" "}
              <CircularProgress
                style={{
                  width: "20px ",
                  height: "20px",
                }}
              />
            </div>
          ) : (
            <Button
              onClick={() => {
                sendMessageBtn();
              }}
              variant="contained"
              disableElevation
            >
              <SendIcon></SendIcon>
            </Button>
          )}
        </div>
      </div>
    </InboxRoomBack>
  );
}

const InboxRoomBack = styled.div`
  ._1bpcM {
    margin-bottom: 40px;
  }
  .messageDiv {
    height: 675px;
    overflow-y: scroll;
  }

  /* width */
  .messageDiv::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .messageDiv::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #fec400;
    border-radius: 10px;
  }

  /* Handle */
  .messageDiv::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .messageDiv::-webkit-scrollbar-thumb:hover {
    background: #fec400;
  }

  .OneMessageDiv_admin {
    display: flex;
    align-self: flex-end;
    width: 100%;
    color: white;
  }
  .OneMessageDiv_admin_main {
    background-color: #6495ed;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 20px 5px;
    margin: 3px 10px;
    display: flex;
    display: flex;
    flex-direction: column-reverse;
  }
  .OneMessageDiv_user {
    display: flex;
    align-self: flex-end;
    width: 100%;
    justify-content: flex-end;
  }

  .OneMessageDiv_user_main {
    background-color: #efefef;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 5px 20px;
    margin: 3px 10px;
    display: flex;

    flex-direction: column-reverse;
    align-items: flex-end;
  }
  .OneMessageDiv_admin_main_time_ago,
  .OneImageDiv_admin_main_time_ago {
    color: white;
  }
  .OneMessageDiv_user_main_time_ago,
  .OneImageDiv_user_main_time_ago {
    color: gray;
  }

  // image
  .OneImageDiv_user {
    display: flex !important;
    align-self: flex-end;

    color: white;
    justify-content: flex-end;
  }
  .OneImageDiv_user_main {
    background-color: #efefef;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 5px 20px;
    margin: 3px 10px;
    display: flex;

    flex-direction: column-reverse;
    align-items: flex-end;
    width: 80%;
  }
  .OneImageDiv_admin {
    display: flex;
    align-self: flex-end;
    width: 80%;
    color: white;
  }
  .OneImageDiv_admin_main {
    background-color: #6495ed;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 20px 5px;
    margin: 3px 10px;
    display: flex;
    display: flex;
    flex-direction: column-reverse;
  }

  // product
  .OneProductDiv_admin {
    display: flex;
    align-self: flex-end;
    width: 80%;
    color: white;
  }
  .OneProductDiv_admin_main {
    background-color: #6495ed;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 20px 5px;
    margin: 3px 10px;
    display: flex;
    display: flex;
    flex-direction: column-reverse;
  }
  .OneProductDiv_admin_main_time_ago {
    color: white;
  }

  .loadingAni {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
