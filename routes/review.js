const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")
const reviewController = require("../controllers/reviews.js");


// Review Route
router.post(
    "/", 
    isLoggedIn, 
    validateReview, 
    wrapAsync(reviewController.postReview)
);

router.delete(
    "/:reviewId", 
    isLoggedIn, 
    isReviewAuthor, 
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;