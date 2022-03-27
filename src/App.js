import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderSearchBar from "../src/Components/Home/HeaderSearchBar";
import Layout from "../src/Components/Home/Layout";
import "./App.css";
import FavoritePage from "./Components/Favorite/FavoritePage";
import MyAccount from "./Components/MyAccount/MyAccount";
import MyMessage from "./Components/MyMessage/MyMessage";
import NaviBar from "./Components/NaviBar/NaviBar";
import ShoppingCardPage from "./Components/ShoppinfCard/ShoppingCardPage";
function App() {
  return (
    <div className="App">
      {/* home page layout */}
      <Router>
        <Switch>
          <Route exact path="/">
            <HeaderSearchBar></HeaderSearchBar>
            <Layout></Layout>
            <NaviBar></NaviBar>
          </Route>
          <Route exact path="/Home">
            <HeaderSearchBar></HeaderSearchBar>
            <Layout></Layout>
            <NaviBar></NaviBar>
          </Route>
          <Route exact path="/Category">
            <HeaderSearchBar></HeaderSearchBar>
            <Layout></Layout>
            <NaviBar></NaviBar>
          </Route>

          <Route path={`/MyMessage`}>
            <HeaderSearchBar></HeaderSearchBar>
            <MyMessage></MyMessage>
            <NaviBar></NaviBar>
          </Route>
          <Route path="/ShoppingCard">
            <HeaderSearchBar></HeaderSearchBar>
            <ShoppingCardPage></ShoppingCardPage>
            <NaviBar></NaviBar>
          </Route>
          <Route path="/Favorite">
            <HeaderSearchBar></HeaderSearchBar>
            <FavoritePage></FavoritePage>
            <NaviBar></NaviBar>
          </Route>
          <Route path="/MyAccount">
            <HeaderSearchBar></HeaderSearchBar>
            <MyAccount></MyAccount>
            <NaviBar></NaviBar>
          </Route>

          <Route path="*">
            <HeaderSearchBar></HeaderSearchBar>
            <Layout></Layout>
            <NaviBar></NaviBar>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
