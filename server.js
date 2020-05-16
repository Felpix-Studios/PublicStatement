//Imports
const express = require('express');
const mongoose = require('mongoose');
const path=require('path');
const app=express();
const rateLimit=require('express-rate-limit');
//Item Model
const Statement = require('./models/Statement');

//Bodyparser
app.use(express.json());


//DB config
const db='mongodb+srv://felpix:felpix@cluster0-cdtzk.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  //connect
  .connect(db)
  .then(()=> console.log('MongoDB Connected'))
  .catch(err=> console.log(err));



//Routes
app.get('/statements',(req,res)=>{
  Statement.find()
    .sort({date:-1})
    .then(statements=> res.json(statements))
  
});

//RateLimit
app.use(rateLimit({
  windowMs: 30*1000,
  max:5
}));

app.post('/statement',(req,res)=>{

    const newState=new Statement({
      name: req.body.name,
      message: req.body.message
    });
    console.log(newState)
    newState.save().then(statement=> res.json(statement));

});

app.delete('/:id',(req,res)=>{
  Statement.findById(req.params.id)
    .then(statement=>statement.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
});

const port= process.env.PORT || 5000;

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
}
app.listen(port,() => console.log(`Server started on port ${port}`));

export const port;