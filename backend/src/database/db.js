// connecting to the database (mongoDB)
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
}, () => {
    console.log("MongoDB connection established")
})