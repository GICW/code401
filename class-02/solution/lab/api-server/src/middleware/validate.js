'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;
  if (!name) { next("Name Required"); }
  else { next(); }
}

module.exports = validator;
