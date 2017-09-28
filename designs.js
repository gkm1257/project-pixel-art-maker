// Select color input

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
