const express = require('express');
const bodyParser = require('body-parser');
const expressValidation = require('express-validation');
const v1 = require('../api/v1');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//API Version 1
app.use('/api', v1)

//Error handler
app.use((req, res, next) => {
  res.status(404).json({
      status: 404,
      message: "Resource not found"
  })
})

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        res.status(err.status).json(err);
    }else{
        if(err.status != undefined){
            res.status(err.status).json({
                status: err.status,
                message: err.message
            })
        }else{
            console.log(err);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            })
        }
    }
})

module.exports = app;