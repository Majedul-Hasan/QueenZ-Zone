import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product";

export default function ProductCard({
  allRating,
  id,
  productCards,
  productData,
}) {
  const [products, setProducts] = useState([]);

  const [oneProductcard, setOneProductCard] = useState([]);

  useEffect(() => {
    const filterPoster = productCards.filter(
      (dt) => dt.componentsSection.sName === id
    );
    console.log(productCards, " this is product cards : ", filterPoster);
    setOneProductCard(filterPoster);
  }, [productCards]);

  useEffect(() => {
    // filter  data
    if (!oneProductcard.length === false) {
      const filterData = productData.filter((allProducts) =>
        oneProductcard[0].componentsSection.components.some((v) =>
          allProducts._id.includes(v)
        )
      );

      setProducts(filterData);
    }
  }, [oneProductcard, productData, productCards]);

  let history = useHistory();

  const PushSingleProductpage = (props) => {
    history.push(
      `/Category/${props.ProductCategory}/${props.ProductName}/${props._id}`
    );
    console.log(props);
  };

  return (
    <div>
      {!oneProductcard.length === false && (
        <ProductGalleryCarouselBack
          className={`container pt-${oneProductcard[0].componentsSection.pt} pb-${oneProductcard[0].componentsSection.pb} mt-${oneProductcard[0].componentsSection.mt} mb-${oneProductcard[0].componentsSection.mb} `}
          style={{
            backgroundColor: `${oneProductcard[0].componentsSection.bgClr}`,
            borderRadius: `${oneProductcard[0].componentsSection.borRa}`,
          }}
        >
          <div class="d-flex justify-content-between">
            {oneProductcard[0].componentsSection.btnText !== "" && (
              <div className="mb-2">
                <h5 className="title">
                  <b>{oneProductcard[0].componentsSection.btnText}</b>
                </h5>
              </div>
            )}

            <div>
              <button
                style={{
                  display: "block",
                  backgroundColor: `${oneProductcard[0].componentsSection.btnBgClr}`,
                  border: "none",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
          <ScrollingCarousel style={{ overflowX: "scroll" }}>
            {!products.length === false &&
              products.map((p) => (
                <div className="col-5 col-md-2 ">
                  {" "}
                  <Product
                    PushSingleProductpage={PushSingleProductpage}
                    allRating={allRating}
                    dt={p}
                  ></Product>
                </div>
              ))}
          </ScrollingCarousel>
        </ProductGalleryCarouselBack>
      )}
    </div>
  );
}

const ProductGalleryCarouselBack = styled.div`
  button {
    display: none;
  }

  padding: 10px 10px;

  @media screen and (max-width: 550px) {
    .title {
      font-size: 15px;
    }
  }
`;
