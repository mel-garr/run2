
const { signupUser, loginUser } = require('../services/authServices');


exports.signup = async(req, res) => {
    try {
        const { email, password, name } = req.body;
        const result = await signupUser({ email, password, name});
        res.status(201).json(result);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const result = await loginUser({ email, password });
        res.status(200).json(result);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
};

exports.logout = async(req, res) => {
    res.json({ message: "Logged out successfully" });
}
