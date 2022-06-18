import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <withRouter>
        <Header />
      </withRouter>{" "}
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/shop" component={ShopPage} />
        </Routes>
    </div>
  );
}

export default App;
