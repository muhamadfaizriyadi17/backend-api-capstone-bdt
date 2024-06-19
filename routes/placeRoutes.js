const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

// GET all places
router.get('/', placeController.getPlaces);

// GET a single place by ID
router.get('/:id', placeController.getPlaceById);

module.exports = router;
