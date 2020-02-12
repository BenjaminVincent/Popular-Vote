$(document).ready(() => {
  $('.box-item').draggable({
    cursor: 'move',
    helper: "clone"
  });
  $(".drop-votes").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo(".drop-votes");
        }
      });
    }
  });


  $(".drag-choices").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo(".drop-votes");
        }
      });
    }
  });

});
