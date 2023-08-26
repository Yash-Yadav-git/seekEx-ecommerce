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
  const [isImageHovered, setIsImageHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      if (Array.isArray(enteries)) {
        enteries.map((entry) => {
          if (entry.isIntersecting) {
            setImageSource(image);
            entry.target.classList.add("animate");
            console.log('Class list added', entry.target.classList)
            observer.unobserve(imageRef.current);
          }
         })
      }
    });

    if (imageRef && imageRef.current) {
      observer.observe(imageRef.current);
    }


  }, [imageSource]);
  const addHoverClass = () => { 
    // imageRef.current.classList.add('image-blur')
    setIsImageHovered(true)
  }

  const removeHoverClass = () => { 
    // imageRef.current.classList.remove('image-blur')
    setIsImageHovered(false)
  }

  return (
    <img
      ref={imageRef}
      src={imageSource}
      alt={alt || ""}
      className={!isImageHovered ? `${className}` : `${className} image-blur`}
      width={width}
      height={height}
      loading={lazyloading ? "lazy" : "eager"}
      onMouseEnter={addHoverClass}
      onMouseLeave={removeHoverClass}
    />
  );
};

export default LazyLoadedImage;
