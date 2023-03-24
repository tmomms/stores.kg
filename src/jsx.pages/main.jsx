import React from "react";
import SetColorDiv from '../jsx.pages/main_coloredit';
import Card from "../jsx.pages/mainContentCard";
import Cardg from "../jsx.pages/mainContentCardG";


import '../css/main.css';
import '../App.css';

import Superfast from '../images/Superfast.png';
import cardImg from "../images/card-img-iphone.png";
import arrow from "../icons/arrow.svg";
import scrollArrow from "../icons/scroll_arrow.png";
import ScrollButtonsMain from "./DragScrollMain";


function Main() {
    // hier we can add/edit or delete color
    const colors = [
        '#FFFF00',
        '#FFD700',
        '#F5F5DC',
        '#FFFFFF',
        '#008000',
        '#C0C0C0',
        '#808080',
        '#8B00FF',
        '#000000',
        '#0000FF',
        '#FF0000',
        '#FFA500',
        '#FFC0CB',
        '#964B00',
        '#42AAFF'
    ]
    return(
        <main>
        <div className="main_catalog">
            <ul className="main_catalog_ul">
                <li className="main_catalog_li">Акции и Скидки</li>
                <li className="main_catalog_li">Кэшбек</li>
                <li className="main_catalog_li">Электроника</li>
                <li className="main_catalog_li">Одежда</li>
                <li className="main_catalog_li">Спортивные товары</li>
                <li className="main_catalog_li">Умный дом</li>
            </ul>
        </div>
        <section className="aside">
            <h5>Электроника</h5>
            <p className="aside_p">Смартфоны (234)</p>
            <div className="prise_input_div">
                <p>Цена, с</p>
                <input type="number" placeholder="10 000" className="prise_input" />                
                <input type="number" placeholder="199 999" className="prise_input" />
            </div>
            <div className="delivery_div">
                <ul>
                <p>Срок доставки</p>
                <li>
                    <input name="delivery" type="radio" id="delivery1"/>
                    <label for="delivery1"><img className="superfast" src={Superfast} alt="img" />1-2 часа</label>                      
                </li>
                <li>
                    <input name="delivery" type="radio" id="delivery1"/>
                    <label for="delivery1">Сегодня</label>                      
                </li>
                <li>
                    <input name="delivery" type="radio" id="delivery1"/>
                    <label for="delivery1">Сегодня или завтра</label>                      
                </li>
                <li>
                    <input name="delivery" type="radio" id="delivery1"/>
                    <label for="delivery1">до 5 дней</label>                      
                </li>
                <li>
                    <input name="delivery" type="radio" id="delivery1"/>
                    <label for="delivery1">любой</label>                      
                </li>
                <li className="last_label">
                    <input type="checkbox" name="cash_piese"/>
                    <label htmlFor="cash_piese">можно оплатить частями</label>
                </li>
                </ul>
            </div>
            <div className="producter">
                <ul>
                <p>производитель</p>
                <li>
                    <input type="checkbox" id="product1"/>
                    <label for="product1">Apple</label>                      
                </li>
                <li>
                    <input type="checkbox" id="product1"/>
                    <label for="product1">Xiaomi</label>                      
                </li>
                <li>
                    <input type="checkbox" id="product1"/>
                    <label for="product1">Samsung</label>                      
                </li>
                <li>
                    <input type="checkbox" id="product1"/>
                    <label for="product1">Realme</label>                      
                </li>
                <li>
                    <input type="checkbox" id="product1"/>
                    <label for="product1">Honor</label>                      
                </li>
                <div className="producter_span">показать все &#9660;</div>
                </ul>
            </div>
            <div className="discount">
                <ul>
                    <p>Скидки и акции</p>
                <li>
                    <input type="checkbox" id="discount1"/>
                    <label for="discount1">Скидки</label>                      
                </li>
                <li>
                    <input type="checkbox" id="discount1"/>
                    <label for="discount1">промокоды</label>                      
                </li>
                <li>
                    <input type="checkbox" id="discount1"/>
                    <label for="discount1">подарки</label>                      
                </li>
                <li>
                    <input type="checkbox" id="discount1"/>
                    <label for="discount1">есть комплект</label>                      
                </li>
                <div className="producter_span">показать все &#9660;</div>
                </ul>
            </div>
            <div className="condition">
                <ul>
                    <p>Состояние товара</p>
                <li>
                    <input type="checkbox" id="condition1"/>
                    <label for="condition1">новый</label>
                </li>
                <li>
                    <input type="checkbox" id="condition1"/>
                    <label for="condition1">ресейл</label>
                </li>
                </ul>
            </div>
            <div className="apperance">
                <ul>
                    <p>внешний вид</p>
                    <li>
                        <input type="checkbox" id="apperance1"/>
                        <label htmlFor="apperance1">Как новый</label>
                    </li>
                    <li>
                        <input type="checkbox" id="apperance1"/>
                        <label htmlFor="apperance1">Отличный</label>
                    </li>
                    <li>
                        <input type="checkbox" id="apperance1"/>
                        <label htmlFor="apperance1">Хороший</label>
                    </li>
                </ul>
            </div>
            <div className="line">
                <ul>
                    <p>линейка</p>
                <li>
                    <input type="checkbox" id="line1"/>
                    <label htmlFor="line1">galaxy a</label>
                </li>
                <li>
                    <input type="checkbox" id="line1"/>
                    <label htmlFor="line1">galaxy s</label>
                </li>
                <li>
                    <input type="checkbox" id="line1"/>
                    <label htmlFor="line1">POCO</label>
                </li>
                <li>
                    <input type="checkbox" id="line1"/>
                    <label htmlFor="line1">Redmi</label>
                </li>
                <div className='line_span'>показать все (86) &#9660;</div>
                </ul>
            </div>
            <div className="diagonal">
            <p>диагональ экрана (точно)</p>
                <input type="number" placeholder="10 000" className="prise_input" />                
                <input type="number" placeholder="199 999" className="prise_input" />
            </div>
            <div className="delivery_type">
                <ul>
                    <p>Срок доставки</p>
                    <li>
                        <input type="radio" name="time" id="delivery_type1"/>
                        <label htmlFor="delivery_type1">Курьером</label>
                    </li>
                    <li>
                        <input type="radio" name="time" id="delivery_type2"/>
                        <label htmlFor="delivery_type2">Самовывоз</label>
                    </li>
                    <li>
                        <input type="radio" name="time" id="delivery_type3"/>
                        <label htmlFor="delivery_type3">Торговые залы</label>
                    </li>
                    <li>
                        <input type="radio" name="time" id="delivery_type4"/>
                        <label htmlFor="delivery_type4">Любой</label>
                    </li>
                </ul>
            </div>
            <div className="raiting">
                <ul>
                    <p>рейтинг магазина</p>
                    <li>
                        <input type="radio" name="raiting" id="raiting1"/>
                        <label htmlFor="raiting1">
                            от 
                        <svg className="star_icon" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon star_icon_gray" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon star_icon_gray" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        
                        </label>
                    </li>
                    <li>
                        <input type="radio" name="raiting" id="raiting2"/>
                        <label htmlFor="raiting2">
                            от 
                        <svg className="star_icon" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        <svg className="star_icon star_icon_gray" clip-rule="evenodd" fill="#F58735" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg>
                        
                        </label>
                    </li>
                    <li>
                    <input type="radio" name="raiting" id="raiting3"/>
                        <label htmlFor="raiting3">не важно</label>
                    </li>
                </ul>
            </div>
            <div className="color">
                <p>цвет</p>
                <div className="color_container">
                    <SetColorDiv colors={colors}/>
                </div>

            </div>
        </section>
        <section className="content">
            <div className="content_title">
            <div className="sort">
                <ul className="sort_ul">
                    <li className="sort_li">Сортировать по:</li>
                    <li className="sort_li">Популярности</li>
                    <li className="sort_li">Возрастание цены</li>
                    <li className="sort_li">Убывание цены</li>
                    <li className="sort_li">Названию</li>
                    <li className="sort_li">Новинки</li>
                </ul>
            </div>
            <div className="sort-icon">
            <svg className="sort_icon_active" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
            <svg clip-rule="evenodd" width='19' fill='#808080' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.865 16.6c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135-5.8c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135-5.8c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1z" fill-rule="nonzero"/></svg>
            </div>
            </div>
            <div className="content_field">
                <h3>Лучшее предложение</h3>
                <p>Посмотреть все товары</p>
            </div>
            <div className="content_gorizontal">
                <ScrollButtonsMain>
                </ScrollButtonsMain>
            </div>
            <div className="content_vertical">
            <Card src={cardImg} ProductText={"Iphone 14 pro max"} prise={'78.000'}/>
            <Card src={cardImg} ProductText={"Iphone 14 pro max"} prise={'78.000'}/>
            <Card src={cardImg} ProductText={"Iphone 14 pro max"} prise={'78.000'}/>
            <Card src={cardImg} ProductText={"Iphone 14 pro max"} prise={'78.000'}/>
            </div>
            <div className="last_next_buttons">
                <span>
                <img src={arrow} alt="" />
                </span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>...</span>
                <span>20</span>
                <span className="arrow arrow_right">
                <img src={arrow} alt="" />
                </span>
            </div>
        </section>
            </main>
    )
}

export default Main;