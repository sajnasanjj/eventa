const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Service = require('../../models/admin/serviceModel')

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
        res.status(400).json(error)
    }
    res.json({
        message:'service is deleted'
    })
            console.log("deleted");

})

module.exports = {
       
        getService,addService,editService,deleteService,
        
    }