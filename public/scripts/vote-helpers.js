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
      console.log($( "#drop-votes" ).sortable('toArray'));
		}
	});
});
