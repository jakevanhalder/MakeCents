import React from 'react'
import BudgetStatusCard from '../components/budget-components/BudgetStatusCard';
import CreateBudgetCard from '../components/budget-components/CreateBudgetCard';
import BudgetPastActivity from '../components/budget-components/BudgetPastActivity';

function Budgeting() {
  return (
    <div className='padding-block-600'>
        <h1 className='fs-primary-heading'>Budgeting</h1>

        <div className='even-columns'>
          <BudgetStatusCard />
          <CreateBudgetCard />
        </div>
        <BudgetPastActivity />
    </div>
  )
}

export default Budgeting