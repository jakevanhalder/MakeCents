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

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}