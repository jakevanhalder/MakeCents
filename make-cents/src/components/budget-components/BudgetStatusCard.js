import React, { useState } from 'react'
import BudgetStatusCardCss from './BudgetStatusCard.module.css';

function BudgetStatusCard() {

  const [status, setStatus] = useState('')

  return (
    <div className={BudgetStatusCardCss.container}>
            <div className={BudgetStatusCardCss.status}>
                <h3 className={BudgetStatusCardCss.title}>Bill Status</h3>
                {
                    status.length === 0 
                    ?
                    <div><h3>No Bills</h3></div>
                    :
                    status.map(status => (
                        <div>
                            {status}
                        </div>
                    ))
                }
            </div>          
        </div>
  )
}

export default BudgetStatusCard