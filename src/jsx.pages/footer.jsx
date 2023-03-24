import '../App.css';
import '../css/footer.css';
import '../css/appLink.css'

import React from 'react';
import visa from '../icons/visa.png'
import mastercard from '../icons/mastercard.png'
import facebook from '../images/facebook.png'
import instagramm from '../icons/instagram.png'
import youtube from '../images/youtube.png'
import googlePlay from '../icons/google play.png'
import appStore from '../icons/apple.png'





function Footer() {
    return(
        <div className='footer'>
            <div className='footer_uls'>

            <ul className='footer_ul'>
                <p>Маркетплейс</p>
                <a href="#">О компании </a>
                <a href="#">Контакты</a>
                <a href="#">Вакансии</a>
                <a href="#">Реквизиты</a>
                <a href="#">Партнерская программа</a>
                <a href="#">Настоящий маркетплейс</a>
            </ul>
            <ul className='footer_ul'>
                <p>Покупателю</p>
                <a href="">Помощь покупателю</a>
                <a href="">Доставка</a>
                <a href="">Примерка</a>
                <a href="">оплата</a>
                <a href="">возврат</a>
                <a href="">рассрочка</a>
                <a href="">акции</a>
            </ul>
            <ul className='footer_ul'>
            <p>Магазинам</p>
                <a href="">Помощь магазинам</a>
                <a href="">Приглашение к сотрудничеству</a>
                <a href="">Вход  в личный кабинет</a>
            </ul>
            <ul className='footer_ul'>
            <p>Правовая информация</p>
                <a href="">Условия использования сайта</a>
                <a href="">Политика обработки персональных данных</a>
                <a href="">Условия заказа и доставки</a>
            </ul>
            <ul className='footer_ul'>
                <p>Мобильное приложение</p>
                <div className='app_link_container'>
                <a className='app_link_a' href='#'>
                    <img className='footer_card_img' src={appStore} alt="appstore" width='24px' height="24px" />
                    <p id='footer_card_p' >Загрузите в App Store</p>

                </a>
                <a className='app_link_a' href='#'>
                    <img className='footer_card_img' src={googlePlay} alt="gppgle play" width='24px' height="24px"/>
                    <p id='footer_card_p' >Доступно в  Google play</p>
                </a>
                </div>
            </ul>
            </div>
            <div className='footer_bottom'>
                <p>© 2020 - 20∞ Stores.kg Все права защищены.</p>
                <div className='footer_card'>
                    <p>Мы принимаем:</p>
                    <div className='mastercard'>

                    <img src={mastercard} 
                    width='38px' alt='mastercard'/>
                    <p>mastercard</p>
                    </div>
                    <img src={visa} alt='visa' width='38px' />
                </div>
                <div className='footer_network_icons'>
                    <p>Мы в соцсетях:</p>
                    <img src={facebook} alt='facebook' />
                    <img width='24px' className='instagramm_icon' src={instagramm} alt='instagramm' />
                    <img src={youtube} alt='youtube' />
                </div>
            </div>
        </div>
    )
}


export default Footer;