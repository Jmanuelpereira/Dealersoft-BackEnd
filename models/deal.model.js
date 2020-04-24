const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const dealSchema = new Schema(
  
  {

    salesPerson:String,

    vehicle: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deals'
    }],

    prospect: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deals'
    }]


  },
  {
    timestamps: true
  }
);

module.exports = model('Deal', dealSchema);