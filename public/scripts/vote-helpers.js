$(document).ready(() => {

  $('#drop-votes').sortable();
  $('#drop-votes').disableSelection();

  $(".box-item").draggable({
		containment : "#container",
		helper : 'clone',
		revert : 'invalid'
	});

	$("#drop-votes, #drag-choices").droppable({
		hoverClass : 'ui-state-highlight',
    accept: ":not(.ui-sortable-helper)",
		drop : function(ev, ui) {
			$(ui.draggable).clone().appendTo(this);
      $(ui.draggable).remove();
    }
  });


  $("#voting").submit((event) => {
   const choiceData = $( "#drop-votes" ).sortable('toArray');
   let choices = {};
   for (let i = 0; i < choiceData.length; i++) {
      choices[i] = $(`#${choiceData[i]}`).text().trim();
   }
    console.log('choices: ', choices);

    event.preventDefault();
    $.ajax({
        url: '/result',
        type: 'post',
        dataType: 'json',
        data: choices
    });
  })
});
