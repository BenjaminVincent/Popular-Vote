const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')

module.exports = db => {
  router.get("/", (req, res) => {
    res.render('result');
  });

  router.post("/", (req, res) => {

    // console.log('req.params: ', req.params)


    res.redirect('/result')
  })


  router.get("/ok", (req, res) => {
    res.send("ok");
  });

  router.post("/ok", (req, res) => {
    res.send("ok");
  });
  return router;
};
