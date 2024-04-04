const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/submit', authMiddleware, reviewController.submitReview);

// Define other routes

module.exports = router;
