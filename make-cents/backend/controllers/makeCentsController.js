const schemas = require('../models/schemas')
const mongoose = require('mongoose')

// get all users
const getAllUsers = async (req, res) => {
    const users = await schemas.Users.find({})

    res.status(200).json(users)
}

// get a single user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user exists'})
    }

    const user = await schemas.Users.findById(id)

    if (!user)
    {
        return res.status(404).json({error: 'No such user exists'})
    }

    res.status(200).json(user)
}

// create new user
const createUser = async (req, res) => {
    const {name, email, password} = req.body

    try {
        const user = await schemas.Users.create({name, email, password})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user exists'})
    }

    const user = await schemas.Users.findOneAndDelete({_id: id})

    if (!user)
    {
        return res.status(404).json({error: 'No such user exists'})
    }

    res.status(200).json(user)
}

// update a user
const updateUser = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user exists'})
    }

    const user = await schemas.Users.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user)
    {
        return res.status(404).json({error: 'No such user exists'})
    }

    res.status(200).json(user)
}

// get all bills
const getAllBills = async (req, res) => {
    const bills = await schemas.Bills.find({}).sort({createdAt: -1})

    res.status(200).json(bills)
}

// get a single bill
const getBill = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such bill exists'})
    }

    const bills = await schemas.Bills.findById(id)

    if (!bills)
    {
        return res.status(404).json({error: 'No such bill exists'})
    }

    res.status(200).json(bills)
}

// create new bill
const createBill = async (req, res) => {
    const {name, amount, date} = req.body

    try {
        const bills = await schemas.Bills.create({name, amount, date})
        res.status(200).json(bills)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// delete a bill
const deleteBill = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such bill exists'})
    }

    const bills = await schemas.Bills.findOneAndDelete({_id: id})

    if (!bills)
    {
        return res.status(404).json({error: 'No such bill exists'})
    }

    res.status(200).json(bills)
}

// update a bill
const updateBill = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such bill exists'})
    }

    const bills = await schemas.Bills.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!bills)
    {
        return res.status(404).json({error: 'No such bill exists'})
    }

    res.status(200).json(bills)
}


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getAllBills,
    getBill,
    createBill,
    deleteBill,
    updateBill
}