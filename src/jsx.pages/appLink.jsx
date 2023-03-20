import '../app.css';
import '../css/appLink.css'
import React from 'react';
import googlePlay from '../icons/google play.png'
import appStore from '../icons/apple.png'
import iphone from '../images/applink-iphone.png'
import qrCode from '../images/qr-code.png'



function AppLink() {
    return(
        <div className='app_link'>
            <div className='app_link_text'>
                <h2>Кэшбек на все товары 
в новом приложении Stores</h2>
                <div className='app_link_container'>
                <a className='app_link_a' href='#'>
                    <img src={appStore} alt="appstore" width='24px' height="24px" />
                    <p>Загрузите в App Store</p>

                </a>
                <a className='app_link_a' href='#'>
                    <img src={googlePlay} alt="gppgle play" width='24px' height="24px"/>
                    <p>Доступно в  Google play</p>
                </a>
                </div>
            </div>
            <div>
                <img src={iphone} alt="iphone-img" />
            </div>
            <div className='app_link_qr'>
                <img src={qrCode} alt="qr-code"/>
                <p>Наведите камеру
                на QR-код, чтобы
                скачать</p>
            </div>
        </div>
    )
}


export default AppLink