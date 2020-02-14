$(document).ready(() => {
  $('#drop-votes').sortable();
  $('#drop-votes').disableSelection();

  $(".box-item").draggable({
    containment: "#container",
    helper: 'clone',
    revert: 'invalid'
  });

  $("#drop-votes, #drag-choices").droppable({
    hoverClass: 'ui-state-highlight',
    accept: ":not(.ui-sortable-helper)",
    drop: function (ev, ui) {
      $(ui.draggable).clone().appendTo(this);
      $(ui.draggable).remove();
    }
  });

  $("#voting").submit((event) => {
    const choiceData = $("#drop-votes").sortable('toArray');
    let choices = {};
    let counter = 0;
    for (let i = choiceData.length; i > 0; i--) {
      choices[i] = $(`#${choiceData[counter]}`).text().trim();
      counter++;
    }
    let $vote_url = $('#grab-url').text();
    event.preventDefault();
    choices.vote_url = $vote_url;
    $.ajax({
      url: '/result',
      type: 'post',
      dataType: 'json',
      data: choices
    });
    $('.vote-container').empty().append('<div class="vote-thanks">Thanks for voting! The poll creator has received your submission.</div>');
  })

});
