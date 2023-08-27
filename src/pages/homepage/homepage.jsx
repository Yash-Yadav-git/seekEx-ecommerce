import React from "react";
import Banner from "../../components/common-components/Banner";
import banner from "../../static/homepage/banner.svg";
import Header from "../../components/common-components/Header";
import Categories from "../../components/common-components/Categories";

const Homepage = () => {
  return (
      <div className="hompage-container">
          <Header />
      <Banner image={banner} />
      <Categories />
    </div>
  );
};

export default Homepage;
