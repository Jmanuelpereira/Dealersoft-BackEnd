const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const vehicleSchema = new Schema(
  {

    model: String,
    year: String,
    make: String,
    plate: Number,
    buyer: { type: Schema.Types.ObjectId, ref: 'Buyer' },
    
  },
  {
    timestamps: true
  }
);

module.exports = model('Vehicle', vehicleSchema);