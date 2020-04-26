const express = require('express');
const router  = express.Router();
const vehicleModel = require('../models/vehicle.model')

/* GET home page */
router.get('/inventory', (req, res, next) => {



  vehicleModel.find()
              .sort({ date: -1 })
              .then(allData => res.json(allData))
              .catch(err => next(err))


});

module.exports = router;
