const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Banner = require('../models/admin/bannerModel')
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
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User data')
  }
  res.json({ message: 'Register User' })
})
const loginUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  console.log('details', req.body)
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
          token: generateToken(user._id),
        })
      } else {
        res.status(400)
        throw new Error('Invalid password')
      }
    } else {
      res.status(400)
      throw new Error('User blocked by Admin')
    }
  } else {
    res.status(400)
    throw new Error('Invalid email')
  }
})

const getUser = asyncHandler(async (req, res) => {
  const user = await User.find({})
  res.status(200).json(user)
})
const getBanner = asyncHandler(async (req, res) => {
  const banner = await Banner.find({})
  res.status(200).json(banner)
})

// const getCart = asyncHandler(async(req,res)=>{
//   const cart =await Cart.find({})
//   res.status(200).json(cart)
// })
// const addCart = asyncHandler(async(req,res)=>{
//   const {name,image,price} =req.body
//   const cart = await Cart.create({
//     name,
//     image,
//     price
//   })
 
//   if (cart) {
//     res.status(201).json({
//       _id: cart.id,
//       name: cart.name,
//       image: cart.image,
//       price: cart.price,
//       token: generateToken(cart.id),
//     })
//   } else {
//     res.json({ message: 'cart display' })
//   }

// })
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
module.exports = {
  registerUser,
  loginUser,
  getUser,
  getBanner,
 
}
