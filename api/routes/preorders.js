const express = require("express");
const router = express.Router();

const hash = require("../../utils/encryption");
const Preorder = require("../../mongoDB/models/Preorder");


//@Route:         /api/preorders/all
//@Method:        POST
//@Request body:  username, password
//@Returns:       array of all preorder objects
router.post("/all", (req, res) => {
  postAll(req, res);
});

async function postAll(req, res) {
  const validLogin = await hash.compareCredentials(
    req.body.username,
    req.body.password
  );
  console.log(validLogin);

  if (!validLogin) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    Preorder.find()
      .then(orders => {
        res.json(orders);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
}


//@Route:         /api/preorders
//@Method:        POST
//@Request body:  preorder object (firstName, lastName, email, preorderCd, preorderEp, preorderShirt, shirtModel, shirtSize)
//@Returns:       the saved preorder
router.post("/", (req, res) => {
  const preorder = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    preorderCd: true,
    preorderEp: req.body.preorderEp === undefined ? false : req.body.preorderEp,
    preorderShirt:
      req.body.preorderShirt === undefined ? false : req.body.preorderShirt,
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

  if (preorder.preorderShirt == "true") {
    if (preorder.shirtModel === undefined) {
      errors.shirtModel =
        "Shirt model is required when there is a preorder with shirt";
      hasErrors = true;
    }
    if (preorder.shirtSize === undefined) {
      errors.shirtSize =
        "Shirt size is required when there is a preorder with shirt";
      hasErrors = true;
    }
  }

  if (hasErrors) {
    return res.status(400).json(errors);
  }

  savePreorder(req, res, preorder, errors);
});

async function savePreorder(req, res, preorder, errors){
  const foundOrder = await Preorder.findOne({ email: preorder.email })

  if(foundOrder){
    errors.email = "A preorder already exists for this email address";
    return res.json(errors);
  }

  const newOrder = await new Preorder(preorder).save();
  return res.json(newOrder);
}


module.exports = router;
