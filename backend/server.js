const express = require('express');

const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')

const { default: mongoose } = require('mongoose');
const port = process.env.PORT;

const app = express();
mongoose.connect(process.env.MONGO_URI,
    console.log(`Connected DB`)
)


app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/userRoutes'))
app.use('/adminlogin',require('./routes/adminRoutes'))


app.use(errorHandler)
app.listen(port,() => console.log(`Running on server ${port}`));