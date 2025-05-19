'use strict';

const express = require('express');
const { customerCollection, orderCollection } = require('../models/index');
const router = express.Router();

router.get('/customers', async (req, res) => {
  try {
    const customers = await customerCollection.read(null, { include: orderCollection.model });
    res.status(200).json(customers);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/customers/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const customer = await customerCollection.read(id, { include: orderCollection.model });
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.status(200).json(customer);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/customers', async (req, res) => {
  try {
    const customer = await customerCollection.create(req.body);
    res.status(201).json(customer);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.put('/customers/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const customer = await customerCollection.update(id, req.body);
    res.status(200).json(customer);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.delete('/customers/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await customerCollection.delete(id);
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
