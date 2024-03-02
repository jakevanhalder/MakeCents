const express = require('express')
const router = express.Router()
const {
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
} = require('../controllers/makeCentsController')

// GET all users
router.get('/users', getAllUsers)

// GET a single user
router.get('/users/:id', getUser)

// POST a new user
router.post('/users', createUser)

// DELETE a user
router.delete('/users/:id', deleteUser)

// UPDATE a user
router.patch('/users/:id', updateUser)

// GET all bills
router.get('/bills', getAllBills)

// GET a single bill
router.get('/bills/:id', getBill)

// POST a new bill
router.post('/bills', createBill)

// DELETE a bill
router.delete('/bills/:id', deleteBill)

// UPDATE a bill
router.patch('/bills/:id', updateBill)

module.exports = router