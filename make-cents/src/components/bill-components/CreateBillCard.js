import React, { useState } from 'react'
import CreateBillCardCss from './CreateBillCard.module.css';

function CreateBillCard() {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
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
            setError('')
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