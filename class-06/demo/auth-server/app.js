'use strict';

// 3rd Party Resources
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

// Prepare the express app
const app = express();

console.log('Environment:', process.env.NODE_ENV);

// Connect to Postgres database using environment variable
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }  // if your DB requires SSL (common in managed DBs)
  }
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sequelize model
const Users = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }
});

// Before create hook (you can hash password here too if you want)
Users.beforeCreate((user) => {
  console.log('Creating user:', user.username);
});

// Signup route
app.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) {
    res.status(403).send("Error Creating User");
  }
});

// Signin route
app.post('/signin', async (req, res) => {
  try {
    let basicHeaderParts = req.headers.authorization.split(' ');
    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');

    const user = await Users.findOne({ where: { username } });
    if (!user) throw new Error('User not found');

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    } else {
      throw new Error('Invalid User');
    }
  } catch (error) {
    res.status(403).send("Invalid Login");
  }
});

// Sync DB and start server
sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server up on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(e => {
    console.error('Could not start server', e.message);
  });
