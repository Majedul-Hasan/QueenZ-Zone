import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogoLoging from "../../Asset/Mask Group 1.png";
import "./Loading.css";
import ProductAllList from "./ProductAllList";

export default function CatagoryProduct({ setAniImg }) {
  const allProductList = [
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Black Black Black  Black Bag",
      prise: "57",
      discount: "42",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "4", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "4", "5"],
      reviewRate: "4",
    },
  ];
  let { Cname } = useParams();

  console.log("this is cname : ", Cname);

  // useState fetch product
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllProduct")
      .then((response) => response.json())
      .then((json) => {
        console.log("this is json ", json);

        const FilterPro = json.filter((Pro) => Pro.ProductCategory === Cname);

        setProducts(FilterPro);
      });
  }, []);

  const [oldSecData, setOldSecdata] = useState([]);

  console.log(oldSecData);

  useEffect(() => {
    const oldDataArray = JSON.parse(
      sessionStorage.getItem("addToShoppingCard")
    );

    if (oldDataArray === null) {
      sessionStorage.setItem("addToShoppingCard", JSON.stringify([]));
    }

    console.log("oldDataArray :::::", oldDataArray);
  }, []);

  useEffect(() => {
    if (oldSecData.length != 0) {
      sessionStorage.setItem("addToShoppingCard", JSON.stringify(oldSecData));
    }
  }, [oldSecData]);

  return (
    <div>
      <div></div>
      <div className=" mb-5 pd-5">
        <div
          className="row"
          style={{
            margin: "0px",
            padding: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {!products.length === true ? (
            <div className="d-flex justify-content-center">
              <div style={{}}>
                <img className="Loading" src={LogoLoging} alt="" />
                <div>
                  {" "}
                  <span className="d-flex justify-content-center">
                    Loading...
                  </span>
                </div>
              </div>
            </div>
          ) : (
            products.map((dt) => (
              <ProductAllList
                setAniImg={setAniImg}
                oldSecData={oldSecData}
                setOldSecdata={setOldSecdata}
                dt={dt}
              ></ProductAllList>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
