'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const { db } = require('./models/index');
const customerRoutes = require('./routes/customer.route.js');

app.use(express.json());
app.use(customerRoutes);

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
