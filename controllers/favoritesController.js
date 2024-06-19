const db = require('../db');

// Add a new favorite place
exports.addFavorite = async (req, res) => {
    const { id_user, id_place } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO favorite (id_user, id_place) VALUES ($1, $2) RETURNING *',
            [id_user, id_place]
        );
        res.status(201).json({ message: 'Favorite place added successfully', favorite: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add favorite place', error: error.message });
    }
};

// Get all favorite places for a user
exports.getFavoritesByUser = async (req, res) => {
    const { id_user } = req.params;
    try {
        const result = await db.query(
            'SELECT p.* FROM favorite f JOIN place p ON f.id_place = p.id_place WHERE f.id_user = $1',
            [id_user]
        );
        res.status(200).json({ message: 'Successfully retrieved favorite places', places: result.rows });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get favorite places', error: error.message });
    }
};

// Delete a favorite place
exports.deleteFavorite = async (req, res) => {
    const { id_user, id_place } = req.params;
    try {
        const result = await db.query(
            'DELETE FROM favorite WHERE id_user = $1 AND id_place = $2 RETURNING *',
            [id_user, id_place]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Favorite place not found' });
        }
        res.status(200).json({ message: 'Favorite place deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete favorite place data', error: error.message });
    }
};
