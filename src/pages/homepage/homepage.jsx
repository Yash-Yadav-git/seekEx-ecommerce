import React from "react";
import Banner from "../../components/common-components/Banner";
import banner1 from "../../static/homepage/banner.png";
import Header from "../../components/common-components/Header";

const Homepage = () => {
  return (
      <div className="hompage-container">
          <Header />
      <Banner image={banner1} />
    </div>
  );
};

export default Homepage;
