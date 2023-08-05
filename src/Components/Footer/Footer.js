import './Footer.css'
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";

function Footer() {
   return (
      <footer className='footer container'>
         <div className='footer__nav-container footer-nav'>

            <div className='footer-nav__box'>
               <h3 className='footer-nav__title'>О компании</h3>
               <p className='footer-nav__text'>Партнёрская программа</p>
               <p className='footer-nav__text'>Вакансии</p>
            </div>

            <div className='footer-nav__box'>
               <h3 className='footer-nav__title'>Меню</h3>
               <div className='footer-nav__elements'>
                  <div className='footer-nav__element'>
                     <p className='footer-nav__text'>Расчёт стоимости</p>
                     <p className='footer-nav__text'>Услуги</p>
                     <p className='footer-nav__text'>Виджеты</p>
                     <p className='footer-nav__text'>Интеграции</p>
                     <p className='footer-nav__text'>Наши клиенты</p>
                  </div>
                  <div className='footer-nav__element'>
                     <p className='footer-nav__text'>Кейсы</p>
                     <p className='footer-nav__text'>Благодарственные письма</p>
                     <p className='footer-nav__text'>Сертификаты</p>
                     <p className='footer-nav__text'>Блог на Youtube</p>
                     <p className='footer-nav__text'>Вопрос / Ответ</p>
                  </div>
               </div>

            </div>

         </div>

         <div className='footer__contact-container footer-contact'>
            <h3 className='footer-contact__title'>Контакты</h3>
            {/* <a className='footer-contact__tel' href='tel:+7 555 555-55-55'>+7 555 555-55-55</a> */}
            <div className='footer-contact__social'>
               {/* <a className='footer-contact__link' href='https://web.telegram.org'><img src={telegram} alt='телеграм' /></a>
               <a className='footer-contact__link' href='https://www.viber.com/ru/'><img src={viber} alt='вайбер' /></a>
               <a className='footer-contact__link' href='https://www.whatsapp.com/'><img src={whatsapp} alt='ватцап' /></a> */}
            </div>
            <address className='footer-contact__address'>Москва, Путевой проезд 3с1, к 902</address>
            <p className='footer-contact__text'> &copy; WELBEX 2022. Все права защищены.</p>
            <a className='footer-contact__link-conf'>Политика конфиденциальности</a>
         </div>
      </footer>
   )
}

export default Footer;