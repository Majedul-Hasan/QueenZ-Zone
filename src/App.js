import { SnackbarProvider } from "notistack";
import React, { createContext, useEffect, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import HeaderSearchBar from "../src/Components/Home/HeaderSearchBar";
import Layout from "../src/Components/Home/Layout";
import "./App.css";
import CatagoryProduct from "./Components/CategoryPoduct/CatagoryProduct";
import MainDashboard from "./Components/Dashboard/MainDashboard/MainDashboard";
import EditOrderCommingSoon from "./Components/EditOrderCommingSoon/EditOrderCommingSoon";
import FavoritePage from "./Components/Favorite/FavoritePage";
import MyAccount from "./Components/MyAccount/MyAccount";
import MyMessage from "./Components/MyMessage/MyMessage";
import NaviBar from "./Components/NaviBar/NaviBar";
import Order from "./Components/Order/Order";
import OrderPage from "./Components/OrderPage/OrderPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ShoppingCardPage from "./Components/ShoppinfCard/ShoppingCardPage";
import SingleProdductPage from "./Components/SingleProductPage/SingleProdductPage";

// user info create context
export const UserInfoContext = createContext();

function App() {
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

  // drilling image for animation
  const setAniImg = (props) => {
    console.log("this is app js for animation product picture : ", props);
    setSeasonStroageProductlist(props.dt);
    setProductShowAnimation(props.firstImgs);
  };

  const seasonStroageProductFunction = (props) => {
    console.log("this is season stroage product : ", props);
  };

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
                  seasonStroageProductFunction={seasonStroageProductFunction}
                  setAniImg={setAniImg}
                ></Layout>
                <NaviBar
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>
              <PrivateRoute path="/Favorite">
                <HeaderSearchBar></HeaderSearchBar>
                <FavoritePage></FavoritePage>
                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </PrivateRoute>
              <Route exact path="/Home">
                <HeaderSearchBar></HeaderSearchBar>
                <Layout setAniImg={setAniImg}></Layout>
                <NaviBar
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>
              <Route exact path="/Category">
                <HeaderSearchBar></HeaderSearchBar>
                <Layout></Layout>
                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>
              <Route exact path="/Category/:Category/:PNAME/:PID">
                <HeaderSearchBar></HeaderSearchBar>
                <SingleProdductPage setAniImg={setAniImg}></SingleProdductPage>

                <NaviBar
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>
              <Route exact path="/Edit/EditMyOrder/:ONumber">
                <HeaderSearchBar></HeaderSearchBar>
                {/* <EditOrder></EditOrder> */}
                <EditOrderCommingSoon></EditOrderCommingSoon>
                <NaviBar
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>

              <Route path="/MyMessage">
                <HeaderSearchBar></HeaderSearchBar>
                <MyMessage></MyMessage>
                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>
              <Route path="/ShoppingCard">
                <HeaderSearchBar></HeaderSearchBar>
                <ShoppingCardPage></ShoppingCardPage>

                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>

              <Route path="/MyAccount">
                <HeaderSearchBar></HeaderSearchBar>
                <MyAccount></MyAccount>
                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>
              <PrivateRoute path="/Order">
                <HeaderSearchBar></HeaderSearchBar>
                <Order></Order>
                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </PrivateRoute>
              <PrivateRoute path="/UserOrderPage">
                <HeaderSearchBar></HeaderSearchBar>
                <OrderPage></OrderPage>
                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </PrivateRoute>
              <Route path="/Category/:Cname">
                <HeaderSearchBar></HeaderSearchBar>
                <CatagoryProduct setAniImg={setAniImg}></CatagoryProduct>
                <NaviBar
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
                    pageId="107458131944956"
                    appId="375532847792797"
                  />
                </div>
              </Route>
              <Route path="/Dashboard">
                <MainDashboard></MainDashboard>
              </Route>

              <Route path="*">
                <HeaderSearchBar></HeaderSearchBar>

                <NaviBar></NaviBar>
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
                    pageId="107458131944956"
                    appId="375532847792797"
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
