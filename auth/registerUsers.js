const supabase = require('../db');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const { user, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            return res.status(400).json({ message: 'Failed to register user', error: error.message });
        }

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
