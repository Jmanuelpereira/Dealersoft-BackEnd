const express = require('express');
const router  = express.Router();
const vehicleModel = require('../models/vehicle.model')

//getting al inventory
router.get('/all', (req, res, next) => {
  vehicleModel.find()
              .sort({ date: -1 })
              .then(allData => res.json(allData))
              .catch(err => next(err))

              res.status(200).json(allData)

});

//agregar carros

router.get('/add', (req, res, next) => {
  vehicleModel.create(req.body)
  .then(vehicleInfo => res.status(200).json({ car: vehicleInfo }))
  .catch(err => next(err));


});
 

//getting one vehicle
router.get('/search:carId', (req, res, next) => {



  vehicleModel.findOne({id_: req.params.carId})
              
              .sort({ date: -1 })
              .then(allData => {
                res.status(200).json({ message: "Este es el id del carro ", id: req.params.carId})            
              })
              .catch(err => next(err))    

});



module.exports = router;
