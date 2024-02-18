import React from 'react'
import BillStatusCard from '../bill-components/BillStatusCard';
import CreateBillCard from '../bill-components/CreateBillCard';
import BillPastActivity from '../bill-components/BillPastActivity';

function Bills() {
  return (
    <div className='padding-block-600'>
        <h1 className='fs-primary-heading'>Bills</h1>
        <div className='even-columns'>
          <BillStatusCard />
          <CreateBillCard />
        </div>
        <BillPastActivity />
    </div>
  )
}

export default Bills