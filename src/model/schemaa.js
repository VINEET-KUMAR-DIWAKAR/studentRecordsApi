const mongoose = require('mongoose');

//creating schema
const studentSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    ranking:{
        type: Number,
        require:true,
        unique :true
    },
    email: {
        type:String,
        unique: true,
        require:true
    },
    Address:{
        type:String,
        require:true
    }
});

// creating model 
const StudentModel = new mongoose.model('StudentModel',studentSchema);

module.exports= StudentModel;