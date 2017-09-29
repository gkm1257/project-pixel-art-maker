// Select color input
// Update pattern color after color changed
$('#colorPicker').change(function() {
  const color = $('#colorPicker').val();
  $('#pixel_canvas td').each(function() {
    if (rgb2hex($(this).css('backgroundColor')) != '#ffffff') {
      $(this).css('backgroundColor', color);
    }
  });
});

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
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  // console.log($('#input_height').val());
  // console.log($('#input_width').val());
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

// Your code goes here!
  let currentRow, currentCol;
  const canvasRow = $('#pixel_canvas tr').length;
  const canvasCol = $('tr:nth-child(1) td').length;
  // console.log(canvasRow, canvasCol);
  // add or remove rows
  if (height > canvasRow) {
    for (let r = canvasRow; r < height; r++) {
      $('#pixel_canvas').append('<tr></tr>');
      currentRow = $('#pixel_canvas tr').eq(r);
      for (let c = 0; c < width; c++) {
          currentRow.append('<td></td>');
          currentRow.find('td').last().css('backgroundColor', 'white');
      }
    }
  }
  else {
    for (let r = canvasRow; r > height; r--) {
      // two ways to remove rows
      // $('#pixel_canvas tr').eq(r-1).remove();
      $('#pixel_canvas tr').last().remove();
    }
  }
  // add or remove columns
  // console.log('height = '+height+', canvasRow = '+canvasRow);
  // console.log('width = '+width+', canvasCol = '+canvasCol);
  const updateRowLimit = (height < canvasRow) ? height : canvasRow;
  if (width > canvasCol) {
    for (let r = 0; r < updateRowLimit; r++) {
      currentRow = $('#pixel_canvas tr').eq(r);
      for (let c = canvasCol; c < width; c++) {
          currentRow.append('<td></td>');
          currentRow.find('td').last().css('backgroundColor', 'white');
      }
    }
  }
  else {
    for (let r = 0; r < updateRowLimit; r++) {
      currentRow = $('#pixel_canvas tr').eq(r);
      for (let c = canvasCol; c > width; c--) {
          currentRow.find('td').last().remove();
      }
    }
  }
}

// test makeGrid function
// $(makeGrid);
