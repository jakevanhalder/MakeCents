import { useState } from 'react'
import BillStatusCardItemCss from './BillStatusCardItem.module.css';

function BillStatusCard({ bill }) {
    const [status, setStatus] = useState(bill.status);

    return (
        <div className={BillStatusCardItemCss.container}>
            <div className={BillStatusCardItemCss.left}>
                <h4>{bill.name}</h4>
            </div>

            <div className={BillStatusCardItemCss.center}>
                <p><strong>Amount: </strong>{bill.amount}$</p>
                <p><strong>Due Date: </strong>{bill.date}</p>
            </div>

            <div className={BillStatusCardItemCss.right}>
                <form>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="unpaid">Unpaid</option>
                        <option value="paid">Paid</option>
                        <option value="overdue">Overdue</option>
                    </select>

                </form>

            </div>
        </div>
    )
}

export default BillStatusCard