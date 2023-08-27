import React from "react";
import categoryImage from "../../static/homepage/category-image-1.svg";
import womenWearImage from '../../static/homepage/category-womens-wear.svg'
import winterCollection from '../../static/homepage/category-winter-collection.svg'
import hoodie from '../../static/homepage/category-hoodie.svg'
import polo from '../../static/homepage/category-polo.svg'
import fullSleeves from '../../static/homepage/category-full-sleeves.svg'
import "./categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-item">
        <img src={categoryImage} alt={categoryImage} />
        <span>Mens T-shirt</span>
      </div>
      <div className="categories-item">
        <img src={womenWearImage} alt={categoryImage} />
        <span>Women's wear</span>
      </div>
      <div className="categories-item">
        <img src={winterCollection} alt={categoryImage} />
        <span>Winter Collection</span>
      </div>
      <div className="categories-item">
        <img src={hoodie} alt={categoryImage} />
        <span>Hooded T-Shirts</span>
      </div>
      <div className="categories-item">
        <img src={polo} alt={categoryImage} />
        <span>Polo Neck T-Shirts</span>
      </div>
      <div className="categories-item">
        <img src={fullSleeves} alt={categoryImage} />
        <span>Full Sleeves T-Shirts</span>
      </div>
    </div>
  );
};

export default Categories;
