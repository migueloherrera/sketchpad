var $start = 16;

$(document).ready(function(){
	grid($start);
	paint();
});

function grid($squares) {
	var $total = $squares * $squares;
	var $wh = 936/$squares;
	for(i=1; i<=$total; i++){
		$('#container').append("<div></div>");
	}
	$('#container>div').width($wh+"px");
	$('#container>div').height($wh+"px");
	$('#container>div').css("outline","#BBB solid thin");
	
}

function paint(){
	$('#container div').mouseenter(
		
    	function(){
    		var selected = $("input[type='radio'][name='o']:checked");
			var $color;
    		switch(selected.val()) {
    			case '1':
        			$color = "blue"
        			$(this).css('opacity', 1);
        			$(this).css("background-color", $color);
        			break;
    			case '2':
        			$color = "#" + Math.floor(Math.random()*16777215).toString(16);
        			$(this).css('opacity', 1);
        			$(this).css("background-color", $color);
        			break;
    			case '3':
    				var opacityValue = $(this).css('opacity');
					if(opacityValue > 0){
						$(this).css('opacity', opacityValue - 0.1);
					}
        			break;
			}
        	
       }
    
    );
}

function clearGrid(){
	$('#container>div').remove();
	do {
	var newGrid = prompt("Enter the new grid size (1-128): ", $start);
	}while (newGrid<1 || newGrid >128);
	grid(newGrid);
	paint();
}
