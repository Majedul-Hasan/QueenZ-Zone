import { SnackbarProvider } from "notistack";
import React, { createContext, useEffect, useRef, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import io from "socket.io-client";
import HeaderSearchBar from "../src/Components/Home/HeaderSearchBar";
import Layout from "../src/Components/Home/Layout";
import "./App.css";
import CatagoryProduct from "./Components/CategoryPoduct/CatagoryProduct";
import CreatePage from "./Components/CreatePage/CreatePage";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import EditOrderCommingSoon from "./Components/EditOrderCommingSoon/EditOrderCommingSoon";
import FavoritePage from "./Components/Favorite/FavoritePage";
import MyAccount from "./Components/MyAccount/MyAccount";
import MyMessage from "./Components/MyMessage/MyMessage";
import NaviBar from "./Components/NaviBar/NaviBar";
import { default as Order } from "./Components/Order/Order";
import OrderPage from "./Components/OrderPage/OrderPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ShoppingCardPage from "./Components/ShoppinfCard/ShoppingCardPage";
import SingleProdductPage from "./Components/SingleProductPage/SingleProdductPage";
import globeSocketIo from "./globeVar ";

// user info create context
export const UserInfoContext = createContext();

function App() {
  const socket = useRef();
  socket.current = io(globeSocketIo);

  const [loggingUserInfo, setLoginUsserInfo] = useState({});

  const [vertical, setvertical] = useState("top");
  const [horizontal, sethorizontal] = useState("center");

  const [productShowAnimation, setProductShowAnimation] = useState();

  const [seasonStroageProductlist, setSeasonStroageProductlist] = useState([]);

  useEffect(() => {
    const seasonData = JSON.parse(sessionStorage.getItem("addToShoppingCard"));

    console.log("this is Season data  : ", seasonData);

    if (seasonStroageProductlist.length) {
      console.log("vhai kaj hoise :::::::;;");

      if (!seasonData.length === true) {
        sessionStorage.setItem(
          "addToShoppingCard",
          JSON.stringify([seasonStroageProductlist])
        );
      } else {
        sessionStorage.setItem(
          "addToShoppingCard",
          JSON.stringify([...seasonData, seasonStroageProductlist])
        );
      }
    }

    // setTimeout(function () {
    //   console.log("this is Season data  : ", seasonData);

    //   if (seasonData.length === true) {
    //     localStorage.setItem(
    //       "addToShoppingCard",
    //       JSON.stringify(seasonStroageProductlist)
    //     );
    //   }
    // }, 500);

    // if (seasonData === null || seasonData.length === false) {
    //   localStorage.setItem(
    //     "addToShoppingCard",
    //     JSON.stringify(seasonStroageProductlist)
    //   );
    // }
  }, [seasonStroageProductlist]);

  const [curentUserInfo, setCurrentUserInfo] = useState([]);

  const [callUseEffectForCurrentUserInfo, setcallUseEffectForCurrentUserInfo] =
    useState(false);

  //for local storage send data backend
  useEffect(() => {
    if (!localStorage.getItem("UserInfo") === true) {
      // user info data not found
      if (!localStorage.getItem("localVisitorNumber") === true) {
        // local visitor data not found
        localStorage.setItem(
          "localVisitorNumber",
          Math.floor(100000000 + Math.random() * 900000000)
        );

        // post data
        socket.current.emit("new-online-user", {
          activeUserInfo: "new",
          activeUserNumber: localStorage.getItem("localVisitorNumber"),
          oldUserInfo: null,
        });

        console.log("this is socket 1");
      } else {
        // local user data found

        // post data
        socket.current.emit("new-online-user", {
          activeUserInfo: "new",
          activeUserNumber: localStorage.getItem("localVisitorNumber"),
          oldUserInfo: null,
        });
        console.log("this is socket 2");
      }
    } else {
      // user data found
      // local user data found

      if (!localStorage.getItem("localVisitorNumber") === true) {
        localStorage.setItem(
          "localVisitorNumber",
          Math.floor(100000000 + Math.random() * 900000000)
        );

        // post data
        socket.current.emit("new-online-user", {
          activeUserInfo: "old",
          activeUserNumber: localStorage.getItem("localVisitorNumber"),
          oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
        });

        console.log("this is socket 3");
      } else {
        // post data
        socket.current.emit("new-online-user", {
          activeUserInfo: "old",
          activeUserNumber: localStorage.getItem("localVisitorNumber"),
          oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
        });
        console.log("this is socket 4");
      }
    }

    // ^^ for user info

    setCurrentUserInfo({
      activeUserInfo:
        JSON.parse(localStorage.getItem("UserInfo")) === null ? "new" : "old",
      activeUserNumber: localStorage.getItem("localVisitorNumber"),
      oldUserInfo: JSON.parse(localStorage.getItem("UserInfo")),
    });

    setcallUseEffectForCurrentUserInfo(false);
  }, [socket, callUseEffectForCurrentUserInfo]);

  //user message info
  const [userMessageInfo, setUserMessageInfo] = useState();

  // callUseEffectForUpdateMessage
  const [useEffectForUpdateMessage, setCallUseEffectForUpdateMessage] =
    useState(false);

  // userSenderInfo
  const [UserSenderInfo, setUserSenderInfo] = useState("");

  // update message
  // useEffect(() => {
  //   // get data
  //   socket.current.on("get-message", (userSenderInfo) => {
  //     console.log("this is update socket sender info  : ", userSenderInfo);
  //     setUserSenderInfo(userSenderInfo);
  //     setCallUseEffectForUpdateMessage(true);
  //   });
  // }, [socket]);

  // for inbox
  useEffect(() => {
    setTimeout(() => {
      let userInfoForLogin = JSON.parse(localStorage.getItem("UserInfo"));
      let userInfoForVisitorNumber = JSON.parse(
        localStorage.getItem("localVisitorNumber")
      );

      // console.log("this is app ja : ", userInfoForLogin);
      // console.log("this is app ja : ", userInfoForVisitorNumber);

      console.log(
        "this is update message : ",
        userInfoForLogin !== null
          ? userInfoForLogin.email
          : userInfoForVisitorNumber
      );

      setUserMessageInfo(
        userInfoForLogin !== null
          ? userInfoForLogin.email
          : userInfoForVisitorNumber
      );

      const userInfo =
        userInfoForLogin !== null || undefined
          ? userInfoForLogin.email
          : userInfoForVisitorNumber;
      //  console.log("this is update vhai vitore dukse ", UserSenderInfo);
      // if (UserSenderInfo == userInfo) {
      //   updateMessageFunction(userInfo);
      // }

      setCallUseEffectForUpdateMessage(false);
    });
  }, [useEffectForUpdateMessage]);

  // // all message
  // const [message, setMessage] = useState([]);

  // // get auto message
  // useEffect(() => {
  //   setTimeout(() => {
  //     let userInfoForLogin = JSON.parse(localStorage.getItem("UserInfo"));
  //     let userInfoForVisitorNumber = JSON.parse(
  //       localStorage.getItem("localVisitorNumber")
  //     );

  //     const userInfo =
  //       userInfoForLogin !== null ? userInfoForLogin : userInfoForVisitorNumber;
  //     updateMessageFunction(userInfo);
  //   });
  // }, []);

  // const updateMessageFunction = (props) => {
  //   fetch(
  //     `https://queenzzoneserver-production.up.railway.app/getInboxMessage?roomName=${props}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("this is update :", json);

  //       setMessage(json);
  //     });
  // };

  // drilling image for animation
  const setAniImg = (props) => {
    console.log("this is app js for animation product picture : ", props);
    setSeasonStroageProductlist(props.dt);
    setProductShowAnimation(props.firstImgs);
  };

  const seasonStroageProductFunction = (props) => {
    console.log("this is season storage product : ", props);
  };

  // ^ this is user message
  const [message, setMessage] = useState(false);

  // ^^  all user rating
  const [allRating, setAllRating] = useState([]);

  useEffect(() => {
    fetch(
      `https://queenzzoneserver-production.up.railway.app/queenZoneUserFindAllRating`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is all rating : ", json);

        setAllRating(json);
      });
  }, []);

  const [userScroll, setUserScroll] = useState(true);
  const [unSeenMsgUserScroll, setUnSeenMsgUserScroll] = useState({
    msg: "",
    state: false,
  });

  // useEffect(() => {
  //   console.log("this is useEffect for unseen msg -> ", unSeenMsgUserScroll);
  // }, [unSeenMsgUserScroll]);

  const [productData, setproductdata] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("this is all product fetch call -> ");
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindAllProduct"
    )
      .then((response) => response.json())
      .then((json) => {
        setproductdata(json);
        callCate();
        console.log("this is all product fetch -> ", json);
      });
  }, []);

  const [category, sstcategory] = useState([]);

  const callCate = () => {
    // Update the document title using the browser API
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryLayoutRead"
    )
      .then((response) => response.json())
      .then((json) => {
        sstcategory(json[0].layout);

        seasonStroageProductFunction(json[0].layout);
      });
  };

  const [homePageLayout, setHomePageLayout] = useState([]);

  // call home page layout
  useEffect(() => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadHomePageLayout"
    )
      .then((response) => response.json())
      .then((json) => {
        setHomePageLayout(json[0].homePageLayout);
      });
  }, []);

  /// === home page layout ====
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
    <div className="App">
      {/* home page layout */}
      <UserInfoContext.Provider value={[loggingUserInfo, setLoginUsserInfo]}>
        <Router basename="/QueenZ-Zone">
          <SnackbarProvider
            maxSnack={3}
            key={"top" + "center"}
            anchorOrigin={{ vertical, horizontal }}
          >
            <Switch>
              <Route exact path="/">
                <HeaderSearchBar></HeaderSearchBar>
                <Layout
                  carousel={carousel}
                  productCards={productCards}
                  productPoster={productPoster}
                  staticBanner={staticBanner}
                  SwipeableCarouselAll={SwipeableCarouselAll}
                  categorys={categorys}
                  top20={top20}
                  homePageLayout={homePageLayout}
                  category={category}
                  productData={productData}
                  seasonStroageProductFunction={seasonStroageProductFunction}
                  setAniImg={setAniImg}
                  allRating={allRating}
                ></Layout>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                  setAniImg={setAniImg}
                  productShowAnimation={productShowAnimation}
                  setProductShowAnimation={setProductShowAnimation}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <Route path="/Favorite">
                <HeaderSearchBar></HeaderSearchBar>
                <FavoritePage></FavoritePage>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <Route exact path="/Home">
                <HeaderSearchBar></HeaderSearchBar>
                <Layout
                  carousel={carousel}
                  productCards={productCards}
                  productPoster={productPoster}
                  staticBanner={staticBanner}
                  SwipeableCarouselAll={SwipeableCarouselAll}
                  categorys={categorys}
                  top20={top20}
                  homePageLayout={homePageLayout}
                  category={category}
                  productData={productData}
                  seasonStroageProductFunction={seasonStroageProductFunction}
                  setAniImg={setAniImg}
                  allRating={allRating}
                ></Layout>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                  setAniImg={setAniImg}
                  productShowAnimation={productShowAnimation}
                  setProductShowAnimation={setProductShowAnimation}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <Route exact path="/Category">
                <HeaderSearchBar></HeaderSearchBar>
                <Layout
                  carousel={carousel}
                  productCards={productCards}
                  productPoster={productPoster}
                  staticBanner={staticBanner}
                  SwipeableCarouselAll={SwipeableCarouselAll}
                  categorys={categorys}
                  top20={top20}
                  productData={productData}
                  homePageLayout={homePageLayout}
                  allRating={allRating}
                ></Layout>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <Route exact path="/Category/:Category/:PNAME/:PID">
                <HeaderSearchBar></HeaderSearchBar>
                <SingleProdductPage
                  allRating={allRating}
                  curentUserInfo={curentUserInfo}
                  setAniImg={setAniImg}
                ></SingleProdductPage>

                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                  setAniImg={setAniImg}
                  productShowAnimation={productShowAnimation}
                  setProductShowAnimation={setProductShowAnimation}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <Route exact path="/Edit/EditMyOrder/:ONumber">
                <HeaderSearchBar></HeaderSearchBar>
                {/* <EditOrder></EditOrder> */}
                <EditOrderCommingSoon></EditOrderCommingSoon>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                  setAniImg={setAniImg}
                  productShowAnimation={productShowAnimation}
                  setProductShowAnimation={setProductShowAnimation}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <Route exact path="/Page/:PageName/:PNumber">
                <HeaderSearchBar></HeaderSearchBar>
                {/* <EditOrder></EditOrder> */}
                <CreatePage></CreatePage>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                  setAniImg={setAniImg}
                  productShowAnimation={productShowAnimation}
                  setProductShowAnimation={setProductShowAnimation}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>

              <Route path="/MyMessage">
                <HeaderSearchBar></HeaderSearchBar>
                <MyMessage
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  unSeenMsgUserScroll={unSeenMsgUserScroll}
                  setUserScroll={setUserScroll}
                  curentUserInfo={curentUserInfo}
                  message={message}
                ></MyMessage>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
              </Route>
              <Route path="/ShoppingCard">
                <HeaderSearchBar></HeaderSearchBar>
                <ShoppingCardPage></ShoppingCardPage>

                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>

              <Route path="/MyAccount">
                <HeaderSearchBar></HeaderSearchBar>
                <MyAccount
                  setcallUseEffectForCurrentUserInfo={
                    setcallUseEffectForCurrentUserInfo
                  }
                ></MyAccount>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <PrivateRoute path="/Order">
                <HeaderSearchBar></HeaderSearchBar>
                <Order></Order>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </PrivateRoute>
              <PrivateRoute path="/UserOrderPage">
                <HeaderSearchBar></HeaderSearchBar>
                <OrderPage curentUserInfo={curentUserInfo}></OrderPage>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </PrivateRoute>
              <Route path="/Category/:Cname">
                <HeaderSearchBar></HeaderSearchBar>
                <CatagoryProduct
                  allRating={allRating}
                  setAniImg={setAniImg}
                ></CatagoryProduct>
                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                  setAniImg={setAniImg}
                  productShowAnimation={productShowAnimation}
                  setProductShowAnimation={setProductShowAnimation}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
              <Route path="/Dashboard">
                <MainDashboard></MainDashboard>
              </Route>

              <Route path="*">
                <HeaderSearchBar></HeaderSearchBar>

                <NaviBar
                  setUnSeenMsgUserScroll={setUnSeenMsgUserScroll}
                  userScroll={userScroll}
                  setMessage={setMessage}
                  curentUserInfo={curentUserInfo}
                ></NaviBar>
                <div>
                  <div>
                    <WhatsAppWidget
                      textReplyTime="Online Shopping"
                      companyName="Queenz Zone"
                      class="_1bpcM"
                      phoneNumber="966590519267"
                    />
                  </div>

                  <MessengerCustomerChat
                    pageId="109450594159775"
                    appId="897437511658333"
                  />
                </div>
              </Route>
            </Switch>
          </SnackbarProvider>
        </Router>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
