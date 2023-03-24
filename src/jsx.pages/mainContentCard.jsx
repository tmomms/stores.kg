import React from 'react';
import StarIcon from "../jsx.pages/mainStarIcon";
import StarIconNone from "../jsx.pages/mainStarIconNone";
import '../css/main.css';
import '../App.css';

function Card({src, ProductText, prise}) {
    return(
        <div className="content_card">
        <div className="like_flex">
        <svg className="like_align_self" width="25px" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fillRule="nonzero"/></svg>
        <div className="circle_container">
        <img src={src} alt="#"/>
        <div className="circle_field">
            <div className="circle_l"></div>
            <div className="circle_l"></div>
            <div className="circle_l"></div>
            <div className="circle_l"></div>
            <div className="circle_l"></div>
        </div>
        </div>
        </div>
        <div className="product_info">
            <h3>{ProductText}</h3>
            <div className="like_flex">
            <svg className="like_flex_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.286 9c-3.009 0-4.207 5-6.571 5-1.057 0-1.74-.789-1.74-2s.684-2 1.74-2c.833 0 1.431.535 2.009 1.197l.622-.781c-.75-.766-1.526-1.416-2.631-1.416-1.599 0-2.715 1.227-2.715 3s1.116 3 2.715 3c3.002 0 4.203-5 6.571-5 1.057 0 1.739.789 1.739 2s-.683 2-1.739 2c-.832 0-1.43-.534-2.007-1.196l-.622.78c.749.766 1.525 1.416 2.629 1.416 1.599 0 2.714-1.227 2.714-3s-1.115-3-2.714-3z"/></svg>
            <p>127</p>
            </div>
            <p className="product_info_p">экран: 6.43" (2400x1080) AMOLED 60 Гц
            память: встроенная 128 ГБ, оперативная 4 ГБ
            фото: 4 камеры, основная 64 МП
            аккумулятор: 5000 мА·ч
            </p>
        <div className="circle_field start">
            <div className="circle_xl"></div>
            <div className="circle_xl"></div>
            <div className="circle_xl"></div>
            <div className="circle_xl"></div>
            <div className="circle_xl"></div>
        </div>
        </div>
        <div className="prise">
            <div className="prise_field">
                <p>{prise}c</p>
                <p>90,000</p>
                <p>-48%</p>
            </div>
            <div className="star">
                <StarIcon fill="#F58735" size={24}/>
                <StarIcon fill="#F58735" size={24}/>
                <StarIcon fill="#F58735" size={24}/>
                <StarIconNone fill="#F58735" size={24}/>
                <StarIconNone fill="#F58735" size={24}/>
                321
            </div>
            <p className="green_text">В наличии (23)</p>
            <p className="seller"><span>Продавец:</span> 
            Softech.kg</p>
            <p className="green_text">Бесплатная доставка</p>
            <button className="buttons basket_button">
            <svg className="basket_icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="#fff" clipRule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"/></svg>
            в корзину
            </button>
        </div>
    </div>
    )
}

export default Card;