const mongoose = require('mongoose');

// connection to database 
mongoose.connect('mongodb://localhost:27017/studentRecords')
.then(()=>{
    console.log('connection established from database');
}).catch((err)=>{
    console.log('no connection');
    console.log(err);
})