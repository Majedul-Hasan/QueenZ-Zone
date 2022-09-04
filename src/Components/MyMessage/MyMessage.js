import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import globeSocketIo from "../../globeVar ";

export default function MyMessage({
  message,
  userMessageInfo,
  updateMessageFunction,
}) {
  const socket = useRef();
  socket.current = io(globeSocketIo);
  const [sendMessage, setSendMessage] = useState("");

  console.log("this is this user info : ", userMessageInfo);

  // is room created
  const [isRoomCreated, setIsRoomCreate] = useState();

  const sendMsg = () => {
    fetch(
      "https://glacial-shore-36532.herokuapp.com/queenZoneInboxSendMessage",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room: `${userMessageInfo}`,
          sender: `${userMessageInfo}`,
          receiver: "admin",
          message: sendMessage,
          time: new Date(),
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        callNewMessage();
        console.log("message sended:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const callNewMessage = () => {
    console.log("this is new message for socket io");

    // post data socket io
    socket.current.emit("new-message", `${userMessageInfo}`);
    updateMessageFunction(`${userMessageInfo}`);

    setSendMessage("");
  };

  // post message
  const sendMessageBtn = () => {
    if (isRoomCreated === false) {
      sendMsg();
    } else {
      console.log("this is room ::");

      fetch("https://glacial-shore-36532.herokuapp.com/createAnInboxRoom", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ room: `${userMessageInfo}`, time: new Date() }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("message sended:", data);

          callNewMessage();
          setSendMessage("");

          console.log("this is room ", data);
          setIsRoomCreate(false);

          // update socket io
          // post data
          socket.current.emit("new-inbox-left-side", "update inbox left side");

          // ok => false
          // not found => true
          sendMsg();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  // for call useEffect
  const [callUseEffect, seCallUseEffect] = useState(false);

  // all message
  const [allMessage, setAllMessage] = useState([]);

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

  // create room check
  useEffect(() => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/getInboxRoom?roomName=${userMessageInfo}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is room ", json, !json.length);

        // ok => false
        // not found => true
        setIsRoomCreate(!json.length);
      });
  }, []);

  return (
    <InboxRoomBack>
      {message.map((msg) => (
        <h4>{msg.message.message}</h4>
      ))}
      <div>
        <input
          onChange={(e) => setSendMessage(e.target.value)}
          value={sendMessage}
          type="text"
        />
        <button
          onClick={() => {
            sendMessage !== "" && sendMessageBtn();
          }}
        >
          send
        </button>
      </div>
    </InboxRoomBack>
  );
}

const InboxRoomBack = styled.div`
  height: 450px;
  overflow: scroll;
`;
