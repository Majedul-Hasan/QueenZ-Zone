import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import "./MessageOption.css";

import styledCus from "styled-components";

import { CBadge, CButton } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const StyledBadgeForMessage = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

export default function MessageOption({
  setMessage,
  curentUserInfo,
  userScroll,
  setUnSeenMsgUserScroll,
}) {
  let location = useLocation();
  const [unseenMessages, setUnseenMessages] = useState([]);

  // ^ for message set time out
  const [updateCount, setUpdateCount] = useState(1);

  const callMessage = () => {
    if (location.pathname === "/MyMessage") {
      setUnseenMessages([]);

      // set seen all message

      if (userScroll === true) {
        fetch(
          `https://queenzzoneserver-production.up.railway.app/seenUpdateInboxMessage?roomName=${
            curentUserInfo.activeUserInfo === "old"
              ? curentUserInfo.oldUserInfo.email
              : curentUserInfo.activeUserNumber
          }`
        )
          .then((response) => response.json())
          .then((json) => {
            console.log("this is unseen update message : ", json);
          });
      }

      fetch(
        `https://queenzzoneserver-production.up.railway.app/getInboxMessage?roomName=${
          curentUserInfo.activeUserInfo === "old"
            ? curentUserInfo.oldUserInfo.email
            : curentUserInfo.activeUserNumber
        }`
      )
        .then((response) => response.json())
        .then((json) => {
          setMessage(json);

          const unseenMessage = json.filter(
            (msg) => msg.message.userSeen === "unseen"
          );

          let lastMsg = [];

          lastMsg = !unseenMessage.length === false && unseenMessage.slice(-1);

          if (!lastMsg === false) {
            if (lastMsg[0].message.message !== "") {
              console.log(
                "this is unseen message filter : Msg",
                lastMsg[0].message.message
              );

              setUnSeenMsgUserScroll({
                msg: lastMsg[0].message.message,
                state: "msg",
              });
            } else if (lastMsg[0].message.product !== null) {
              console.log(
                "this is unseen message filter : Product",
                lastMsg[0].message
              );

              setUnSeenMsgUserScroll({
                msg: "suggest a product",
                state: "product",
              });
            } else {
              setUnSeenMsgUserScroll({
                msg: "send image",
                state: "img",
              });

              console.log(
                "this is unseen message filter : Image",
                lastMsg[0].message
              );
            }
          }

          setUpdateCount(updateCount + 1);
        });
    } else {
      fetch(
        `https://queenzzoneserver-production.up.railway.app/getInboxMessage?roomName=${
          curentUserInfo.activeUserInfo === "old"
            ? curentUserInfo.oldUserInfo.email
            : curentUserInfo.activeUserNumber
        }`
      )
        .then((response) => response.json())
        .then((json) => {
          setUnSeenMsgUserScroll();

          const unseenMessage = json.filter(
            (msg) => msg.message.userSeen === "unseen"
          );
          setUnseenMessages(unseenMessage);

          // console.log("this is unseen message : ", unseenMessage.slice(-1));

          setUpdateCount(updateCount + 1);
        });
    }
  };

  useEffect(() => {
    setTimeout(function () {
      callMessage();
    }, 1000);
  }, [updateCount]);

  return (
    <IconBack>
      <CButton
        style={{ backgroundColor: "#fec400", border: "none", padding: "0px" }}
        className="position-relative"
      >
        <ChatIcon
          style={{
            fontSize: "26px",
            marginTop: "2px",
            padding: "0px !important",
            color: `${location.pathname === "/MyMessage" ? "black" : "white"}`,
          }}
        ></ChatIcon>
        {unseenMessages.length !== 0 && (
          <CBadge color="danger" position="top-end" shape="rounded-pill">
            {unseenMessages.length}
            <span className="visually-hidden">unread messages</span>
          </CBadge>
        )}
      </CButton>
      {/* <IconButton aria-label="cart">
        <StyledBadgeForMessage
          style={{ padding: "0px" }}
          badgeContent={unseenMessages.length}
          color="secondary"
        >
       
        </StyledBadgeForMessage>
      </IconButton> */}
    </IconBack>
  );
}

const IconBack = styledCus.div`
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    padding: 0px;
  }
  .MuiButtonBase-root .MuiIconButton-root .MuiIconButton-sizeMedium .css-1yxmbwk{
    padding: 0px !important;
  }
  
 
`;
