const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clientSchema = new Schema(

  {
    firstName:String,
    lastName:String,
    email:String,
    
    


  },
  {
    timestamps: true
  }
);

module.exports = model('Client', clientSchema);