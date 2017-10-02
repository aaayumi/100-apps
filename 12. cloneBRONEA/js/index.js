$(document).ready(function(){
	$(".bg-4 ul li").mouseover(
		function() {
			$('h4', this).css("color","blue")
			console.log("shadow")
		})
	.mouseout(function(){
		$('h4', this).css("color", "white")
	})
})