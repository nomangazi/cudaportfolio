$(document).ready(function(){
	//STICKY MENU [HEADER SECTION]
	$(".sticky-menu").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
			}
		});
	//MEXITUP [PORTFOLIO SECTION]
	var mixer = mixitup('.container');
});

function openNav(){
	document.querySelector(".menu-content").style.width = "100%";
}

function closeNav(){
	document.querySelector(".menu-content").style.width = "0%";
}
