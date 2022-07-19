const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Banner = require('../models/admin/bannerModel')
const Order = require('../models/user/orderModel')
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already Exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        status: true,
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    }
    else {
        res.status(400)
        throw new Error('Invalid User data')
    }
    res.json({ message: 'Register User' })
})
const loginUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    console.log("details", req.body);
    const user = await User.findOne({ email })
    if (!email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    if (user) {
        if (user.status) {
            if (await bcrypt.compare(password, user.password)) {
                res.json(200).json({
                    _id: user.id,
                    email: user.email,
                    name: user.name,
                    status: user.status,
                    token: generateToken(user._id)
                })
            } else {
                res.status(400)
                throw new Error('Invalid password')
            }
        }
        else {
            res.status(400)
            throw new Error('User blocked by Admin')

        }
    } else {
        res.status(400)
        throw new Error("Invalid email")
    }
})


const getUser = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.status(200).json(user);

});
const getBanner = asyncHandler(async (req, res) => {
    const banner = await Banner.find({})
    res.status(200).json(banner);
})
const addOrder = asyncHandler(async(req,res)=>{
    const{bride,groom,phonenumber,iam,service,date,days_event,status}=req.body

    const order = await Order.create({
       bride,groom,phonenumber,iam,service,date,days_event,status
    })
    if(order){
        res.status(201).json({
            _id:order.id,
            phonenumber:order.phonenumber,
            bride:order.bride,
            groom:order.groom,
            days_event:order.days_event,
            date:order.date,
            iam:order.iam,
            service:order.service,
            date:order.date,
            status:order.status,
            days_event:order.days_event,
            token:generateToken(order.id)
        })
    }else{
        res.json({message:'order display'})
    }
})
const getOrder =asyncHandler(async(req,res)=>{
const order = await Order.find({})
res.status(200).json(order);
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    getUser,
    getBanner,addOrder,getOrder
}
