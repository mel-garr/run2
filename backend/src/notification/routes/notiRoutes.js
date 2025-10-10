const express = require('express');
const router = express.Router();
const notiController = require("../controllers/notiController");

router.post('/', notiController.createNotification);
router.get('/:userId', notiController.getUserNotification);
router.post('/mark-read-many', notiController.markManyNotificationsAsRead);

module.exports = router;