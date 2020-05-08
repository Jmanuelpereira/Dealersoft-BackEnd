const express = require('express');
const router  = express.Router();
const vehicleModel = require('../models/vehicle.model')

//getting al inventory
router.get('/all', (req, res, next) => {
  vehicleModel.find()

              .then(allData => res.status(200).json(allData))
              .catch(err => next(err))

             

});

//agregar carros

router.post('/add-vehicle', (req, res, next) => {
  const { model, year, make, plate } = req.body
  const newCar = {model, year, make, plate}
  vehicleModel.create(newCar)
  .then(vehicleInfo => res.status(200).json({carInfo:vehicleInfo, message: "Vehicle Added"}))
  .catch(err => next(err));

});

//update car

router.post('/:id/update', (req, res, next) => {
  const { model, year, make, plate } = req.body;
  const updatedCar = { model, year, make, plate };
  vehicleModel.findByIdAndUpdate(req.params.id, updatedCar)
  .then(updatedVehicle => res.status(200).json({carInfo:updatedVehicle, status: "Vehicle updated"}))
  .catch(err => next(err));

});

//delete car

router.delete('/:id/delete', (req, res, next) => {

  vehicleModel.findByIdAndRemove(req.params.id)
  .then(res.status(200).json({message: "Vehicle deleted"}))
  .catch(err => next(err));

});
 
//getting one vehicle
router.get('/:id/search', (req, res, next) => {

  vehicleModel.findById(req.params.id)       
              .then(oneCar => res.status(200).json(oneCar))        
              .catch(err => next(err))

});

module.exports = router;
