import "./card.css";
import shareIcon from "../../static/card-component/share_vector.png";
import wishlistIcon from "../../static/card-component/wishlist_vector.png";
import cartIcon from "../../static/card-component/cart_vector.png";
import placeholderImage from "../../static/card-component/placeholder-main-image.png";
import LazyLoadedImage from "./LazyLoadedImage";
import { useEffect } from "react";
import { useRef } from "react";

const Card = ({ image }) => {

  const cardRef = useRef()

  useEffect(() => { 
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
      childList: true,
      attributes: true
    };

    const observer = new MutationObserver((entries) => {
      console.log('Inside callback funct')
      entries.forEach((entry) => {
        console.log('array called')
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          console.log('Class list added',entry.target.classList)
          observer.unobserve(entry.target);
        }
      });
    });

    if (cardRef.current) {
      console.log('Inside if cardRef')
      // observer.observe(cardRef.current);
    }


    return () => {
      observer.disconnect();
    };


  },[])

  return (
    <article ref={cardRef} class="card">
      <div className="card-image-wrapper">
        <LazyLoadedImage
          lazyloading={true}
          image={image}
          placeholderImage={placeholderImage}
          alt="Product Image"
          className="card-image"
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
