import React from 'react'
import HowToCardCss from './HowToCard.module.css';
import HowToFinanceImage from '../howtofinance.png';

function HowToCard() {
  return (
    <div className={HowToCardCss.container}>
      <div className={HowToCardCss.howToItems}>
        <h2 className={HowToCardCss.title}>How To</h2>
        <img src={HowToFinanceImage} alt="Learn how to finance" />
      </div>        
    </div>
  )
}

export default HowToCard