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
      // console.log($( "#drop-votes" ).sortable('toArray'));
    }
  });


  $("#voting").submit((event) => {
    console.log("onSubmit fired");
   const choiceData = $( "#drop-votes" ).sortable('toArray');
   console.log('choiceData: ', choiceData)
  //  const descritionData = $( "#drop-votes" ).sortable('toArray');
   const data = $('#box-0').text();
   let choices = {};
   for (let i = 0; i < choiceData.length; i++) {
      choices[i] = $(`#${choiceData[i]}`).text().trim();
   }
    console.log('choices: ', choices);

    console.log('serialized: ', $(choiceData).serialize());
    event.preventDefault();
    $.ajax({
        url: '/result',
        type: 'post',
        dataType: 'json',
        data: choices,
        success: function(something) {
                console.log('data: ', something);

                 }
    });
  })
});
