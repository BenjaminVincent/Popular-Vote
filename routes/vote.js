const express = require("express");
const router = express.Router();
const displayQuestion = require('../public/scripts/helpers');


module.exports = db => {
  router.get("/", (req, res) => {
    res.render("vote");
  });
  return router;
};
