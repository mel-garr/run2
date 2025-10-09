
const { signupUser, loginUser } = require('../services/authServices');


exports.signup = async(req, res) => {
    try {
        const { email, password, name } = req.body;
        const result = await signupUser({ email, password, name});
        res.status(201).json(result);
    } catch {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const result = await loginUser({ email, password });
        res.status(200).json(result);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
};

