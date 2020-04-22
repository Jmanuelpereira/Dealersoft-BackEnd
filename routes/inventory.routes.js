const express = require('express');
const router  = express.Router();
const vehicleModel = require('../models/vehicle.model')

/* GET home page */
router.get('/inventory', (req, res, next) => {
  

  vehicleModel.find()
              .then(allData => {
               res.render('back-views/inventory-views/all-inventory'), {data:allData};
              })
              .catch(err => next(err))


});

module.exports = router;
