import React from "react";
import Cube from "react-3d-cube";

export default function ThreeDCubeEffect() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minus
      dolores doloribus voluptates. Possimus dicta officia veritatis, inventore
      asperiores quis!
      <div>
        <h1>react-3d-cube</h1>
        <h2>no children</h2>
        <div
          style={{
            width: 300,
            height: 300,
          }}
        >
          <Cube size={300} index="front" />
        </div>
        <h2>set children</h2>
        <div
          style={{
            width: 300,
            height: 300,
          }}
        >
          <Cube size={300} index="front">
            <img
              src={
                "https://andyyou.github.io/react-coverflow/images/album-4.png"
              }
              alt="front"
            />
            <img
              src={
                "https://andyyou.github.io/react-coverflow/images/album-4.png"
              }
              alt="right"
            />
            <img
              src={
                "https://andyyou.github.io/react-coverflow/images/album-4.png"
              }
              alt="back"
            />
            <img
              src={
                "https://andyyou.github.io/react-coverflow/images/album-4.png"
              }
              alt="left"
            />
            <img
              src={
                "https://andyyou.github.io/react-coverflow/images/album-4.png"
              }
              alt="top"
            />
            <img
              src={
                "https://andyyou.github.io/react-coverflow/images/album-4.png"
              }
              alt="bottom"
            />
          </Cube>
        </div>
      </div>
    </div>
  );
}
