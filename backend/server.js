require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const userRoutes = require('./routes/users')
const farmerRoutes = require('./routes/farmers')

//express app
const app = express()

//middleware
app.use(express.json())

//cors
app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,
}))

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/user', userRoutes)
app.use('/api/farmers', farmerRoutes)

// Connection URI
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

//Server 

const PORT = 3002
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});