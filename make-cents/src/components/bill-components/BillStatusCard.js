import BillStatusCardCss from './BillStatusCard.module.css';

function BillStatusCard({ bill }) {
    return (
        <div className={BillStatusCardCss.container}>
            <div className={BillStatusCardCss.status}>
                <h3 className={BillStatusCardCss.title}>Bill Status</h3>
                
                <div className={BillStatusCardCss.Bills}>
                    <h4>{bill.name}</h4>
                    <p><strong>Amount: </strong>{bill.amount}</p>
                    <p><strong>Due Date: </strong>{bill.dueDate}</p>
                    <p><strong>Status: </strong>{bill.status}</p>
                </div>
            </div>          
        </div>
    )
}

export default BillStatusCard