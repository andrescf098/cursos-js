import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import AppContext from "../context/AppContext";
import icon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    !setToggleOrders();
    !setToggleMobileMenu();
    setToggle(!toggle);
  };

  const handleToggleOrders = () => {
    !setToggle();
    !setToggleMobileMenu();
    setToggleOrders(!toggleOrders);
  }

  const handleToggleMobileMenu = () => {
    !setToggle();
    !setToggleOrders();
    setToggleMobileMenu(!toggleMobileMenu);
  }

  return (
    <nav>
      <img src={icon} alt="menu" className="menu" onClick={ handleToggleMobileMenu } />
      {toggleMobileMenu && <MobileMenu />}
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <Link to={"/"}>All</Link>
          </li>
          <li>
            <Link to={"/"}>Clothes</Link>
          </li>
          <li>
            <Link to={"/"}>Electronics</Link>
          </li>
          <li>
            <Link to={"/"}>Furnitures</Link>
          </li>
          <li>
            <Link to={"/"}>Toys</Link>
          </li>
          <li>
            <Link to={"/"}>Others</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={ handleToggleOrders }
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
