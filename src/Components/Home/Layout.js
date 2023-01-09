import React, { useEffect, useState } from "react";
import CoverflowEffectCarousel from "../CoverflowEffectCarousel/CoverflowEffectCarousel";
import Deals from "../Deals/Deals";
import ProductCard from "../ProductCard/ProductCard";
import ProductGalleryCarousel from "../ProductGalleryCarousel/ProductGalleryCarousel";
import ProductBanner from "../ProductsBanners/ProductBanner";

import HomePageLoadingAni from "../HomePageLoadingAni/HomePageLoadingAni";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import StackedCenterCarousel from "../StackedCenterCarousel/StackedCenterCarousel";
import StaticBanner from "../StaticBanner/StaticBanner";
import SwipeableCarousel from "../SwipeableCarousel/SwipeableCarousel";
import ThreePoster from "../ThreePoster/ThreePoster";
import AllProductCatagaryShow from "./AllProductCatagaryShow";
import CarouselHome from "./CarouselHome";
import CategoryOverViewBack from "./CategoryOverViewBack";

export default function Layout({
  setAniImg,
  seasonStroageProductFunction,
  allRating,
  category,
  productData,
  homePageLayout,
}) {
  // category

  const [calayoutOnly, setCaleyoutOnly] = useState([]);

  // useEffect(() => {
  //   fetch("https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       sstcategory(json);
  //       console.log("tyhis is catttttttt :;;  ", json);
  //     });
  // }, []);

  useEffect(() => {
    // Update the document title using the browser API
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is new category => ", json);
        setCaleyoutOnly(json);
      });
  }, []);

  const [carousel, setCarousel] = useState([]);
  const [productCards, setProductCards] = useState([]);
  const [productPoster, setProductPoster] = useState([]);
  const [staticBanner, setStaticBanner] = useState([]);
  const [SwipeableCarouselAll, setSwipeableCarousel] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [top20, setSetTop20] = useState([]);

  // fetch carousel
  useEffect(() => {
    // carousel
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadComponentsSection"
    )
      .then((response) => response.json())
      .then((json) => {
        setCarousel(json);
      });

    //  product cards

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenzZoneReadProductCards"
    )
      .then((response) => response.json())
      .then((json) => {
        setProductCards(json);
      });

    // product's poster
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadProductPoster"
    )
      .then((response) => response.json())
      .then((json) => {
        setProductPoster(json);
      });

    // static banner
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadStaticPoster"
    )
      .then((response) => response.json())
      .then((json) => {
        setStaticBanner(json);
      });

    // Swipeable Carousel
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadSwipeableCarousel"
    )
      .then((response) => response.json())
      .then((json) => {
        setSwipeableCarousel(json);
        console.log("carousel -> ", json);
      });

    // Swipeable Carousel
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
    )
      .then((response) => response.json())
      .then((json) => {
        setCategorys(json);
        console.log("carousel -> ", json);
      });

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadTop20"
    )
      .then((response) => response.json())
      .then((json) => {
        setSetTop20(json);
      });
  }, []);

  return (
    <div className="mb-5 pb-3">
      {homePageLayout?.map((singleHomePageLayout) => (
        <div>
          {console.log("this is home page Layout  : ", singleHomePageLayout)}

          {singleHomePageLayout.type === "CarouselSection" && (
            <div className="container px-0">
              <CarouselHome
                id={singleHomePageLayout.componentId}
                carousel={carousel}
              ></CarouselHome>
            </div>
          )}

          {singleHomePageLayout.type === "ProductsPoster" && (
            <div>
              <CategoryOverViewBack
                id={singleHomePageLayout.componentId}
                productPoster={productPoster}
              ></CategoryOverViewBack>
            </div>
          )}

          {singleHomePageLayout.type === "StaticBanner" && (
            <div>
              <div>
                <StaticBanner
                  staticBanner={staticBanner}
                  id={singleHomePageLayout.componentId}
                ></StaticBanner>
              </div>
            </div>
          )}

          {singleHomePageLayout.type === "SwipeableCarousel" && (
            <div>
              <div>
                <SwipeableCarousel
                  SwipeableCarouselAll={SwipeableCarouselAll}
                  id={singleHomePageLayout.componentId}
                ></SwipeableCarousel>
              </div>
            </div>
          )}

          {singleHomePageLayout.type === "productCards" && (
            <div>
              <div className="container px-0">
                <ProductCard
                  productData={productData}
                  productCards={productCards}
                  id={singleHomePageLayout.componentId}
                  allRating={allRating}
                ></ProductCard>
              </div>
            </div>
          )}

          {singleHomePageLayout.type === "Category" && (
            <div>
              <div className="container px-0">
                <AllProductCatagaryShow
                  categorys={categorys}
                  top20={top20}
                  id={singleHomePageLayout.componentId}
                  allRating={allRating}
                  productData={productData}
                  ca={singleHomePageLayout.Category}
                  seasonStroageProductFunction={seasonStroageProductFunction}
                  setAniImg={setAniImg}
                ></AllProductCatagaryShow>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* loading */}
      {!homePageLayout.length === true && (
        <div>
          <div>
            <HomePageLoadingAni></HomePageLoadingAni>
            <HomePageLoadingAni></HomePageLoadingAni>
            <HomePageLoadingAni></HomePageLoadingAni>
            <HomePageLoadingAni></HomePageLoadingAni>
            <HomePageLoadingAni></HomePageLoadingAni>
            <HomePageLoadingAni></HomePageLoadingAni>
            <HomePageLoadingAni></HomePageLoadingAni>
            <HomePageLoadingAni></HomePageLoadingAni>
          </div>
        </div>
      )}

      <div style={{ display: "none" }}>
        <Deals></Deals>
      </div>

      <div style={{ display: "none" }}>
        <SpecialOffer></SpecialOffer>
      </div>

      <div style={{ display: "none" }}>
        <StackedCenterCarousel></StackedCenterCarousel>
      </div>

      <div style={{ display: "none" }}>
        <ProductBanner></ProductBanner>
      </div>

      <div style={{ display: "none" }}>
        <ThreePoster></ThreePoster>
      </div>

      <div className="container " style={{ display: "none" }}>
        <div className="row ">
          <div className="col-md-6 col-sm-12 px-0 mx-0">
            <CoverflowEffectCarousel></CoverflowEffectCarousel>
          </div>
          <div className="col-md-6 col-sm-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            magni nulla nihil vitae laboriosam dignissimos dicta aliquam dolores
            autem odit quaerat neque, animi nemo ut sint facilis ipsa. Libero
            aspernatur laudantium quisquam soluta sequi iusto! Vitae magnam
            fugit suscipit est provident ea ratione temporibus minus! Debitis
            veritatis iste amet, consectetur itaque dignissimos quos
            perspiciatis mollitia magni minus alias voluptate quis laborum nulla
            vitae incidunt distinctio illo iusto consequatur adipisci deleniti
            et quia repellendus similique! Incidunt id distinctio exercitationem
            alias assumenda laudantium obcaecati qui eligendi, doloribus omnis
            eum asperiores quisquam porro dolores libero ipsa! Aliquid quibusdam
            illum, nisi dolores dolorum quos tempora quia numquam sequi eveniet.
            Mollitia exercitationem sunt fugit, quaerat nostrum iusto! Saepe hic
            maxime natus omnis voluptatibus dolor ullam possimus, nihil nisi
            labore voluptatum quos explicabo sequi! Ex accusantium eligendi
            optio nam in. Dignissimos eligendi eaque quae doloremque,
            voluptatum, officia necessitatibus ipsa dolores voluptatem veritatis
            unde atque! Similique qui quam dolores culpa quaerat officia
            voluptatem, quas provident ullam pariatur consequatur iusto autem
            illo quasi voluptate aspernatur quidem dolor rerum eos tempore
            tempora esse laborum nihil nisi? Obcaecati, quo eos aut minus
            consequatur reprehenderit molestiae eaque accusamus nihil repellat
            corrupti quia ipsum animi sed suscipit blanditiis quam esse sapiente
            dolorum.
          </div>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <ProductGalleryCarousel></ProductGalleryCarousel>
        <ProductGalleryCarousel></ProductGalleryCarousel>
      </div>

      {/* <ShowGroupPicFirst></ShowGroupPicFirst>  */}
      {/* <DeliveryFee></DeliveryFee> */}

      {/* old product cate */}
      {/* <div className="container px-0">
            {!category.length === false ? (
              category.map((ca) => (
                <AllProductCatagaryShow
                  allRating={allRating}
                  productData={productData}
                  ca={ca}
                  seasonStroageProductFunction={seasonStroageProductFunction}
                  setAniImg={setAniImg}
                ></AllProductCatagaryShow>
              ))
            ) : (
              <div>
                <HomePageLoadingAni></HomePageLoadingAni>
                <HomePageLoadingAni></HomePageLoadingAni>
                <HomePageLoadingAni></HomePageLoadingAni>
                <HomePageLoadingAni></HomePageLoadingAni>
                <HomePageLoadingAni></HomePageLoadingAni>
                <HomePageLoadingAni></HomePageLoadingAni>
                <HomePageLoadingAni></HomePageLoadingAni>
                <HomePageLoadingAni></HomePageLoadingAni>
              </div>
            )}
      </div> */}
    </div>
  );
}
