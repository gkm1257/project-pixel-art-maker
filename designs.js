// Select color input

// Select size input
$('form#sizePicker').submit(function(event) {
  event.preventDefault();
  console.log($('#input_height').val());
  console.log($('#input_width').val());
  makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  // console.log(height,width);
  let currentRow, currentCol;
  const canvasRow = $('#pixel_canvas tr').length;
  const canvasCol = $('#pixel_canvas tr td').length;
  // console.log(canvasRow, canvasCol);
  // add or remove rows
  if (height > canvasRow) {
    for (let r = canvasRow; r < height; r++) {
      $('#pixel_canvas').append('<tr></tr>');
      currentRow = $('#pixel_canvas tr').eq(r);
      currentRow.attr('id','r'+r);
      for (let c = 0; c < width; c++) {
          currentRow.append('<td></td>');
          currentCol = $('#pixel_canvas td').eq(c);
          currentCol.attr('id','c'+c);
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
  if (width > canvasCol) {
    for (let r = 0; r < canvasRow; r++) {
      currentRow = $('#pixel_canvas tr').eq(r);
      for (let c = canvasCol; c < width; c++) {
          currentRow.append('<td></td>');
          currentCol = $('#pixel_canvas td').eq(c);
          currentCol.attr('id','c'+c);
      }
    }
  }
  else {
    for (let c = canvasCol; c > width; c--) {
        $('#pixel_canvas td').last().remove();
    }
  }
}

// test makeGrid function
// $(makeGrid);
