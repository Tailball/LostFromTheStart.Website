const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PreorderSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  preorderCd: {
    type: Boolean,
    required: true
  },
  preorderEp: {
    type: Boolean,
    required: true,
    default: false
  },
  preorderShirt: {
    type: Boolean,
    required: true,
    default: false
  },
  shirtModel: {
    type: String,
    enum: ["LostSouls", "MonitorTheWorld", "Space"]
  },
  shirtSize: {
    type: String,
    enum: [
      "male_s",
      "male_m",
      "male_l",
      "male_xl",
      "male_xxl",
      "female_s",
      "female_m",
      "female_l",
      "female_xl"
    ]
  }
});

const Preorder = Mongoose.model("preorder", PreorderSchema);
module.exports = Preorder;
