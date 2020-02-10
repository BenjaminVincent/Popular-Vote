const displayQuestion = (question) => {
  console.log('displayQuestion: ');

  $('.poll-container').append(`
      <div> ${question} </div>
    `);
};

