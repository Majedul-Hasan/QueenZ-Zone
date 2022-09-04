import React, { useEffect, useRef } from "react";
import io from "socket.io-client";
import globeSocketIo from "../../../globeVar ";

export default function Stock() {
  const socket = useRef();
  socket.current = io(globeSocketIo);

  useEffect(() => {
    // post data
    socket.current.emit("new-order", "hiiiiii");

    // get data
    socket.current.on("get-order", (user) => {
      console.log(user);
    });
  }, [socket]);

  return <div>Stock</div>;
}
