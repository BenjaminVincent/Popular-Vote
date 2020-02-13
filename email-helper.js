const mailgunDetails = require('./mailgunDetails')
const mailgun = require('mailgun-js')({ apiKey: mailgunDetails.API_KEY, domain: mailgunDetails.DOMAIN });

const sendVoteEmail = function (data) {

  let adminEmail = data.email;
  let resultURL = data.result_url;
  console.log('adminEmail: ', adminEmail);
  console.log('resultURL: ', resultURL);

  const emailData = {
    from: 'DEV TEAM <maxwrosenthal@gmail.com>',
    to: `NEW USER, ${adminEmail}`,
    subject: 'Someone Voted!',
    html: `<div>Someone voted!</div><div>Click <a href="http://localhost:8080/result/${resultURL}">here</a> to see the updated results.</div>`
  };

  mailgun.messages().send(emailData, (error, body) => {
    console.log('just voted emial: ', emailData);
    //mailgun isn't working...
    if (error) {
      console.log('err2: ', error);
    }
    if (body) {
      console.log('test', body);
    }
  })
};

module.exports = sendVoteEmail;
