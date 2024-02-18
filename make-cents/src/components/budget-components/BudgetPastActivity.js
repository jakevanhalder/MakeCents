import React from 'react'
import BudgetPastActivityCss from './BudgetPastActivity.module.css';

function BudgetPastActivity() {
  return (
    <div className={BudgetPastActivityCss.container}>
      <div className={BudgetPastActivityCss.activity}>
        <h3 className={BudgetPastActivityCss.title}>Past Activity</h3>
      </div>        
    </div>
  )
}

export default BudgetPastActivity