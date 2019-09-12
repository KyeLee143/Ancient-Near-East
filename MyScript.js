$(document).ready(function(){
	$(".red1,.A1").click(function(){
		$("p").show();
		$(".A1").css({"color":"ForestGreen" });
		$(".red1").css({"color":"Crimson" });
		
	});
	$(".red2,.A2").click(function(){
		$("p").show();
		$(".A2").css({"color":"ForestGreen" });
		$(".red2").css({"color":"Crimson" });
	
	});
	$("button").click(function(){
		$("p").show();
		$(".A1").css({"color":"Black" });
		$(".red1").css({"color":"Black" });
		$(".A2").css({"color":"Black" });
		$(".red2").css({"color":"Black" });
	});
});