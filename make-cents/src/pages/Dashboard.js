import React from 'react';
import GraphCard from '../components/GraphCard';
import UpcomingCard from '../components/UpcomingCard';
import HowToCard from '../components/HowToCard';
import BudgetCard from '../components/BudgetCard';

function Dashboard() {
  return (
    <div className='padding-block-600'>
        <h1 className='fs-primary-heading'>Welcome, User</h1>

        <div className='even-columns'>
          <GraphCard />
          <UpcomingCard />
        </div>

        <div className='even-columns'>
          <HowToCard />
          <BudgetCard />
        </div>
    </div>
  )
}

export default Dashboard