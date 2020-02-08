const express = require("express");
const router = express.Router();

//post-admin email to the cookie?
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

//  //POST tweet TO the SERVER
//  const $form = $('#submit-tweet');
//  $form.on('submit', function(event) {
//    event.preventDefault();

//    const inputText = $('#newTweetTextArea').val();
//    if (inputText.length > 140) {
//      $('#tooLong')
//        .slideDown('slow')
//        .focus('#newTweetTextArea');
//      tooLong = true;
//    } else if (inputText.length === 0) {
//      $('#noText')
//        .slideDown('slow')
//        .focus('#newTweetTextArea');
//      noText = true;
//    } else {
//      $.ajax({
//        method: 'POST',
//        url: '/tweets',
//        data: $form.serialize(),
//        success: data => {
//          loadTweets();
//          $('#newTweetTextArea')
//            .val('')
//            .focus();
//          $('.counter').text(140);

//          //remove error messages.
//          $('#tooLong').slideUp('slow');
//          tooLong = false;
//          $('#noText').slideUp('slow');
//          noText = false;
//        }
//      });
//    }
//  });
