const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Property = require('./models/Property');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/real-estate-db', { useNewUrlParser: true, useUnifiedTopology: true });

// User Registration
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  res.status(201).send('User registered');
});

// User Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('User not found');

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) return res.status(401).send('Invalid credentials');

  const token = jwt.sign({ userId: user._id }, 'secret_key');
  res.json({ token });
});

// Property Listing API
app.get('/api/properties', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
