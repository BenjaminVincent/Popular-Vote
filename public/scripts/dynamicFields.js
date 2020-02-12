var room = 1;
function addInputField() {

  room++;
  var objTo = document.getElementById('extraFields')
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "option removeclass" + room);
  var rdiv = 'removeclass' + room;
  divtest.innerHTML = '<div class=" nopadding" ><div class="form-group"><input type="text" class="form-control" id="Schoolname" name="choice" value="" placeholder="choice"></div></div><div class=" nopadding"><div class="form-group"><input type="text" class="form-control" id="Major" name="description" value="" placeholder="description"></div></div><div class=" nopadding"><div class="form-group"><div class="input-group"><div class="input-group-btn"><button class="btn btn-danger" type="button" onclick="remove_education_fields(' + room + ');"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></div></div></div></div></div><div class="clear"></div>';

  objTo.appendChild(divtest)
}
function remove_education_fields(rid) {
  $('.removeclass' + rid).remove();
}
