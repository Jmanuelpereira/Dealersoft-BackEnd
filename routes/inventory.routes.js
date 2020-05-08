const express = require('express');
const router  = express.Router();
const vehicleModel = require('../models/vehicle.model')

//getting al inventory
router.post('/all', (req, res, next) => {
  vehicleModel.find()

              .then(allData => res.status(200).json(allData))
              .catch(err => next(err))

             

});

//agregar carros

router.post('/add', (req, res, next) => {

  res.json(console.log("Received"))
  
});

router.post('/add-vehicle', (req, res, next) => {
  const { model, year, make, plate } = req.body
  vehicleModel.create(req.body)
  .then(vehicleInfo => res.status(200).json({ car: vehicleInfo, message: "Received"}))
  .catch(err => next(err));


});
 

//getting one vehicle
router.post('/search:carId', (req, res, next) => {



  vehicleModel.findOne({_id:req.params.carId})
              
              .sort({ date: -1 })
              .then(allData => {
                res.status(200).json({ message: "Este es el id del carro ", id: req.params.carId})            
              })
              .catch(err => next(err))    

});



module.exports = router;
