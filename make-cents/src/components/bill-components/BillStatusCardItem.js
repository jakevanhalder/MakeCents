import { useState } from 'react';
import BillStatusCardItemCss from './BillStatusCardItem.module.css';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function BillStatusCard({ bill }) {
    const [status, setNewStatus] = useState('')

    const handleStatus = async (e) => {
        e.preventDefault()

        const newStatus = e.target.value

        const response = await fetch('/api/router/bills/' + bill._id, {
            method: 'PATCH',
            body: JSON.stringify({status: newStatus}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (response.ok) {
            setNewStatus('')
            console.log('Bill status updated', json)
        }
    }


    return (
        <div className={BillStatusCardItemCss.container}>
            <div className={BillStatusCardItemCss.left}>
                <h4>{bill.name}</h4>
            </div>

            <div className={BillStatusCardItemCss.center}>
                <p><strong>Amount: </strong>{bill.amount}$</p>
                <p><strong>Due Date: </strong>{formatDistanceToNow(new Date(bill.date), { addSuffix: true })}</p>
            </div>

            <div className={BillStatusCardItemCss.right}>
                <form>
                    <select onChange={handleStatus} value={status}>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Paid">Paid</option>
                    </select>

                </form>
            </div>
        </div>
    )
}

export default BillStatusCard