import React from "react";
import '../app.css';
import '../css/header.css';
import logo from '../images/Logo.png';
import navLogo from '../images/nav_logo_iphone.png';
import Modal from "./modal";
// import Card from "../jsx.pages/mainContentCard";
// import Cardg from "../jsx.pages/mainContentCardG";

function Header() {
    const [open, setOpen] = React.useState(false);
    return(
        <header>
        <div class="header_title">
            <img class="iphone_photo" src={navLogo} alt="iphone_photo"/>
            <p>
                Iphone 14 pro max
            </p>
            <img class="iphone_photo" src={navLogo} alt="iphone_photo"/>
        </div>
        <nav class="nav">
            <div class="nav_logo">
                <img src={logo}  alt="Logo"/> 
                <div class="location">
                <svg width="30" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
                <div>
                <p>г. Бишкек</p>
                <p>ул. Токтогула 187</p>
                </div>
                    
                </div>
            </div>
            <div class="search_field">
                <button id="catalog" class="catalog buttons">
                <svg clip-rule="evenodd" fill='#fff' width={25} fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.985 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007zm.741 8.499h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm3-2.5h-7.5c-.414 0-.75.336-.75.75s.336.75.75.75h7.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-2.5h-7.5c-.414 0-.75.336-.75.75s.336.75.75.75h7.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" fill-rule="nonzero"/></svg>
                    Каталог</button>
                <div class="search_input">
                    <input class="search" type="text"/>
                    <button id="search_buttonID" class="button_search buttons">Поиск</button>
                </div>
                <select class="select">
                    <option value="iphone">pv</option>
                  </select>
            </div>
            <div class="svg">
            <div class="svg_icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                Пользователь
            </div>
            <div class="svg_icons">
                <svg clip-rule="evenodd"  width="24" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                Избранное
            </div>
            <div onClick={() => {setOpen(true); console.log(1)}} class="svg_icons basket">    
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.5 3c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.5 7v-2h-2v-1h2v-2l3 2.5-3 2.5zm-11.248-2l-.564-2h5.993c-.115.482-.181.983-.181 1.5l.025.5h-5.273zm6.248 11.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5zm-14-16.5l.743 2h1.929l3.474 12h13.239l1.307-3.114c-.387.072-.785.114-1.192.114-.338 0-.666-.034-.99-.083l-.455 1.083h-10.428l-3.432-12h-4.195zm9 16.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5z"/></svg>
            Корзина    
            </div>
            </div>
        </nav>
        { open && (<Modal open={open} onClose={() => setOpen(false)}/>)}
        </header>
    )}

    export default Header;

    