const app = require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')
// const dotenv = require('dotenv');
const cloudinary = require('cloudinary')
const axios = require('axios')

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

// dotenv.config({ path: 'backend/config/config.env' })


// Connecting to database
connectDatabase();

// Setting up cloudinary configuration
cloudinary.config({
    cloud_name: "dsj9t6adh",
    api_key: "998169537827179",
    api_secret: "OdZZJsvvLEd6rrDWQb0VqQVFFFg"
})
// calling an api 
const baseurl = "https://rickandmortyapi.com/api/character/?page=1"

const result = axios.get(baseurl).then((res) => {
    console.log('res',res)
})
console.log('result',result)



const PORT = 4000;
const server = app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT} in ${4000} mode.`)
})

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})