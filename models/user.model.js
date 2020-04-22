const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {

      firstName: {
          type: String
      },

      lastName: {
          type: String
      },
      
      avatar: {
          type: String,
          
          default:"https://capenetworks.com/static/images/testimonials/user-icon.svg"
      },

      email: {
          type: String
      },

        phone: {
          type: String
      },

      password: {
          type: String
      },

      confirmationCode: {
          type: String
      },
     
      banned: {
          type: Boolean
      },
    
      role: {
          type: String,
          enum: ["RRHH", "Sales", "Admin"],
          default: "Sales"
      },
    
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);