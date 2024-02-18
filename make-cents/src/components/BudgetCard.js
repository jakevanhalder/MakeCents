import React from 'react'
import { Link } from 'react-router-dom';
import BudgetCardCss from './BudgetCard.module.css';
import BudgetImage from '../upcomingbudget.jpg';

function BudgetCard() {
  return (
    <div className={BudgetCardCss.container}>
      <div className={BudgetCardCss.budgetItems}>
        <Link to="/budgeting">
          <h2 className={BudgetCardCss.title}>Budget Envelopes</h2>
          <img src={BudgetImage} alt="List of budgets" />
        </Link>        
      </div>        
    </div>
  )
}

export default BudgetCard