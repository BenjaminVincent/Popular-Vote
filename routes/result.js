const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')

module.exports = db => {
  router.get("/", (req, res) => {
    res.render('result');
  });

  router.post("/", (req, res) => {
    console.log('req', req)
    console.log('req.params: ', req.params)


    res.redirect('/result')
  })
  return router;
};
