// Select color input

// Select size input
$('form#sizePicker').submit(function(event) {
  event.preventDefault();
  console.log($('#input_height').value);
  console.log($('#input_width').value);
  makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  // console.log(height,width);
  for (let r = 0; r < height; r++) {
    $('#pixel_canvas').append('<tr></tr>');
    let currentRow = $('#pixel_canvas tr').eq(r);
    currentRow.attr('id','r'+r);
    for (let c = 0; c < width; c++) {
        currentRow.append('<td></td>');
        let currentCol = $('#pixel_canvas td').eq(c);
        currentCol.attr('id','c'+c);
    }
  }

}

// test makeGrid function
// $(makeGrid);
