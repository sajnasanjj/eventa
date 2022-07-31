const asyncHandler = require('express-async-handler');
const Razorpay = require('razorpay');
const moment = require('moment');
const Order = require('../models/user/orderModel');

const addOrder = asyncHandler(async (req, res) => {
    const {
        bride,
        groom,
        phonenumber,
        iam,
        start_date,
        end_date,
        guests,
        address,
        street,
        city,
        postal_code,
        district,
        country,
        events,
        photography,
        catering,
        decor
    } = req.body

    const order = await Order.create({
        bride,
        groom,
        phonenumber,
        iam,
        start_date,
        end_date,
        guests,
        address,
        street,
        city,
        postal_code,
        district,
        country,
        events,
        photography,
        catering,
        decor
    })

    if (order) {
        res.status(201).json({
            _id: order.id,
            phonenumber: order.phonenumber,
            bride: order.bride,
            groom: order.groom,
            guests: order.guests,
            start_date: order.start_date,
            end_date: order.end_date,
            iam: order.iam,
            address: order.address,
            street: order.street,
            city: order.city,
            district: order.district,
            postal_code: order.postal_code,
            country: order.country,
            events: order.events,
            photography: order.photography,
            catering: order.catering,
            decor: order.decor,
            token: generateToken(order.id),
        })
    } else {
        res.json({ message: 'order display' })
    }
})
const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.find({})
    res.status(200).json(order)
})
const getRazorKey = asyncHandler(async (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_KEY });
});
const createOrder = asyncHandler(async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        const options = {
            amount: req.body.amount,
            currency: 'INR',
        };
        const order = await instance.orders.create(options);
        if (!order) return res.status(500).send('Some error occured');
        res.json(order)
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
});
const verifyPayment = asyncHandler(async (req, res) => {
    try{
        const{
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        amount,
        user,
    } = req.body
        const date = moment(new Date()).format('YYYY/MM/DD')
        const newOrder = Order({
            isPaid: true,
            amount: amount,
            user:user,
            date:date,
            razorpay: {
                orderId: razorpay_order_id,
                paymentId:razorpay_payment_id,
                signature: razorpay_signature,
            },
            })
    await newOrder.save()
    res.status(200).json({ msg: 'Payment was successfull' })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
})
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getOrder,
    addOrder,
    getRazorKey,
    createOrder,
    verifyPayment
};
