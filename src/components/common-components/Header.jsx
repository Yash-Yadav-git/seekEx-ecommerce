import React from "react";
import Navbar from "./Navbar";
import callIcon from "../../static/homepage/call-icon.png";
import menuItemIcon from "../../static/navbar-component/menu-item-icon.svg";
import searcIcon from "../../static/navbar-component/search-icon.svg";
import wishListIcon from "../../static/navbar-component/wishlist-icon.svg";
import cartIcon from "../../static/navbar-component/cart-icon.svg";
import profileIcon from "../../static/navbar-component/profile-icon1.svg";
import './header.css'

const Navbar1 = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-1">
        <img src={menuItemIcon} alt="menu-item-nav" className="menu-item-icon" />
      </div>
      <h1 className="nav-heading">LOGO HERE</h1>
      <div className="nav-item-2">
        <img src={searcIcon} alt="search-button" />
        <img src={wishListIcon} alt="wishList-button" />
        <img src={cartIcon} alt="cart-button" />
        <img src={profileIcon} alt="profile-button" />
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="homepage-header-container">
      <nav className="homepage-heading">
          <span>Welcome to Our Store Hiscraves</span>        
        <div className="homepage-heading-details">
          <img src={callIcon} alt="call-icon" className="heading-call-icon" />
          <span>Call Us: 1234567890</span>
        </div>
      </nav>
      <Navbar />
    </div>
  );
};

export default Header;
