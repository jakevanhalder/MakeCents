import React from 'react'
import BillStatusCard from '../bill-components/BillStatusCard';
import CreateBillCard from '../bill-components/CreateBillCard';
import PastActivity from '../bill-components/PastActivity';

function Bills() {
  return (
    <div>
        <h1 className='fs-primary-heading'>Bills</h1>
        <div className='even-columns'>
          <BillStatusCard />
          <CreateBillCard />
        </div>
        <PastActivity />
    </div>
  )
}

export default Bills