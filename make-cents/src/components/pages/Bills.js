import React, { useEffect, useState } from 'react'
import BillStatusCard from '../bill-components/BillStatusCard';
import CreateBillCard from '../bill-components/CreateBillCard';
import BillPastActivity from '../bill-components/BillPastActivity';

function Bills() {
  const [bills, setBills] = useState(null)

    useEffect(() => {
        const fetchBills = async () => {
            const response = await fetch('http://localhost:4000/api/router/bills')
            const json = await response.json()

            if (response.ok){
              setBills(json)
            }
        }

        fetchBills()
    }, [])

  return (
    <div className='padding-block-600'>
        <h1 className='fs-primary-heading'>Bills</h1>
        <div className='even-columns'>
          <BillStatusCard bill={bills} />
          
          <CreateBillCard />
        </div>
        <BillPastActivity />
    </div>
  )
}

export default Bills