// Select color input
const colorPicker = document.getElementById("colorPicker");
const colorInit   = "rgba(0, 0, 0, 0)";

// Edit the pattern pixel_canvas
$('#pixel_canvas').on('click', 'td', function() {
  if ($(this).css('backgroundColor') === colorInit) {
    $(this)[0].style.backgroundColor = colorPicker.value;
  }
  else {
    $(this).css('backgroundColor', colorInit);
  }
});


// Select size input
const height = document.getElementById("input_height");
const width  = document.getElementById("input_width");

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  makeGrid(height.value, width.value);
});


function makeGrid(height, width) {

  const table = document.getElementById("pixel_canvas");
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
  for (let r = 0; r < height; r++) {
    table.insertRow(0);
    for (let c = 0; c < width; c++) {
      table.rows[0].insertCell(0);
    }
  }
}
