import { useState, useEffect } from 'react';
import BillStatusCardCss from './BillStatusCard.module.css';
import BillStatusCardItem from './BillStatusCardItem';

function BillStatusCard() {
    const [bills, setBills] = useState(null)

    useEffect(() => {
        const fetchBills = async () => {
            const response = await fetch('api/router/bills')
            const json = await response.json()

            if (response.ok) {
                setBills(json)
            }
        }

        fetchBills()
    }, [])

    return (
        <div className={BillStatusCardCss.container}>
            <div className={BillStatusCardCss.status}>
                <h3 className={BillStatusCardCss.title}>Bill Status</h3>
                <div className={BillStatusCardCss.cardItems}>
                    {bills && bills.length > 0 ? (
                        // Render bill cards if there are bills
                        bills.map((bill) => (
                            <BillStatusCardItem key={bill._id} bill={bill} />
                        ))
                    ) : (
                        // Display a message if there are no bills
                        <h3>No bills</h3>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BillStatusCard