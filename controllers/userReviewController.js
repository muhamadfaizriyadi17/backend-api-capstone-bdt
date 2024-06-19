const db = require('../db');

// POST new user review
exports.createUserReview = async (req, res) => {
    const { id_user, id_place, review_user, rating, review_date } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO user_review (id_user, id_place, review_user, rating, review_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [id_user, id_place, review_user, rating, review_date]
        );
        res.status(201).json({ message: 'Review added successfully', review: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add review', error: error.message });
    }
};

// GET All user review data
exports.getReviewsByPlaceId = async (req, res) => {
    const { place_id } = req.params;
    try {
        const result = await db.query('SELECT * FROM user_review WHERE id_place = $1', [place_id]);
        res.status(200).json({ message: 'Successfully retrieved reviews', reviews: result.rows });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get reviews', error: error.message });
    }
};

// PUT user review data
exports.updateUserReview = async (req, res) => {
    const { id_review } = req.params;
    const { review_user, rating, review_date } = req.body;
    try {
        const result = await db.query(
            'UPDATE user_review SET review_user = $1, rating = $2, review_date = $3 WHERE id_review = $4 RETURNING *',
            [review_user, rating, review_date, id_review]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review updated successfully', review: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update review', error: error.message });
    }
};
