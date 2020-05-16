const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const StatementSchema= new Schema({
  name:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports=Statement=mongoose.model('statement',StatementSchema);