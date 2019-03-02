$(document).ready(function(){
// all jQuery methods go here...

	$(".dance-icon").hover(onHovered, notHovered);
	function onHovered() {
		let str = $(this)[0].src;
		let name = str.substring(0,str.length - 8);
		$(this)[0].src = name + "giphy.gif";
	}

	function notHovered() {
		let str = $(this)[0].src;
		let name = str.substring(0, str.length - 9);
		$(this)[0].src = name + "icon.png";

	}
	//challenge 1
	$("#title").html("New title");

	//Challenge 2
	$("#extra-text").remove("");

	//challenge 3
	$("#logo").click(onClick);
	function onClick () {
		$("body").css("background-image", "url(images/bg2.jpg)");
	}

	//challenge 4








});
