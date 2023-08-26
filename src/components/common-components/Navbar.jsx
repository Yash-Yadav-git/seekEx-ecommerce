import React from "react";
import menuItemIcon from "../../static/navbar-component/menu-item-icon.svg";
import searcIcon from "../../static/navbar-component/search-icon.svg";
import wishListIcon from "../../static/navbar-component/wishlist-icon.svg";
import cartIcon from "../../static/navbar-component/cart-icon.svg";
import profileIcon from "../../static/navbar-component/profile-icon1.svg";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <img src={menuItemIcon} alt="menu-item-nav" className="menu-item-icon" />
      <h1 className="nav-heading">LOGO HERE</h1>
      <div className="nav-cta-icons">
        <img src={searcIcon} alt="search-button" />
        <img src={wishListIcon} alt="wishList-button" />
        <img src={cartIcon} alt="cart-button" />
        <img src={profileIcon} alt="profile-button" />
      </div>
    </nav>
  );
};

export default Navbar;
