const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => { res.send('signup endpoint working'); });
router.post('/login', (req, res) => { res.send('login endpoint working'); });

module.exports = router;