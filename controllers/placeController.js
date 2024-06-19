const db = require('../db');

// Get all places
exports.getPlaces = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM place');
        res.status(200).json({ message: 'Successfully get place data', places: result.rows });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get place data', error: error.message });
    }
};

// Get a single place by ID
exports.getPlaceById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM place WHERE id_place = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.status(200).json({ message: 'Successfully get place data', place: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get place data', error: error.message });
    }
};
