import BillStatusCardItemCss from './BillStatusCardItem.module.css';

function BillStatusCard({ bill }) {
    return (
        <div className={BillStatusCardItemCss.container}>
            <div className={BillStatusCardItemCss.left}>
                <h4>{bill.name}</h4>
            </div>

            <div className={BillStatusCardItemCss.center}>
                <p><strong>Amount: </strong>{bill.amount}</p>
                <p><strong>Due Date: </strong>{bill.dueDate}</p>
            </div>

            <div className={BillStatusCardItemCss.right}>
                <form>
                    <select value={bill.status}>
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