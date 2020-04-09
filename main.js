// JavaScript Document
var message = document.getElementById('message'),
	grid = document.getElementById('grid');
	

function splitString(){
    
	event.preventDefault();
	
	var new_message = '',
		grid_letters = document.querySelectorAll('#grid div'),
		character_input = document.getElementById("grid_text").value;

	
	//change the style of each character
	grid_letters.forEach(function(gl,index) {
  		
		
		new_class = character_input[index];
		new_class = (new_class)?new_class:'star';
		new_class = ( new_class && (new_class == ' ') )?'space':new_class.toLowerCase();
		
		gl.className = new_class + ' letter';
		
	});

}


//change body Class
function changeBody(class_to_add){
		document.body.className = class_to_add;
}


//build grid of stars
function buildGrid(){
	var i=0,
		grid_items = '';
	
	while(i < 115){
		grid_items += '<div class="star letter"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>';	
		i++;
	}
	grid.innerHTML = grid_items;
	console.log(grid);
}


//on page load build grid
buildGrid();

//show the first message in the form
document.getElementById('submit_grid').submit();

document.getElementById('submit_grid').onsubmit = function(){ splitString(); };
