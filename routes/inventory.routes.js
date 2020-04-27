const express = require('express');
const router  = express.Router();
const vehicleModel = require('../models/vehicle.model')

router.get('/all', (req, res, next) => {



  vehicleModel.find()
              .sort({ date: -1 })
              .then(allData => res.json(allData))
              .catch(err => next(err))

              res.json({ message: 'inventory.' })

          


});

router.get('/search:carId', (req, res, next) => {



  vehicleModel.findOne({id_: req.params.carId})
              .sort({ date: -1 })
              .then(allData => res.json(allData))
              .catch(err => next(err))

              res.json({ message: 'inventory.' })

});



module.exports = router;
