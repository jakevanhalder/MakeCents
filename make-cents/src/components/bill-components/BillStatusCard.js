import React, { useState } from 'react'
import BillStatusCardCss from './BillStatusCard.module.css';

function BillStatusCard() {

    const [status, setStatus] = useState('')

    return (
        <div className={BillStatusCardCss.container}>
            <h3 className={BillStatusCardCss.title}>Bill Status</h3>
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
    )
}

export default BillStatusCard