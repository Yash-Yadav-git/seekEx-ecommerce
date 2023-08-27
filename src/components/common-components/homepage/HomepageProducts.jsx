import React from "react";
import './homepageproducts.css'
import Card from "../Card";

const HomepageProducts = ({ imageArray = [],title = "" }) => {
  return (
    <section className="trednig-product-section">
      <div className="wrapper">
        <div className="trending-product-heading">
          <div className="line"> </div>
          <h1>{title}</h1>
          <div className="line"> </div>
        </div>
        <div className="homepage-card-wrapper">
          {imageArray.map((x) => (
            <Card image={x.image} />
          ))}
        </div>
        <button className="trending-product-cta">View All</button>
      </div>
    </section>
  );
};

export default HomepageProducts;
