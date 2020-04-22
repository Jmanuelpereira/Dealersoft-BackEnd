const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const vehicleSchema = new Schema(
  {

    model: String,
    year: String,
    make: String,
    plate: Number,
    


  },
  {
    timestamps: true
  }
);

module.exports = model('Vehicle', vehicleSchema);