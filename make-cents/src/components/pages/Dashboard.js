import React from 'react';
import GraphCard from '../GraphCard';
import UpcomingCard from '../UpcomingCard';
import HowToCard from '../HowToCard';
import BudgetCard from '../BudgetCard';

function Dashboard() {
  return (
    <div>
        <h1>Welcome, User</h1>

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