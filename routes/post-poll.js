const express = require("express");
const router = express.Router();

module.exports = db => {
  router.post("/", (req, res) => {
    db.query(
      `INSERT INTO polls (question, admin_email)
    VALUES ('What movie should we go see?', 'billyjenkins@hotrod.swam');`
    )
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
