import React from 'react'
import BillPastActivityCss from './BillPastActivity.module.css';

function PastActivity() {
  return (
    <div className={BillPastActivityCss.container}>
      <div className={BillPastActivityCss.activity}>
        <h3 className={BillPastActivityCss.title}>Past Activity</h3>
      </div>        
    </div>
  )
}

export default PastActivity