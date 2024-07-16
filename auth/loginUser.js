const supabase = require('../db');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const { session, error } = await supabase.auth.signIn({ email, password });

        if (error) {
            return res.status(401).json({ message: 'Failed to log in user', error: error.message });
        }

        res.status(200).json({ message: 'User logged in successfully', session });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
