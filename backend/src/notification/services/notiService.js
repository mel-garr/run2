const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient()


exports.createNotification = async ({ userId, type, message }) => {
    return await prisma.Notification.create({
        data: {
            userId,
            type,
            message,
            read: false,
        },
    });
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