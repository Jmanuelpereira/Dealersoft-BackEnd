const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clientSchema = new Schema(

  {
    firstName:String, 
    lastName:String,
    email:String,
    deals: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deals'
    }]

  },
  {
    timestamps: true
  }
);



module.exports = model('Client', clientSchema);


