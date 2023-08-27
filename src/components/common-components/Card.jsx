import "./card.css";
import shareIcon from "../../static/card-component/share_vector.png";
import wishlistIcon from "../../static/card-component/wishlist_vector.png";
import cartIcon from "../../static/card-component/cart_vector.png";
import placeholderImage from "../../static/card-component/placeholder-main-image.png";
import LazyLoadedImage from "./LazyLoadedImage";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Card = ({ image }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const cardRef = useRef();
  
  const addHoverClass = () => {
    setIsImageHovered(true);
  };

  const removeHoverClass = () => {
    setIsImageHovered(false);
  };

  return (
    <article ref={cardRef} class="card">
      <div
        className="card-image-wrapper"
        onMouseEnter={addHoverClass}
        onMouseLeave={removeHoverClass}
      >
        <LazyLoadedImage
          lazyloading={true}
          image={image}
          placeholderImage={placeholderImage}
          alt="Product Image"
          className={!isImageHovered ? "card-image" : `card-image image-blur`}
          width="264px"
          height="412px"
        />
        <div className="produt-cta-wrapper">
          <div className="prouct-cta">
            <img src={cartIcon} alt="Product Cta" class="product-cta-icon" />
          </div>
          <div className="prouct-cta">
            <img
              src={wishlistIcon}
              alt="Product Cta"
              class="product-cta-icon"
            />
          </div>
          <div className="prouct-cta">
            <img src={shareIcon} alt="Product Cta" class="product-cta-icon" />
          </div>
        </div>
      </div>
      <div class="card-description">
        <span class="description1">Men Henley Neck </span>
        <span class="description1">Men Henley Neck </span>
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
