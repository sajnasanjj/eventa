const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const colors = require('colors')

const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email })
    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid email and password ")
    }
    res.json({ message: 'Login admin' })
})
const getMe = asyncHandler(async (req, res) => {
    const {_id,name,email} = await Admin.findById(req.admin.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
    res.json({ message: 'admin data display' })
})
const generateToken = (id) => {
    return jwt.sign ({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d' ,
    })
}
    module.exports = {
       
        loginAdmin,
        getMe
    }
