const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(400).send('Registration error');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('User not found');

    const match = await user.comparePassword(password);
    if (match) res.send('Login successful');
    else res.status(401).send('Invalid credentials');
  } catch (err) {
    console.error(err);
    res.status(500).send('Login error');
  }
});

module.exports = router;