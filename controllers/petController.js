// controllers/petController.js
const Pet = require('../models/Pet');

// Get all pets
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Create a new pet
const createPet = async (req, res) => {
  const { title, imageURL, description, price } = req.body;

  const newPet = new Pet({
    title,
    imageURL,
    description,
    price,
  });

  try {
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllPets,
  createPet,
};
