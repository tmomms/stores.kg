import React, { useRef } from 'react';
import cardImg from "../images/card-img-iphone.png";
import Cardg from './mainContentCardG';
import scrollArrow from "../icons/scroll_arrow.png";

// import Cardg from './mainContentCardG';
// import cardImg from "../images/card-img-iphone.png";
 

export function ScrollButtonsMain() {
  const containerRef = useRef(null);
  const handleScroll = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div ref={containerRef} className="scroll_container">
      <button className='scroll_button scroll_arrow_main' onClick={() => handleScroll(-100)}>
      <img className="scroll_arrow_img" src={scrollArrow} alt="arrowleft" />
      </button>
      <button className='scroll_button scroll_arrow_modal_main' onClick={() => handleScroll(100)}>
      <img className="scroll_arrow_img" src={scrollArrow} alt="arrowright" />
      </button>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
                  <Cardg src={cardImg} ProductText='iphone 13 pro max' prise="85,000"/>
    </div>
  );
}

export default ScrollButtonsMain;
