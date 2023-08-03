import './MainOffersBtn.css'

function MainOffersBtn(props) {
   return (
      <>
         <button type='button' className='main-offers__btn'>
            {props.titleBtn}
         </button>
      </>
   )
}


export default MainOffersBtn;