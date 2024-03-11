import BillStatusCardItemCss from './BillStatusCardItem.module.css';
import { useBillContext } from '../../hooks/useBillsContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function BillStatusCard({ bill }) {
    const { dispatch } = useBillContext()

    const handleStatus = async () => {
        const response = await fetch('api/router/bills' + bill._id, {
            method: 'PATCH'
        })

        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'UPDATE_BILL', payload: json})
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
                    <select>
                        <option value="unpaid" onClick={handleStatus}>Unpaid</option>
                        <option value="paid" onClick={handleStatus}>Paid</option>
                        <option value="overdue" onClick={handleStatus}>Overdue</option>
                    </select>

                </form>

            </div>
        </div>
    )
}

export default BillStatusCard