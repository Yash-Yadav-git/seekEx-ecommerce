import React from "react";
import Navbar from "../../components/common-components/Navbar";
import ProductFilter from "../../components/product-listing-components/ProductFilter";
import Card from "../../components/common-components/Card";
import "./productlisting.css";

const ProductListingPage = () => {
  let cardArray = new Array(50).fill({});
  console.log(cardArray.length, cardArray);
  return (
    <div className="container">
      <header className="navbar-wrapper">
        <Navbar />
      </header>

      <section className="product-listing-body">
        <ProductFilter />
        <div className="card-wrapper">
          {cardArray.map(() => (
            <Card />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;
