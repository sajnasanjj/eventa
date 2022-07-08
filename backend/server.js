const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')

const {errorHandler,notFound} = require('./middleware/errorMiddleware')


connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/userRoutes'))
app.use('/adminlogin',require('./routes/adminRoutes'))

app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT;
app.listen(port,() => console.log(`Running on server ${port}`));