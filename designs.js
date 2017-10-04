// Select color input

// Edit the pattern pixel_canvas
$('#pixel_canvas').on('click', 'td', function() {
  const color = $('#colorPicker').val();
  // console.log(rgb2hex($(this).css('backgroundColor')));
  if (rgb2hex($(this).css('backgroundColor')) === '#ffffff') {
    $(this).css('backgroundColor', color);
  }
  else {
    $(this).css('backgroundColor', '#fff');
  }
});

//Function to convert hex format to a rgb color
//Source: http://wowmotty.blogspot.tw/2009/06/convert-jquery-rgb-output-to-hex-color.html
function rgb2hex(orig){
 var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
}

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
