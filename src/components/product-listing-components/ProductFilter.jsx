import React from "react";
import "./product-filter.css";

const ProductFilter = () => {
  return (
    <section className="product-filter-wrapper">
      <h1 className="product-filter-heading">Filters</h1>
      <hr className="product_filter_divider" />
      
        <div className="categories-wrapper">
          <h2 className="filter-heading">Price</h2>
          <div className="product-filter-ranges">
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              500 - 1000
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              1000 - 2000
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              2000+
            </label>
          </div>
        </div>
        <hr className="product_filter_divider" />

        <div className="categories-wrapper">
          <h2 className="filter-heading">Size</h2>
          <div className="product-filter-ranges">
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              M
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              S
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              L
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              XL
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              XXL
            </label>
          </div>
        </div>
        <hr className="product_filter_divider" />

        <div className="categories-wrapper">
          <h2 className="filter-heading">Price</h2>
          <div className="product-filter-ranges">
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              500 - 1000
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              1000 - 2000
            </label>
            <label>
              <input
                type="checkbox"
                name="price-checbox"
                className="price-checkbox"
              />{" "}
              2000+
            </label>
          </div>
        </div>
        <hr className="product_filter_divider" />

    </section>
  );
};

export default ProductFilter;
