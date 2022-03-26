import React from "react";
import CarouselHome from "./CarouselHome";
import HeaderSearchBar from "./HeaderSearchBar";
import ShowGroupPicFirst from "./ShowGroupPicFirst";

export default function Layout() {
  return (
    <div>
      <HeaderSearchBar></HeaderSearchBar>
      <CarouselHome></CarouselHome>
      <ShowGroupPicFirst></ShowGroupPicFirst>
    </div>
  );
}
