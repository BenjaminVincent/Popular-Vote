const express = require("express");
const router = express.Router();

module.exports = db => {
  router.post("/", (req, res) => {

    const email = req.body.email[0];

    db.query(
      `INSERT INTO emails (email)
      VALUES ($1);`,
      [email]
    )
      .then(() => {
        res.redirect("/polls");
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
