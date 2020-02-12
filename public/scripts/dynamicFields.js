var room = 1;
function addInputField() {

  room++;
  var objTo = document.getElementById('dynamicFields')
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "option removeclass" + room);
  var rdiv = 'removeclass' + room;
  divtest.innerHTML = '<input type = "text" class="form-control" form ="poll-question" id ="choice" name ="choice" value ="" placeholder="choice"><input type="text" class="form-control" form="poll-question" id="description" name="description" value="" placeholder="description"><div class="input-group-btn"><button class="btn btn-danger" type="button" onclick="remove_education_fields(' + room + ');"><span class="glyphicon glyphicon-minus" aria-hidden="true">Remove</span></button></div><div class="clear"></div>';

  objTo.appendChild(divtest)
}
function remove_education_fields(rid) {
  $('.removeclass' + rid).remove();
}
