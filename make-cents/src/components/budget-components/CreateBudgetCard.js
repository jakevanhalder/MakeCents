import React, { useState } from 'react'
import CreateBudgetCardCss from './CreateBudgetCard.module.css';

function CreateBudgetCard() {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()

      if(!name){
          setError(<p className={CreateBudgetCardCss.required}>Name is empty. Please type a name.</p>)
      }
      else if(!amount){
          setError(<p className={CreateBudgetCardCss.required}>Amount is empty. Please type an amount.</p>)
      }
      else if(!date){
          setError(<p className={CreateBudgetCardCss.required}>Date is empty. Please select a date.</p>)
      }
      else{
          setError('')
      }
  }

  return (
      <div className={CreateBudgetCardCss.container}>
          <form className={CreateBudgetCardCss.form}>

              <h3 className={CreateBudgetCardCss.title}>Create Budget</h3>

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

export default CreateBudgetCard