const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user schema
const userSchema = new Schema({
    name: {type:String},
    email: {type:String},
    entryDate: {type:Date, default:Date.now}
})

// bills schema
const billsSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date },
    status: { type: String, enum: ['paid', 'unpaid', 'overdue'], default: 'unpaid' }
})

// budget schema
const budgetSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date }
})

// expenses schema
const expenseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now }
})

// investments schema
const investmentsSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now }
})

// goal schema
const goalsSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    targetAmount: { type: Number, required: true },
    currentAmount: { type: Number, default: 0 },
    deadline: { type: Date }
})

// profile schema 
const profileSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    address: { type: String },
    // Add more profile details as needed
})

const Users = mongoose.model('Users', userSchema, 'users')
const Goals = mongoose.model('Goals', goalsSchema);
const Bills = mongoose.model('Bills', billsSchema);
const Investments = mongoose.model('Investments', investmentsSchema);
const Profile = mongoose.model('Profile', profileSchema);
const Expense = mongoose.model('Expense', expenseSchema);
const Budget = mongoose.model('Budget', budgetSchema);

const mySchemas = {'Users':Users, 'Goals':Goals, 'Bills':Bills, 'Investments':Investments, 'Profile':Profile, 'Expense':Expense, 'Budget':Budget}

module.exports = mySchemas