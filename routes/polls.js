const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    res.render("create-poll");
  });

  router.post("/", (req, res) => {
    const question = req.body.question;
    const choice = req.body.choice;

    db.query(
      `
      INSERT INTO polls (question, email_id)
      VALUES ($1, (SELECT MAX(id) FROM emails));
      `,
      [question]
    )

    db.query(`
    INSERT INTO links (poll_id, vote_url, result_url)
    VALUES ((SELECT MAX(id) FROM polls), md5(random()::text), md5(random()::text));
    `)


    for (let i = 0; i < choice.length; i++) {
      db.query(
        `
      INSERT INTO choices (poll_id, title, description)
      VALUES ((SELECT MAX(id) FROM polls), $1, 'temp');
    `,
        [choice[i]]
      )
        .then(() => {
          res.redirect("/api/vote");
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });

    }
  });
  return router;
};
