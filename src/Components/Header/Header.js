import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
function Header() {
   return (
      <header className="header container">

         <figure className="header__figure figure">
            <img className="figure__img" src={logo} alt="Логотип страницы" />
            <figcaption className="figure__text">крупный интегратор CRM <br />в Росcии и ещё 8 странах</figcaption>
         </figure>

         <nav className="header__nav nav">
            <ul className="nav__list">
               {/* <li className="nav__item"><NavLink className="nav__link" to="#" >Услуги</NavLink></li>
               <li className="nav__item"><NavLink className="nav__link" to="#">Виджеты</NavLink></li>
               <li className="nav__item"><NavLink className="nav__link" to="#">Интеграции</NavLink></li>
               <li className="nav__item"><NavLink className="nav__link" to="#">Кейсы</NavLink></li>
               <li className="nav__item"><NavLink className="nav__link" to="#">Сертификаты</NavLink></li> */}
            </ul>
         </nav>

         <nav className="header__contact contact">
            {/* <ul className="contact__list">
               <li className="contact__item">
                  <a className="contact__tel" href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
               </li>
               <li className="contact__item">
                  <a className="contact__link" href="https://web.telegram.org" target="_blanck"><img src={telegram} alt="Ярлык телеграма" /></a>
               </li>
               <li className="contact__item">
                  <a className="contact__link" href="https://www.viber.com/ru/" target="_blanck"><img src={viber} alt="Ярлык вайбер" /></a>
               </li>
               <li className="contact__item">
                  <a className="contact__link" href="https://www.whatsapp.com/" target="_blanck"><img src={whatsapp} alt="Ярлык ватцап" /></a>
               </li>
            </ul> */}
         </nav>
      </header>
   )
}

export default Header;
