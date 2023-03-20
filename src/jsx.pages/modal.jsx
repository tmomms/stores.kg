// import { useState, useEffect } from "react";
import ScrollButtons from "./dragScroll";

import '../css/modal.css';
import '../css/main.css';


import StarIcon from "../jsx.pages/mainStarIcon";
import StarIconNone from "../jsx.pages/mainStarIconNone";


import cardImg from "../images/card-img-iphone.png";
import iphone from '../images/modal-iphone.png'
import scrollArrow from "../icons/scroll_arrow.png";



import React, { useRef } from 'react';

 

// export function ScrollButtons() {
//   const containerRef = useRef(null);

//   const handleScroll = (scrollOffset) => {
//     containerRef.current.scrollLeft += scrollOffset;
//   };

//   return (
//     <div ref={containerRef} style={{ display: 'flex', overflowX: 'scroll' }}>
//       <button className='scroll_button' onClick={() => handleScroll(-100)}>←</button>
//       <button className='scroll_button scroll_button1' onClick={() => handleScroll(100)}>→</button>
//       {/* здесь находится содержимое, которое вы хотите прокрутить */}
//     </div>
//   );
// }



export function CardgModal({src, ProductText, prise}) {
    return(
        <div className="modal_gorizontal_card" id='modal_gorizontal_cardID'>
        <div className="card_img_div">
        <svg width="20px" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
        <img className='card_img modal_card_img' src={src} alt="#"/>
        <div className="like_flex like_flex_gorizontal">
        <svg className="like_flex_svg like_flex_svg_gorizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.286 9c-3.009 0-4.207 5-6.571 5-1.057 0-1.74-.789-1.74-2s.684-2 1.74-2c.833 0 1.431.535 2.009 1.197l.622-.781c-.75-.766-1.526-1.416-2.631-1.416-1.599 0-2.715 1.227-2.715 3s1.116 3 2.715 3c3.002 0 4.203-5 6.571-5 1.057 0 1.739.789 1.739 2s-.683 2-1.739 2c-.832 0-1.43-.534-2.007-1.196l-.622.78c.749.766 1.525 1.416 2.629 1.416 1.599 0 2.714-1.227 2.714-3s-1.115-3-2.714-3z"/></svg>
        <p>127</p>
        </div>
        </div>
        <hr/>
        <div className='text_content_gorizontal'>
        <div className="prise_field prise_field_gorizontal">
                <p className='prise_field_gorizontal_p'>{prise}c</p>
                <p>90,000</p>
                <p>-48%</p>
            </div>
        <div className="product_info_gorizontal">
            <h3 className='product_info_h3'>{ProductText}</h3>
            <p className='product_info_p'>Небесный Синий 512 GB</p>
        </div>
        <div className="prise">
            <div className="star star_gorizontal">
                <StarIcon fill="#F58735" size="24px"/>
                <StarIcon fill="#F58735" size="24px"/>
                <StarIcon fill="#F58735" size="24px"/>
                <StarIconNone fill="#F58735" size="24px"/>
                <StarIconNone fill="#F58735" size="24px"/>
                321
            </div>
            <p className="green_text">в наличии (23)</p>
            <button className="buttons basket_button buttons_gorizontal modal_button">
            <svg className="basket_icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#fff" clip-rule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"/></svg>
            в корзину
            </button>
        </div>
        </div>
    </div>
    )
}



function Modal(props) {
    const {open, onClose} = props

    const [iterator, setIterator] = React.useState(0)

    function setIteratorMinus() {
        if (iterator <= 0){
            return iterator = 0} 
        else {setIterator(iterator-1)}}
        
    return(

        <div>

        {open && (
            <div className="blur">
            <div className="modal">
            <div className="add_basket">
            <div className="title">
            
            <h2>Товар успешно добавлен в корзину</h2>
            <svg onClick={onClose} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" 
            width='24px' height='24px' xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
            </div>
            <div className="modal_info">
            <div className="modal_container">
            <img src={iphone} alt="" />
            <div className="modal_p">
            <p className="inner_title">Смартфон Apple iPhone 13 Pro Max 512 ГБ, небесно-голубой</p>
            <p className="inner_second">Продавец: Softech.kg</p>
            </div>
            </div>
                    <div className="modal_prise">85.990<span>c</span></div>
                    </div>
                    <div className="modal_buttons">
                    <div className="modal_buttons1">
                    <button className="buttons modal_button">Купить сейчас</button>
                    <button className="buttons modal_button button_second_modal">Перейти к корзину</button>
                    <button className="buttons modal_button button_second_modal">Продолжить покупки</button>
                    </div>
                    <div className='modal_buttons2'>
                    <button onClick={setIteratorMinus} className="buttons modal_iterator">
                    <span className="modal_iterator_minus"></span>
                    </button>
                    <p>{iterator}</p>
                    <button onClick={()=>{setIterator(iterator+1)}} className="buttons modal_iterator">
                    <span className="modal_iterator_plus"></span>
                    </button>
                    </div>
                    
                    </div>
                    
                    </div>
                    <div className="recomend">
                    <div className="recomend_title">
                    <h3>С этим товаром покупают</h3>
                    <p>Посмотреть все товары</p>
                    </div>
                    <div className="content_gorizontal scroll">
                        <ScrollButtons>
                        </ScrollButtons>
                    {/* <div className="scroll_arrow_modal">
                    <img className="scroll_arrow_img" src={scrollArrow} alt="" />
                    </div> */}
                    </div>
                    </div>
                    </div>
                    </div>
                    )}
                    </div>
                )                      
                }
                
                
                export default Modal;