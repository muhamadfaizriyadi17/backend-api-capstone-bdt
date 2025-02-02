const db = require('../db');

// Create a new user
exports.createUser = async (req, res) => {
    const { username, email, password, image_profile } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO users (username, email, password, image_profile) VALUES ($1, $2, $3, $4) RETURNING *',
            [username, email, password, image_profile]
        );
        res.status(201).json({ message: 'User created successfully', user: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.status(200).json({ message: 'Successfully get user data', users: result.rows });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get users', error: error.message });
    }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM users WHERE id_user = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Successfully get user data', user: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to get user data', error: error.message });
    }
};

// Update a user's full details
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password, image_profile } = req.body;
    try {
        const result = await db.query(
            'UPDATE users SET username = $1, email = $2, password = $3, image_profile = $4 WHERE id_user = $5 RETURNING *',
            [username, email, password, image_profile, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user data', error: error.message });
    }
};

// Partially update a user's password or profile image
exports.partialUpdateUser = async (req, res) => {
    const { id } = req.params;
    const { password, image_profile } = req.body;
    try {
        let query = 'UPDATE users SET ';
        const values = [];
        if (password) {
            values.push(password);
            query += `password = $${values.length}`;
        }
        if (image_profile) {
            if (values.length > 0) query += ', ';
            values.push(image_profile);
            query += `image_profile = $${values.length}`;
        }
        query += ` WHERE id_user = $${values.length + 1} RETURNING *`;
        values.push(id);
        const result = await db.query(query, values);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user data', error: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM users WHERE id_user = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user data', error: error.message });
    }
    
};
// Registrasi pengguna
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Periksa apakah email sudah digunakan
        const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Email sudah digunakan' });
        }

        // Tambahkan pengguna baru ke database
        const newUser = await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);

        res.status(201).json({ message: 'Pengguna berhasil terdaftar', data: newUser.rows[0] });
    } catch (err) {
        console.error('Gagal mendaftar pengguna:', err);
        res.status(500).json({ error: 'Terjadi kesalahan saat mendaftar pengguna' });
    }
};

// Login pengguna
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Cari pengguna berdasarkan email
        const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);

        // Periksa apakah pengguna ditemukan
        if (user.rows.length === 0) {
            return res.status(404).json({ error: 'Email atau kata sandi salah' });
        }

        // Verifikasi kata sandi
        if (password !== user.rows[0].password) {
            return res.status(401).json({ error: 'Email atau kata sandi salah' });
        }

        res.status(200).json({ message: 'Berhasil login', data: user.rows[0] });
    } catch (err) {
        console.error('Gagal login pengguna:', err);
        res.status(500).json({ error: 'Terjadi kesalahan saat login pengguna' });
    }
};

exports.logoutUser = async (req, res) => {
    
    // Contoh sederhana, menganggap pengguna sudah logout
    res.status(200).json({ message: 'Berhasil logout' });
};
