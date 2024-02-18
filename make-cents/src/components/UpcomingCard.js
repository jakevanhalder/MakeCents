import React from 'react'
import UpcomingCardCss from './UpcomingCard.module.css';
import UpcomingEventsImage from '../upcomingevents.png';

function UpcomingCard() {
  return (
    <div className={UpcomingCardCss.container}>
      <div className={UpcomingCardCss.upcomingItems}>
        <h2 className={UpcomingCardCss.title}>Upcoming</h2> 
        <img src={UpcomingEventsImage} alt="List of upcoming deadlines" />       
      </div>       
    </div>
  )
}

export default UpcomingCard