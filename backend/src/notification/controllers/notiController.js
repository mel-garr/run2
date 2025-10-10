
const notiService = require('../services/notiService');

exports.createNotification = async(req, res) => {
    try {
        const { userId, type, message } = req.body;
        const notification = await notiService.createNotification({ userId, type, message });
        res.status(201).json(notification);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getUserNotification = async(req, res) => {
    try{
        const userId  = parseInt(req.params.userId);
        const notifications = await notiService.getUserNotification(userId);
        res.status(200).json(notifications);
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

exports.markManyNotificationsAsRead = async(req, res) => {
    try {
        const { notificationIds } = req.body;
        const updated = await notiService.markManyAsRead(notificationIds);
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}