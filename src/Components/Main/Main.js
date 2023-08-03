import './Main.css';
import { useState } from 'react'
import MainOffersElemt from './MainOffersElemt/MainOffersElemt';
import MainOffersBtn from './MainOffersBtn/MainOffersBtn';

function Main() {
   const [isState, setState] = useState(false)

   window.addEventListener('resize', function (event) {
      if (window.innerWidth <= 991) {
         setState(true)
      } else {
         setState(false)
      }
   });

   return (

      <main className='main'>

         <div className='main__caption-container main-caption'>
            <h1 className='main-caption__title'>Зарабатывайте <br />больше <br /> <span className='main-caption__title_gradient'>с WELBEX</span></h1>
            <p className='main-caption__sub-title'>Развиваем и контролируем <br />продажи за вас</p>
         </div>

         <div className='main__offers-contaniner main-offers'>
            <h2 className='main-offers__title'>Вместе с  <span className='main-offers__title_gradient_one'>бесплатной</span><br /><span className='main-offers__title_gradient_two'>консультацией</span> мы дарим:</h2>

            <div className='main-offers__box offers-box'>
               <MainOffersElemt title={'Dashboard'} text={'с показателями вашего бизнеса'} />
               <MainOffersElemt title={'Skype Аудит'} text={'отдела продаж и CRM системы'} />
               <MainOffersElemt title={isState ? '30 виджетов' : ' 35 дней'} text={'использования CRM'} />
               <MainOffersElemt title={'Месяц аmoCRM'} />
            </div>
            <MainOffersBtn titleBtn={'Получить консультацию'} />
         </div>

      </main >
   )
}

export default Main;