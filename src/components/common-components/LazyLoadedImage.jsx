import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const LazyLoadedImage = ({
  image,
  placeholderImage,
  alt,
  className,
  width,
  height,
  lazyloading,
}) => {
  const [imageSource, setImageSource] = useState(placeholderImage);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      if (Array.isArray(enteries)) {
        enteries.map((entry) => {
          if (entry.isIntersecting) {
            setImageSource(image);
            entry.target.classList.add("animate");
            console.log("Class list added", entry.target.classList);
            observer.unobserve(imageRef.current);
          }
        });
      }
    });

    if (imageRef && imageRef.current) {
      observer.observe(imageRef.current);
    }
  }, [imageSource]);
  const hanldeImageRedirection = () => {};
  return (
    <Link to="product-details">
      <img
        ref={imageRef}
        src={imageSource}
        alt={alt || ""}
        className={className}
        width={width}
        height={height}
        loading={lazyloading ? "lazy" : "eager"}
      />
    </Link>
  );
};

export default LazyLoadedImage;
