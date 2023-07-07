const express = require('express');
const app = express();
require('../src/db/conn');
const port = process.env.PORT || 8000;
const routes = require('./routers/router');

app.use(express.json());
app.use(routes);


app.listen(port, ()=>{
    console.log(`connection at ${port} is success`);
})