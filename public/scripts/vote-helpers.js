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
  //  const descritionData = $( "#drop-votes" ).sortable('toArray');
   const data = $('#box-0').text();
   let choices = {};
   for (let i = 0; i < choiceData.length; i++) {
      choices[i] = $(`#box-${i}`).text().trim();
   }

    event.preventDefault();
    $.ajax({
        url: '/result/ok',
        type: 'post',
        dataType: 'json',
        data: $(choices).serialize(),
        success: function(data) {
                console.log(data);
                 }
    });
  })
});
