import React from "react";
import logo from "../assets/img/logos/logo_yard_sale.svg"
import shopcart from "../assets/img/icons/icon_shopping_cart.svg"
import iconmenu from "../assets/img/icons/icon_menu.svg"
import "../styles/Header.scss"

const Header = () => {
  return (
    <nav>
      <img src={iconmenu} alt="menu" className="menu" />
      <div className="navbar-left">
              <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={shopcart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
