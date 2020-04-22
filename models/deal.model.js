const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const dealSchema = new Schema(
  {


  },
  {
    timestamps: true
  }
);

module.exports = model('Deal', dealSchema);