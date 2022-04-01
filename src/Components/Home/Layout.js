import React from "react";
import CarouselHome from "./CarouselHome";
import ShowGroupPicFirst from "./ShowGroupPicFirst";
import ShowProductCategory from "./ShowProductCategory";

export default function Layout() {
  return (
    <div>
      <CarouselHome></CarouselHome>
      <ShowGroupPicFirst></ShowGroupPicFirst>
      <ShowProductCategory></ShowProductCategory>
    </div>
  );
}
