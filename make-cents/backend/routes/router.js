const express = require('express')
const router = express.Router()

router.post('/bills', async(req, res) => {
    const {name, amount, dueDate} = req.body

    const billsData = {name: name, amount: amount, dueDate: dueDate}
    const newBill = new schemas.Bills(billsData)
    const saveBill = await newBill.save(billsData)
    if (saveBill){
      res.send('Created new bill')  
    }
    else{
        res.send('Failed to send message')
    }

    res.end()
})

module.exports = router