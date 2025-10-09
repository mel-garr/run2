const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();
const { comparePassword, generateToken, hashPassword } = require('../utils/authUtils');


async function signupUser({ email, password, name}) {
    const existingUser = await prisma.pUser.findUnique({ where: { email } });
    if (existingUser) throw new Error("User alredy exists");
    
    const hashedPassword = await hashPassword(password);
    const user = await prisma.pUser.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    });
    const token = generateToken(user.id);
    return { user, token };
}

async function loginUser({ email, password }) {
    const user = await prisma.pUser.findUnique({ where: { email }});
    if (!user) throw new Error("Invalid credentials");
    
    const valid = await comparePassword(password, user.password);
    if (!valid) throw new Error("PInvalid credentials");

    const token = generateToken(user.id);
    return { user, token };
}

module.exports = { signupUser, loginUser };