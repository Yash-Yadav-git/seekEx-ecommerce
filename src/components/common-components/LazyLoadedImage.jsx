import React, { useEffect, useState, useRef } from "react";
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
        console.log(enteries[0].target, enteries[0].isIntersecting);
        if (enteries[0].isIntersecting) {
          setImageSource(image);
          observer.unobserve(imageRef.current);
        }
      }
    });

    if (imageRef && imageRef.current) {
      observer.observe(imageRef.current);
    }
  }, [imageSource]);

  return (
    <img
      ref={imageRef}
      src={imageSource}
      alt={alt || ""}
      className={className}
      width={width}
      height={height}
      loading={lazyloading ? "lazy" : "eager"}
    />
  );
};

export default LazyLoadedImage;
