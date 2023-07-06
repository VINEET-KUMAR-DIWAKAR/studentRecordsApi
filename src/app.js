const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('../src/db/conn');
const studentModel = require('../src/model/schemaa');

app.use(express.json());

// ADDING NEW DATA OF STUDENT
app.post('/', async(req, res)=>{
    try {
        const studentData = new studentModel(req.body)
        const data = await studentData.save(); 
        res.status(201).send(data);       
    } catch (error) {
        console.log(error);        
    }

})

// READING STUDENT DATA
app.get('/', async(req, res)=>{
    try {
        const stuData = await studentModel.find();
        res.status(200).send(stuData);
    } catch (error) {
        console.log(error);        
    }
})

// READING PARTICULAR DATA
app.get('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const singleData = await studentModel.findById({id})
        res.status(200).send(singleData);
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
    }
})

// UPDATAION OF DATA OR UPDATE OPERATION
app.patch('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const updatedValue = await studentModel.findByIdAndUpdate({id}, req.body, {
            new : true  // ye isliye taki hame updated data show ho turant
        });
        res.status(200).send(updatedValue);
    } catch (error) {
        console.log(error);
    }
})

//  DELETION OF DATA OR DELETE OPERATION
app.delete('/:id',async(req, res)=>{
    const id = req.params.id;
    const deletedData = studentModel.findByIdAndDelete({id});
    res.send(deletedData);
})

app.listen(port, ()=>{
    console.log(`connection at ${port} is success`);
})