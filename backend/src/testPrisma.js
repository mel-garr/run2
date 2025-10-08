const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function testDb() {
    try {
        const Aemail = "alice@exemple.com";
        const exitingUser = await prisma.user.findUnique({
            where: { email: Aemail },
        });
        if (exitingUser){
            console.log("User alredy exists: ", exitingUser);
        }
        else {
            const newUser = await prisma.user.create({
                data: {name: "Alince", email:Aemail},
            });
            console.log("user creater", newUser);
        }
        const users = await prisma.user.findMany();
        console.log("All users in DB:", users);
    }catch (err){
        console.error("Prisma error:", err);
    }finally {
        await prisma.$disconnect();
    }
}

testDb();