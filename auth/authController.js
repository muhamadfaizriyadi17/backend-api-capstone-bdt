const supabase = require('../db');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Failed to register user', error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { session, error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        res.status(200).json({ message: 'User logged in successfully', session });
    } catch (error) {
        res.status(400).json({ message: 'Failed to log in user', error: error.message });
    }
};
