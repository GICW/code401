'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const { db } = require('./src/models');

db.sync()
  .then(() => {
    const PORT = process.env.PORT || 3001;
    server.start(PORT);
  })
  .catch(console.error);
