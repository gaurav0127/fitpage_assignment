const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    eventId: { type: String, required: true },
    userId: { type: String, required: true },
    registrationExperience: { type: Number, required: true },
    eventExperience: { type: Number, required: true },
    breakfastExperience: { type: Number, required: true },
    overallRating: { type: Number, required: true },
    reviewText: { type: String },
    likes: { type: Number, default: 0 },
    reports: { type: Number, default: 0 },
    responded: { type: Boolean, default: false },
    responseText: { type: String }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
