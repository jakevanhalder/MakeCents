import BillStatusCardCss from './BillStatusCard.module.css';

function BillStatusCard({ bills }) {
    return (
        <div className={BillStatusCardCss.container}>
            <div className={BillStatusCardCss.status}>
                <h3 className={BillStatusCardCss.title}>Bill Status</h3>
                
                {bills && bills.length > 0 ? (
                    // Render individual bill details if there are bills
                    bills.map((bill) => (
                        <div key={bill._id} className={BillStatusCardCss.Bills}>
                            <h4>{bill.name}</h4>
                            <p><strong>Amount: </strong>{bill.amount}</p>
                            <p><strong>Due Date: </strong>{bill.dueDate}</p>
                            <p><strong>Status: </strong>{bill.status}</p>
                        </div>
                    ))
                ) : (
                    // Display "No bills" if there are no bills
                    <p>No bills</p>
                )}
            </div>          
        </div>
    )
}

export default BillStatusCard