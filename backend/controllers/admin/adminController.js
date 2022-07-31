const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../../models/adminModel')
const Banner = require('../../models/admin/bannerModel')
const Gallary = require('../../models/admin/gallaryModel')
const User = require('../../models/userModel')
const Service = require('../../models/admin/serviceModel')
const Album = require('../../models/admin/albumModel')


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

const changeUserStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    let changedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { status: !user.status } },
    )
    res.status(200).json(changedUser)
  } else {
    res.status(400)
    throw new Error('user not found')
  }
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
        res.json(error)
    }
})

const addGallery = asyncHandler(async(req,res)=>{
    const { name,image } = req.body;
    
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
const getGalleryDetails = asyncHandler(async (req, res) => {
    const gallary = await Gallary.find({})
    res.status(200).json(gallary)
    res.json({ message: 'gallary details to admin' })
})  
const editGallery = asyncHandler(async (req,res)=> {
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
const deleteGallery = asyncHandler(async(req,res)=>{
    const gallaryId = req.params.id;
    try{
      
       const gallary = await Gallary.findById(gallaryId)
       const data = await gallary.remove();

        res.status(200).json({ gallaryId : data._id})
    }catch(error){
        res.json(error)
    }
})

const addService = asyncHandler(async(req,res)=>{
    const { name,image} = req.body;
    
    const service = await Service.create({
        name,
        image,
    })
    if(service){
         res.status(201).json({
        _id:service.id,
        name:service.name,
        image:service.image,
        token:generateToken(service._id)
    })
}else{
    res.json({ message: 'Services display to admin' })
}
})
const getService = asyncHandler(async (req, res) => {
    const service = await Service.find({})
    res.status(200).json(service)
    res.json({ message: 'service details to admin' })
})  
const editService = asyncHandler(async (req,res)=> {
    const serviceId =req.params.id;
    
    try{
        const newServiceData ={
            name : req.body.name,
            image : req.body.image,
        };
    const service =await Service.findByIdAndUpdate(serviceId,newServiceData,{
        new:true,
        runValidators : true,
        useFindAndModify:false,
    })
    res.status(200).json({
        success:true,
        service
    })
    }catch(error){
        res.status(400).json(error)
    }
    res.json({ message : 'service is updated'})
})
const deleteService = asyncHandler(async(req,res)=>{
    const serviceId = req.params.id;
    try{
       const service = await Service.findById(serviceId)
       const data = await service.remove();
        res.status(200).json({ serviceId : data._id})
    }catch(error){
        res.json(error)
    }
})
const addAlbum = asyncHandler(async(req,res)=>{
    const { name,image} = req.body;
    
    const album = await Album.create({
        name,
        image,
    })
    if(album){
         res.status(201).json({
        _id:album.id,
        name:album.name,
        image:album.image,
        token:generateToken(album._id)
    })
}else{
    res.json({ message: 'albums display to admin' })
}
})
const getAlbum = asyncHandler(async (req, res) => {
    const album = await Album.find({})
    res.status(200).json(album)
    res.json({ message: 'album details to admin' })
})  
const editAlbum = asyncHandler(async (req,res)=> {
    const albumId =req.params.id;
    
    try{
        const newAlbumData ={
            name : req.body.name,
            image : req.body.image,
        };
    const album =await Album.findByIdAndUpdate(albumId,newAlbumData,{
        new:true,
        runValidators : true,
        useFindAndModify:false,
    })
    res.status(200).json({
        success:true,
        album
    })
    }catch(error){
        res.status(400).json(error)
    }
    res.json({ message : 'album is updated'})
})
const deleteAlbum = asyncHandler(async(req,res)=>{
    const albumId = req.params.id;
    try{
       const album = await Album.findById(albumId)
       const data = await album.remove();
        res.status(200).json({ albumId : data._id})
    }catch(error){
        res.json(error);
    }
})


const generateToken = (id) => {
    return jwt.sign ({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d' ,
    })
}
    module.exports = {
        registerAdmin,
        loginAdmin,
        getUser,changeUserStatus,
        getBanner,getBannerDetails,editBanner,deleteBanner,
        addGallery,getGalleryDetails,editGallery,deleteGallery,
        getService,addService,editService,deleteService,
        getAlbum,addAlbum,editAlbum,deleteAlbum
        
    }
    
