const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
const JWT_EXPIRES_IN = '1h';

async function hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
}

async function comparePassword(input, hashed) {
    return bcrypt.compare(input, hashed);
}

function generateToken(userId){
    return jwt.sign({ id: userId}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN});
}

module.exports = { hashPassword, comparePassword, generateToken};