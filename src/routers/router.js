const express = require('express');
// const app = express();
const router = new express.Router()
const StudentModel = require('../model/schemaa');

// ADDING NEW DATA OF STUDENT
router.post('/', async(req, res)=>{
    try {
        const studentData = new StudentModel(req.body)
        const data = await studentData.save(); 
        res.status(201).send(data);       
    } catch (error) {
        console.log('error hai')
        console.log(error);        
    }
});

// READING STUDENT DATA
router.get('/', async(req, res)=>{
    try {
        const stuData = await StudentModel.find().sort({'ranking':1});
        res.status(200).send(stuData);
    } catch (error) {
        console.log(error);        
    }
});

// READING PARTICULAR DATA
router.get('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const singleData = await StudentModel.findById({id}).sort({'ranking':1});
        res.status(200).send(singleData);
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
    }
});

// UPDATAION OF DATA OR UPDATE OPERATION
router.patch('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const updatedValue = await StudentModel.findByIdAndUpdate({id}, req.body, {
            new : true  // ye isliye taki hame updated data show ho turant
        });
        res.status(200).send(updatedValue);
    } catch (error) {
        console.log(error);
    }
});

//  DELETION OF DATA OR DELETE OPERATION
router.delete('/:id',async(req, res)=>{
    const id = req.params.id;
    const deletedData = StudentModel.findByIdAndDelete({id});
    res.send(deletedData);
});

module.exports = router;