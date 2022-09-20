import ChatIcon from "@mui/icons-material/Chat";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import styledCus from "styled-components";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const StyledBadgeForMessage = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

export default function MessageOption({ setMessage, curentUserInfo }) {
  let location = useLocation();
  const [unseenMessages, setUnseenMessages] = useState([]);

  // ^ for message set time out
  const [updateCount, setUpdateCount] = useState(1);

  const callMessage = () => {
    if (location.pathname === "/MyMessage") {
      setUnseenMessages([]);

      // set seen all message
      fetch(
        `https://glacial-shore-36532.herokuapp.com/seenUpdateInboxMessage?roomName=${
          curentUserInfo.activeUserInfo === "old"
            ? curentUserInfo.oldUserInfo.email
            : curentUserInfo.activeUserNumber
        }`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("this is unseen update message : ", json);
        });

      fetch(
        `https://glacial-shore-36532.herokuapp.com/getInboxMessage?roomName=${
          curentUserInfo.activeUserInfo === "old"
            ? curentUserInfo.oldUserInfo.email
            : curentUserInfo.activeUserNumber
        }`
      )
        .then((response) => response.json())
        .then((json) => {
          setMessage(json);

          setUpdateCount(updateCount + 1);
        });
    } else {
      fetch(
        `https://glacial-shore-36532.herokuapp.com/getInboxMessage?roomName=${
          curentUserInfo.activeUserInfo === "old"
            ? curentUserInfo.oldUserInfo.email
            : curentUserInfo.activeUserNumber
        }`
      )
        .then((response) => response.json())
        .then((json) => {
          const unseenMessage = json.filter(
            (msg) => msg.message.userSeen === "unseen"
          );
          setUnseenMessages(unseenMessage);

          console.log("this is unseen message : ", unseenMessage);

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
      <div></div>
      <IconButton aria-label="cart">
        <StyledBadgeForMessage
          style={{ padding: "0px" }}
          badgeContent={unseenMessages.length}
          color="secondary"
        >
          <ChatIcon
            style={{
              fontSize: "26px",
              marginTop: "2px",
              color: `${
                location.pathname === "/MyMessage" ? "black" : "white"
              }`,
            }}
          ></ChatIcon>
        </StyledBadgeForMessage>
      </IconButton>
    </IconBack>
  );
}

const IconBack = styledCus.div`
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    padding: 0px;
  }
 
`;
