const express = require('express');
const User = require("../Login");
const router = express.Router();
// Signup route
router.post('/signup', async (req, res) => {
………………………………
………………………..
………………………….
res.json({ message: 'Signup successful' });
});
// Login route
router.post('/login', async (req, res) => {
…………………………………….
………………..……………………………………………………..
if (user) {
} else {
res.json({ message: 'Login successful' });
res.status(404).json({ message: 'Invalid credentials' });
}
});
module.exports = router;