import React from "react";
import bannerBaggy from "../../../static/homepage/banner-baggy.svg";
import bannerWinter from "../../../static/homepage/banner-winter.svg";
import bannerWomens from "../../../static/homepage/banner-womens.svg";
import bannerBestDeals from "../../../static/homepage/banner-best-deal.svg";
import bannerTrendy from "../../../static/homepage/banner-trendy.svg";
import "./middle-banner-section.css";

const MiddleBannerSection = () => {
  return (
    <div className="product-category-banner-container">
      <div className="product-category-banner-wrapper">
        <div className="product-category-section">
            <img src={bannerBaggy} />
            <img src={bannerWinter} />
        </div>
        <div className="product-category-section-2">
            <img src={bannerWomens} />
            <img src={bannerBestDeals} />
            <img src={bannerTrendy} />
        </div>
      </div>
    </div>
  );
};

export default MiddleBannerSection;
