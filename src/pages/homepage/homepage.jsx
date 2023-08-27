import React from "react";
import Banner from "../../components/common-components/Banner";
import banner from "../../static/homepage/banner.svg";
import Header from "../../components/common-components/Header";
import Categories from "../../components/common-components/Categories";
import MiddleBannerSection from "../../components/common-components/mid-section/MiddleBannerSection";
import Card from "../../components/common-components/Card";
import productImage1 from "../../static/card-component/product-image-1.png";
import productImage2 from "../../static/card-component/product-image-2.png";
import productImage3 from "../../static/card-component/product-image-3.png";
import productImage4 from "../../static/card-component/product-image-4.png";
import bannerImage2 from "../../static/homepage/home-page-banner-2.svg";
import HomepageProducts from "../../components/common-components/homepage/HomepageProducts";
import productCollectionImage from "../../static/homepage/product-collection-image.svg";
import productCollectionStriped from "../../static/homepage/product-collection-image.svg";
import productCollectionRounded from "../../static/homepage/product-collection-striped.svg";
import productCollectionPrinted from "../../static/homepage/product-collection-round.svg";
import productCollectionOversized from "../../static/homepage/product-collection-oversized-1.svg";
import productCollectionHalfSleeves from "../../static/homepage/product-collection-half-sleeves-1.svg";
import banner3 from "../../static/homepage/banner-3.svg";

const Homepage = () => {
  let tredingProducts = [
    { image: productImage1 },
    { image: productImage2 },
    { image: productImage3 },
    { image: productImage4 },
    { image: productImage1 },
    { image: productImage2 },
    { image: productImage3 },
    { image: productImage4 },
  ];
  let featuredProducts = tredingProducts.slice(0, 4);
  const productCollectionImages = {};
  return (
    <div className="hompage-container">
      <Header />
      <Banner image={banner} />
      <Categories />
      <MiddleBannerSection />
      <HomepageProducts
        imageArray={tredingProducts}
        title={"Trending T-Shirts"}
      />
      <HomepageProducts
        imageArray={featuredProducts}
        title={"Featured Products"}
      />
      <Banner image={bannerImage2} />
      <HomepageProducts imageArray={featuredProducts} title={"New Products"} />
      <HomepageProducts
        imageArray={featuredProducts}
        title={"Best Selling Products"}
      />

      <div className="homepage-product-collection">
        <div className="homepgae-product-collection-wrapper">
          <div
            className="homepage-prcduct-collection-image-wrapper"
            style={{ backgroundImage: `url(${productCollectionImage})` }}
          >
            <div className="homepage-product-collection-text-wrapper">
              <span>Streetwear Collections</span>
            </div>
          </div>
          <div
            className="homepage-prcduct-collection-image-wrapper"
            style={{ backgroundImage: `url(${productCollectionStriped})` }}
          >
            <div className="homepage-product-collection-text-wrapper">
              <span>Streetwear Collections</span>
            </div>
          </div>
          <div
            className="homepage-prcduct-collection-image-wrapper"
            style={{ backgroundImage: `url(${productCollectionRounded})` }}
          >
            <div className="homepage-product-collection-text-wrapper">
              <span>Streetwear Collections</span>
            </div>
          </div>
          <div
            className="homepage-prcduct-collection-image-wrapper"
            style={{ backgroundImage: `url(${productCollectionPrinted})` }}
          >
            <div className="homepage-product-collection-text-wrapper">
              <span>Streetwear Collections</span>
            </div>
          </div>
          <div
            className="homepage-prcduct-collection-image-wrapper"
            style={{ backgroundImage: `url(${productCollectionOversized})` }}
          >
            <div className="homepage-product-collection-text-wrapper">
              <span>Streetwear Collections</span>
            </div>
          </div>
          <div
            className="homepage-prcduct-collection-image-wrapper"
            style={{ backgroundImage: `url(${productCollectionHalfSleeves})` }}
          >
            <div className="homepage-product-collection-text-wrapper">
              <span>Streetwear Collections</span>
            </div>
          </div>
        </div>
      </div>

      <Banner image={banner3} />
    </div>
  );
};

export default Homepage;
