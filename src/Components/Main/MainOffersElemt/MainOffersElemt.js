import './MainOffersElemt.css'

function MainOffersElemt(props) {
   return (
      <div className='offers-box__component'>
         <h3 className='offers-box__title'>{props.title}</h3>
         <p className='offers-box__text'>{props.text}</p>
      </div>
   )
}

export default MainOffersElemt;