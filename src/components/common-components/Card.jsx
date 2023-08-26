import React from "react";
import "./card.css";
import image1 from "../../static/card-component/image1.png";
import shareIcon from "../../static/card-component/share_vector.png";
import wishlistIcon from "../../static/card-component/wishlist_vector.png";
import cartIcon from "../../static/card-component/cart_vector.png";

const Card = () => {
  return (
    <article class="card">
      <div className="card-image-wrapper">
        <img src={image1} alt="Product Image" class="card-image" />
        <div className="produt-cta-wrapper">
          <div className="prouct-cta">
            <img src={cartIcon} alt="Product Cta" class="product-cta-icon" />
          </div>
          <div className="prouct-cta">
            <img src={wishlistIcon} alt="Product Cta" class="product-cta-icon" />
          </div>
          <div className="prouct-cta">
            <img src={shareIcon} alt="Product Cta" class="product-cta-icon" />
          </div>
        </div>
      </div>
      <div class="card-description">
        <span class="description1">Men Henley Neck</span>
        <span class="description1">Full Sleeve Red Wine 1</span>
        <div className="price-wrapper">
          <span class="price">&#8377; 399 </span>
          <span class="discount">
            {" "}
            <s>&#8377; 1,299 </s>{" "}
          </span>
        </div>
      </div>
      <div class="card-sizes">
        <button class="size">S</button>
        <button class="size">M</button>
        <button class="size">L</button>
        <button class="size">XL</button>
        <button class="size">XXL</button>
      </div>
    </article>
  );
};

export default Card;
