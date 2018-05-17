const express = require('express');
const router = express.Router();

const Preorder = require("../mongoDB/models/Preorder");

router.post('/all', (req, res) => {

  if(req.body.username !== 'lostfromthestartband@gmail.com' || req.body.password !== 'L@urensIsDeLeider!')
  {
    return res.status(401).json({message: 'Unauthorized'});
  }

  Preorder.find()
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
  const preorder = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    preorderCd: true,
    preorderEp: req.body.preorderEp === undefined ? false : req.body.preorderEp,
    preorderShirt: req.body.preorderShirt === undefined ? false : req.body.preorderShirt,
    shirtModel: req.body.shirtModel,
    shirtSize: req.body.shirtSize
  };

  let hasErrors = false;
  let errors = {};

  if (!preorder.firstName) {
    errors.firstName = "First name is required";
    hasErrors = true;
  }

  if (!preorder.lastName) {
    errors.lastName = "Last name is required";
    hasErrors = true;
  }

  if (!preorder.email) {
    errors.email = "Email is required";
    hasErrors = true;
  }

  if (preorder.preorderShirt == 'true') {
    if (preorder.shirtModel === undefined) {
      errors.shirtModel = "Shirt model is required when there is a preorder with shirt";
      hasErrors = true;
    }
    if (preorder.shirtSize === undefined) {
      errors.shirtSize = "Shirt size is required when there is a preorder with shirt";
      hasErrors = true;
    }
  }

  if (hasErrors) {
    return res.status(400).json(errors);
  }

  new Preorder(preorder).save()
    .then(order => res.json(order))
    .catch(err => res.status(404).json(err.message));
});

module.exports = router;