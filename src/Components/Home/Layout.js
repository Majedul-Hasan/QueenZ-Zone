import React, { useEffect, useState } from "react";
import DeliveryFee from "../DeliveryFee/DeliveryFee";
import AllProductCatagaryShow from "./AllProductCatagaryShow";
import CarouselHome from "./CarouselHome";
import ShowGroupPicFirst from "./ShowGroupPicFirst";

export default function Layout({ setAniImg }) {
  // category

  const [category, sstcategory] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/queenZoneCategoryRead")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       sstcategory(json);
  //       console.log("tyhis is catttttttt :;;  ", json);
  //     });
  // }, []);

  const [calayout, setCalayout] = useState();

  useEffect(() => {
    // Update the document title using the browser API
    fetch(
      "https://glacial-shore-36532.herokuapp.com/queenZoneCategoryLayoutRead"
    )
      .then((response) => response.json())
      .then((json) => {
        setCalayout(json[0].layout);
        sstcategory(json[0].layout);
        console.log("this is layout ", json[0].layout);
        console.log("this is caaatagory : ", category);
      });
  }, []);

  return (
    <div className="mb-5 pb-3">
      <CarouselHome></CarouselHome>
      <ShowGroupPicFirst></ShowGroupPicFirst>
      <DeliveryFee></DeliveryFee>
      {category.map((ca) => (
        <AllProductCatagaryShow
          ca={ca}
          setAniImg={setAniImg}
        ></AllProductCatagaryShow>
      ))}
    </div>
  );
}
