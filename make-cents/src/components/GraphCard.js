import React from 'react'
import { Link } from 'react-router-dom';
import GraphCardItemCss from './GraphCard.module.css';
import MyGoalsImage from '../mygoals.jpg';

function GraphCardItem() {
  return (
    <div className={GraphCardItemCss.container}>
      <div className={GraphCardItemCss.goals}>
        <Link to="/mygoals">
        <h2 className={GraphCardItemCss.title}>Goal Progress</h2>
        <img src={MyGoalsImage} alt="My Goals" />
        </Link>
      </div>
    </div>
  )
}

export default GraphCardItem