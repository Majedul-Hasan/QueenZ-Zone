import React, { useEffect, useState } from "react";
import CoverflowEffectCarousel from "../CoverflowEffectCarousel/CoverflowEffectCarousel";
import Deals from "../Deals/Deals";
import HomePageLoadingAni from "../HomePageLoadingAni/HomePageLoadingAni";
import ProductGalleryCarousel from "../ProductGalleryCarousel/ProductGalleryCarousel";
import ProductBanner from "../ProductsBanners/ProductBanner";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import StackedCenterCarousel from "../StackedCenterCarousel/StackedCenterCarousel";
import StaticBanner from "../StaticBanner/StaticBanner";
import SwipeableCarousel from "../SwipeableCarousel/SwipeableCarousel";
import ThreePoster from "../ThreePoster/ThreePoster";
import AllProductCatagaryShow from "./AllProductCatagaryShow";
import CarouselHome from "./CarouselHome";
import ProductPorster from "./CategoryOverView";

export default function Layout({
  setAniImg,
  seasonStroageProductFunction,
  allRating,
  category,
  productData,
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

  return (
    <div className="mb-5 pb-3">
      <div className="container px-0">
        <CarouselHome></CarouselHome>
      </div>

      <div
        className="container px-0 mt-0 mb-2 pt-2 "
        style={{ backgroundColor: "#dddddd" }}
      >
        <div className="p-3 pt-5" style={{ display: "none" }}>
          <span>Lorem ipsum dolor</span>
        </div>
        <img
          style={{ width: "100%" }}
          src={
            "https://f.nooncdn.com/mpcms/EN0002/assets/5d5ae7d1-722b-4a49-90ef-d7b0997daf10.png"
          }
          class="img-fluid "
          alt="..."
        ></img>
        <div className="d-flex" style={{ flexWrap: "wrap" }}>
          {calayoutOnly.map((ca) => (
            <div className="col-6 col-lg-3">
              {" "}
              <ProductPorster ca={ca}></ProductPorster>
            </div>
          ))}
        </div>
      </div>

      <Deals></Deals>

      <SpecialOffer></SpecialOffer>

      <StackedCenterCarousel></StackedCenterCarousel>

      <div>
        <ProductBanner></ProductBanner>
      </div>

      <div>
        <StaticBanner></StaticBanner>
      </div>

      <div>
        <SwipeableCarousel></SwipeableCarousel>
        <SwipeableCarousel></SwipeableCarousel>
      </div>

      <div>
        <ThreePoster></ThreePoster>
      </div>

      <div className="container ">
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

      <div>
        <ProductGalleryCarousel></ProductGalleryCarousel>
        <ProductGalleryCarousel></ProductGalleryCarousel>
      </div>

      {/* <ShowGroupPicFirst></ShowGroupPicFirst>  */}
      {/* <DeliveryFee></DeliveryFee> */}

      <div className="container px-0">
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
      </div>
    </div>
  );
}
