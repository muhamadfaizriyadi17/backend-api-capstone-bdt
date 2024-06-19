const express = require('express');
const router = express.Router();
const userReviewController = require('../controllers/userReviewController');

// POST new user review
router.post('/', userReviewController.createUserReview);

// GET All user review data
router.get('/:place_id', userReviewController.getReviewsByPlaceId);

// PUT user review data
router.put('/:id_review', userReviewController.updateUserReview);

module.exports = router;