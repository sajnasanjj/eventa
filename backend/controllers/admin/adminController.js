const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../../models/adminModel')
const Banner = require('../../models/admin/bannerModel')
const Gallary = require('../../models/admin/gallaryModel')
const User = require('../../models/userModel')


const registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
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
    const admin = await Admin.findOne({email })
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
const getBanner = asyncHandler(async(req,res)=>{
    const { name,image} = req.body;
    
    const banner = await Banner.create({
        name,
        image,
    })
    if(banner){
         res.status(201).json({
        _id:banner.id,
        name:banner.name,
        image:banner.image,
        token:generateToken(banner._id)
    })
}else{
    res.json({ message: 'Banner data display to admin' })
}
})
const getBannerDetails = asyncHandler(async (req, res) => {
    const banner = await Banner.find({})
    res.status(200).json(banner)
    res.json({ message: 'Banner details to admin' })
})  
const editBanner = asyncHandler(async (req,res)=> {
    const bannerId =req.params.id;
    
    try{
        const newBannerData ={
            name : req.body.name,
            image : req.body.image,
        };
    const banner =await Banner.findByIdAndUpdate(bannerId,newBannerData,{
        new:true,
        // runValidators : true,
        useFindAndModify:false,
    })
    res.status(200).json({
        success:true,
        banner
    })
    }catch(error){
        res.status(400).json(error)
    }
    res.json({ message : 'Banner is updated'})
})
const deleteBanner = asyncHandler(async(req,res)=>{
    const bannerId = req.params.id;
    try{
      
       const banner = await Banner.findById(bannerId)
       const data = await banner.remove();

        res.status(200).json({ bannerId : data._id})
    }catch(error){
        res.status(400).json(error)
    }
    res.json({
        message:'Banner is deleted'
    })
            console.log("deleted");

})
const getGallary = asyncHandler(async(req,res)=>{
    const { name,image} = req.body;
    
    const gallary = await Gallary.create({
        name,
        image,
    })
    if(gallary){
         res.status(201).json({
        _id:gallary.id,
        name:gallary.name,
        image:gallary.image,
        token:generateToken(gallary._id)
    })
}else{
    res.json({ message: 'gallary data display to admin' })
}
})
const getGallaryDetails = asyncHandler(async (req, res) => {
    const gallary = await Gallary.find({})
    res.status(200).json(gallary)
    res.json({ message: 'gallary details to admin' })
})  
const editGallary = asyncHandler(async (req,res)=> {
    const gallaryId =req.params.id;
    
    try{
        const newGallaryData ={
            name : req.body.name,
            image : req.body.image,
        };
    const gallary =await Gallary.findByIdAndUpdate(gallaryId,newGallaryData,{
        new:true,
        runValidators : true,
        useFindAndModify:false,
    })
    res.status(200).json({
        success:true,
        gallary
    })
    }catch(error){
        res.status(400).json(error)
    }
    res.json({ message : 'gallary is updated'})
})
const deleteGallary = asyncHandler(async(req,res)=>{
    const gallaryId = req.params.id;
    try{
      
       const gallary = await Gallary.findById(gallaryId)
       const data = await gallary.remove();

        res.status(200).json({ gallaryId : data._id})
    }catch(error){
        res.status(400).json(error)
    }
    res.json({
        message:'Photo is deleted'
    })
            console.log("deleted");

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
        getBanner,getBannerDetails,editBanner,deleteBanner,
        getGallary,getGallaryDetails,editGallary,deleteGallary,
        
    }
