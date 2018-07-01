// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height=$('#inputHeight').val();
	width=$('#inputWeight').val();
	
	makeGrid(height, width);
})
function makeGrid(N,M) {
	$('tr').remove();
	

	// Your code goes here!

	//like make a triangle quiz, using nested loops
	
	for(var a=1; a<=N; a++) {
		$('#pixelCanvas').append('<tr id=table' +a+'></tr>');
		for (var b=1; b<=M; b++) {
			$('#table'+a).append('<td></td>');
		}
	} 

	//color picker code
	$('td').click(function (){
		color = $('#colorPicker').val();

		if ($(this).attr('style')){
			$(this).removeAttr('style')
		}else{
			$(this).attr('style', 'background-color:' + color);
		}
	})
}
