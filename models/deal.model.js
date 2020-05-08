const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const dealSchema = new Schema(
  
  {

    salesPerson:String,

    vehicle: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    }],

    Buyer: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Buyer'
    }]


  },
  {
    timestamps: true
  }
);

module.exports = model('Deal', dealSchema);