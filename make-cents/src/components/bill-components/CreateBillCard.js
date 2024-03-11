import React, { useState } from 'react'
import CreateBillCardCss from './CreateBillCard.module.css';
import { useBillContext } from '../../hooks/useBillsContext';

function CreateBillCard() {

    const { dispatch } = useBillContext()
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const[date, setDate] = useState(new Date())
    const [error, setError] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(!name){
            setError(<p className={CreateBillCardCss.required}>Name is empty. Please type a name.</p>)
        }
        else if(!amount){
            setError(<p className={CreateBillCardCss.required}>Amount is empty. Please type an amount.</p>)
        }
        else if(!date){
            setError(<p className={CreateBillCardCss.required}>Date is empty. Please select a date.</p>)
        }
        else{
            
            const bill = {name, amount, date}

            console.log(date)

            const response = await fetch('/api/router/bills', {
                method: 'POST',
                body: JSON.stringify(bill),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json()
            
            if (!response.ok)
            {
                setError(json.error)
            }
            if (response.ok)
            {
                setName('')
                setAmount('')
                setDate(new Date())
                setError('')
                console.log('New bill created', json)
                dispatch({type: 'CREATE_BILL', payload: json})
            }
        }
    }

    return (
        <div className={CreateBillCardCss.container}>
            <form className={CreateBillCardCss.form}>

                <h3 className={CreateBillCardCss.title}>Create Bill</h3>

                <label>Name</label>
                <input type="text" id="name" name="name" value={name} onChange={ (e) => setName(e.target.value)}/>

                <label>Amount</label>
                <input type="number" id="amount" name="amount" value={amount} onChange={ (e) => setAmount(e.target.value)}/>

                <label>Due Date</label>
                <input type="date" id="date" name="date" value={date} onChange={ (e) => setDate(e.target.value)}/>

                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
  )
}

export default CreateBillCard