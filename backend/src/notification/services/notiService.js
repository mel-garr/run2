const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient()
const { sendWelcomeEmail } = require("./emailService");

exports.createNotification = async ({ userId, type, message }) => {
    const user = await prisma.pUser.findUnique({
        where: { id: Number(userId) },
    });

    if (!user) {
        throw new Error('User not found');
    }
    
    const notific =  await prisma.Notification.create({
        data: {
            userId: user.id,
            type,
            message,
            read: false,
        },
    });

    if (type === "info"){
        try {
            await emailService.sendWelcomeEmail(
            user.email,
            `New ${type || 'Notification'}`,
            `<p>${message}</p>`
        );
        console.log('Email sent successfully');
        }catch(err){
            console.log("failed to send email: ", err.message);
        }
    }
};

exports.getUserNotification = async( userId ) => {
    return await prisma.Notification.findMany({
        where: {userId},
        orderBy: { createdAt: 'desc'},
    });
};

exports.markManyAsRead = async (notificationIds) => {
    return await prisma.Notification.updateMany({
        where: { id: { in: notificationIds } },
        data: { read: true},
    });
};