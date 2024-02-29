const schemas = require('../models/schemas')

// get all users

// get a single user

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

// update a user

