const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')

module.exports = db => {
  return router.get("/", (req, res) => {
    res.render('result');
  });
};
