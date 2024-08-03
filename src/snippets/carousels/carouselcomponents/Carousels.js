import React, { useState } from 'react';
import './Carousel.css';  // Make sure to import the CSS file

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  setTimeout(()=>{
    if(activeIndex === images.length - 1){
      setActiveIndex(0)
    }
    else{
      setActiveIndex(activeIndex + 1)
    }
  },[2000])

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div className="carousel__track">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
