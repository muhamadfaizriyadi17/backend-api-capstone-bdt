const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

// POST a new favorite place
router.post('/', favoritesController.addFavorite);

// GET all favorite places for a user
router.get('/:id_user', favoritesController.getFavoritesByUser);

// DELETE a favorite place
router.delete('/:id_user/:id_place', favoritesController.deleteFavorite);

module.exports = router;
