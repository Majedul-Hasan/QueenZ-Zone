import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import globeSocketIo from "../../../globeVar ";

export default function Inbox() {
  const socket = useRef();
  socket.current = io(globeSocketIo);
  const [activeUser, setActiveUser] = useState([]);

  // socket.current = io("http://localhost:8800");

  // // get data
  // socket.current.on("get-online-user", (user) => {
  //   console.log("this is active user ", user);
  //   setActiveUser(user);
  // });

  useEffect(() => {
    console.log("this is useEffect");

    // get data
    socket.current.on("get-online-user", (user) => {
      console.log("this is active user ", user);
      setActiveUser(user);
    });
  }, [socket]);

  return (
    <InboxBack className="p-2">
      <div class="pt-2 d-flex justify-content-between">
        {" "}
        <div>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>Inbox</span>
        </div>
        <div className="">
          <div
            className="p-1 px-3"
            style={{
              backgroundColor: "#ff5959",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <span className="px-2"> Live</span>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </div>
        </div>
      </div>

      <div
        className="mt-2 p-2"
        style={{ border: "3px solid #fec400", borderRadius: "10px" }}
      >
        <div>
          <div className="row">
            <div className="col-8">
              {" "}
              <div
                className="p-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                  height: "300px",
                }}
              >
                <div
                  className="p-2 d-flex justify-content-between"
                  style={{ backgroundColor: "#ffde4d", borderRadius: "5px" }}
                >
                  <div>
                    <span>
                      <b>Active User Information</b>{" "}
                    </span>
                  </div>
                  <div>
                    <span>Online : {activeUser.length}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              {" "}
              <div
                className="p-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, quisquam! Lorem ipsum dolor sit amet consectetur,
                tatibus eaque ex? Maxime perferendis voluptatibus illum.
                Explicabo veniam saepe officiis.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 InboxContainer ">
          <div className="row p-2">
            <div className="col-3 p-2  inbox-left">
              <div
                className="p-2"
                style={{ border: "2px solid #fec400", borderRadius: "10px" }}
              >
                <div>
                  <div
                    onClick={() => {
                      console.log("this is chat");
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#fec400",
                      }}
                    >
                      Chats
                    </span>
                  </div>
                  <div>
                    <hr
                      style={{
                        margin: "5px",
                        color: " #fec400",
                        height: "4px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                deleniti reiciendis ad officia natus cumque, repudiandae
                inventore nobis fugit pariatur? Quas exercitationem ipsum
                impedit amet debitis asperiores adipisci omnis quisquam officia.
                Esse, temporibus architecto? Esse debitis obcaecati placeat
                laborum necessitatibus temporibus quis minima nobis molestiae
                culpa nihil, fugiat quo incidunt qui quidem dolor repellendus
                sed veritatis animi dolorem. Aliquid tenetur explicabo officiis
                odit ipsa deleniti magni quas enim. Ipsa perferendis impedit
                iusto debitis, recusandae odio pariatur officia dignissimos
                sint. Accusantium placeat, optio pariatur vero iusto ullam ut.
                Soluta est dolorum incidunt iure, voluptas laborum consequatur
                esse, error libero nesciunt animi!
              </div>
            </div>
            <div className="col-5 p-2  inbox-middle">
              <div
                className="p-2"
                style={{ border: "2px solid #fec400", borderRadius: "10px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                deleniti reiciendis ad officia natus cumque, repudiandae
                inventore nobis fugit pariatur? Quas exercitationem ipsum
                impedit amet debitis asperiores adipisci omnis quisquam officia.
                Esse, temporibus architecto? Esse debitis obcaecati placeat
                laborum necessitatibus temporibus quis minima nobis molestiae
                culpa nihil, fugiat quo incidunt qui quidem dolor repellendus
                sed veritatis animi dolorem. Aliquid tenetur explicabo officiis
                odit ipsa deleniti magni quas enim. Ipsa perferendis impedit
                iusto debitis, recusandae odio pariatur officia dignissimos
                sint. Accusantium placeat, optio pariatur vero iusto ullam ut.
                Soluta est dolorum incidunt iure, voluptas laborum consequatur
                esse, error libero nesciunt animi!
              </div>
            </div>
            <div className="col-4 p-2  inbox-right">
              <div
                className="p-2"
                style={{ border: "2px solid #fec400", borderRadius: "10px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                deleniti reiciendis ad officia natus cumque, repudiandae
                inventore nobis fugit pariatur? Quas exercitationem ipsum
                impedit amet debitis asperiores adipisci omnis quisquam officia.
                Esse, temporibus architecto? Esse debitis obcaecati placeat
                laborum necessitatibus temporibus quis minima nobis molestiae
                culpa nihil, fugiat quo incidunt qui quidem dolor repellendus
                sed veritatis animi dolorem. Aliquid tenetur explicabo officiis
                odit ipsa deleniti magni quas enim. Ipsa perferendis impedit
                iusto debitis, recusandae odio pariatur officia dignissimos
                sint. Accusantium placeat, optio pariatur vero iusto ullam ut.
                Soluta est dolorum incidunt iure, voluptas laborum consequatur
                esse, error libero nesciunt animi!
              </div>
            </div>
          </div>
        </div>
      </div>
    </InboxBack>
  );
}

const InboxBack = styled.div``;
