import React, { useEffect } from "react";
import Navbar from "../../components/common-components/Navbar";
import ProductFilter from "../../components/product-listing-components/ProductFilter";
import Card from "../../components/common-components/Card";
import productImage1 from "../../static/card-component/product-image-1.png";
import productImage2 from "../../static/card-component/product-image-2.png";
import productImage3 from "../../static/card-component/product-image-3.png";
import productImage4 from "../../static/card-component/product-image-4.png";
import "./productlisting.css";

const ProductListingPage = () => {
  let cardArray = new Array(10).fill({ image: productImage1 });
  let cardArray1 = new Array(10).fill({ image: productImage2 });
  let cardArray2 = new Array(10).fill({ image: productImage3 });
  let cardArray3 = new Array(10).fill({ image: productImage4 });
  let finalArray = [...cardArray, ...cardArray1, ...cardArray2, ...cardArray3];
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      console.log("inside content loaded");
      let imageTags = document.querySelectorAll(".card-image");
    });

  }, []);
  return (
    <div className="container">
      <header className="navbar-wrapper">
        <Navbar />
      </header>

      <section className="product-listing-body">
        <ProductFilter />
        <div className="card-wrapper">
          {finalArray.map((x, index) => (
            <Card image={x.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;
