import React, { useRef } from 'react';
import cardImg from "../images/card-img-iphone.png";
import CardgModal from './mainContentCardG';
import scrollArrow from "../icons/scroll_arrow.png";

// import Cardg from './mainContentCardG';
// import cardImg from "../images/card-img-iphone.png";
 

export function ScrollButtons() {
  const containerRef = useRef(null);
  const handleScroll = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div ref={containerRef} className="scroll_container">
      <button className='scroll_button scroll_arrow_modal_left' onClick={() => handleScroll(-100)}>
      <img className="scroll_arrow_img" src={scrollArrow} alt="arrowleft" />
      </button>
      <button className='scroll_button scroll_arrow_modal' onClick={() => handleScroll(100)}>
      <img className="scroll_arrow_img" src={scrollArrow} alt="arrowright" />
      </button>
      <CardgModal src={cardImg} ProductText={'iphone 11pro mini'} prise={"85.213"}/>
      <CardgModal src={cardImg} ProductText={'iphone 11pro mini'} prise={"85.213"}/>
      <CardgModal src={cardImg} ProductText={'iphone 11pro mini'} prise={"85.213"}/>
      <CardgModal src={cardImg} ProductText={'iphone 11pro mini'} prise={"85.213"}/>
      <CardgModal src={cardImg} ProductText={'iphone 11pro mini'} prise={"85.213"}/>
      <CardgModal src={cardImg} ProductText={'iphone 11pro mini'} prise={"85.213"}/>

    </div>
  );
}

export default ScrollButtons;
