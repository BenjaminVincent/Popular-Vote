const express = require("express");
const router = express.Router();

module.exports = db => {
  router.post("/api/create", (req, res) => {
    console.log("req.body.question:", req.body.question);

    const question = req.body.question;
    db.query(
      `INSERT INTO polls (question, email_id)
       VALUES ($1, SELECT MAX(id) FROM emails); `,
      [question]
    )
      // .then(() => {
      //   res.redirect("/api/polls");
      // })
      // .catch(err => {
      //   res.status(500).json({ error: err.message });
      // });
  });
  return router;
};
