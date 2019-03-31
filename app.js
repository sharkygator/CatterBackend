// import express from 'express'
let express = require('express');  //Should I use import or require?
let path = require('path');

const app = express();



app.get("/api/v1/hello", (req, res) => {
    res.status(200).send({
        message: 'Hello!'
    })
});

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
});
