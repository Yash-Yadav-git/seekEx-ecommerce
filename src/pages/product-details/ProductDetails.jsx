import React from "react";
import productImage from "../../static/card-component/product-image-1.png";
import "./product-details-page.css";
const ProductDetails = () => {
  return (
    // <div>
      <main className="product-details-container">
        <aside className="product-details-images-wrapper">
          <img
            src={productImage}
            alt="product-image"
            className="product-details-image"
          />
          <img
            src={productImage}
            alt="product-image"
            className="product-details-image"
          />
          <img
            src={productImage}
            alt="product-image"
            className="product-details-image"
          />
          <img
            src={productImage}
            alt="product-image"
            className="product-details-image"
          />
        </aside>
        <section className="product-details-information">
          <h1>Product Details :</h1>
          <article className="product-details-list">
            <div className="product-details-title">
              <h3>Men Henley Neck </h3>
              <h3>Full Sleeve Red Wine 1</h3>
            </div>
            <h4>Price : &#8377;399</h4>
            <h4>Size:</h4>
            <div className="product-size-wrapper">
              <span className="product-sizes">S</span>
              <span className="product-sizes">M</span>
              <span className="product-sizes">L</span>
              <span className="product-sizes">XL</span>
              <span className="product-sizes">XL</span>
              <span className="product-sizes">XL</span>
              <span className="product-sizes">XL</span>
              <span className="product-sizes">XL</span>
            </div>
          </article>
          <button className="product-details-cta">
            <label>ADD TO CART</label>
          </button>
        </section>
      </main>
    // </div>
  );
};

export default ProductDetails;
