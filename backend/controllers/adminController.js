const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const User = require('../models/userModel')


const registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    console.log("sajna",req.body);
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    const adminExists = await Admin.findOne({ email })
    if (adminExists) {
        res.status(400)
        throw new Error('admin already Exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const admin = await Admin.create({
        name,
        email,
        password: hashedPassword
    })
    if (admin) {
        res.status(201).json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id)

        })
    } 
     else {
        res.status(400)
        throw new Error('Invalid Admin data')
    }
    res.json({ message: 'Register Admin' })
})
const loginAdmin = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body
     console.log("details",req.body);
    const admin = await Admin.findOne({ email })
    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            email: admin.email,
            name: admin.name,
            token: generateToken(admin._id)
        })
    }else if (!email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    } 
    else {
        res.status(400)
        throw new Error("Invalid email and password ")
    }
    res.json({ message: 'Login admin' })
})

const getUser = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.status(200).json(user)
    res.json({ message: 'User data display to admin' })
})

const generateToken = (id) => {
    return jwt.sign ({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d' ,
    })
}
    module.exports = {
        registerAdmin,
        loginAdmin,
        getUser,
    }
