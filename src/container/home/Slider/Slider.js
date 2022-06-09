import React, { useState, useEffect } from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { sliderData } from './slider-data'
import { useNavigate } from 'react-router-dom'

import "./Slider.scss"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    const navigate = useNavigate()
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
    return (
      <div className="slider">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="slide" className="image" />
                  <img src={slide.imagebig} alt="slide" className="image2" />
                  <div className="content">
                    <h2>{slide.header}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button onClick={()=>{navigate('/user')}} className="">Get Started</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Slider;
  