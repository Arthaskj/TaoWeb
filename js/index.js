window.onload=function(){

	var i;
	var m=0;
	function warp(aaa,bbb){
		aaa.css("background","#333");
		$(".warpbut li").not(aaa).css("background","#999");
		$(".warpimg li").not(".warpimg li:nth-child("+bbb+")").css("opacity","0");
		$(".warpimg li:nth-child("+bbb+")").css("display","block").css("opacity","1");
	}

$(".warpbut li:nth-child(1)").click(function(){
	warp($(this),1);
});
$(".warpbut li:nth-child(2)").click(function(){
	warp($(this),2);
});
$(".warpbut li:nth-child(3)").click(function(){
	warp($(this),3);
});
$(".warpbut li:nth-child(4)").click(function(){
	warp($(this),4);
});







}