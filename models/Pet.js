// Define a schema
const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    title: {type: String},
    imageURL: {type: String},
    description:{ type: String,},
    price:{ type: String,}
  });
  
  const Pet = mongoose.model('Pet', petSchema);

  module.exports = Pet;