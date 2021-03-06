	var trans = 0;
	var count = $('#slidewrapper').find('img').length;
	$("#slidewrapper").css("width", (count+1)*97.81 + "vw");
	$("#next").on('click', function() {
		if (trans == (-97.81*(count-1))) {
			$("#slidewrapper").css("margin-left","0vw" );
			trans = 0;	
	}
	else{
	$("#slidewrapper").css("margin-left", (trans-97.81)+"vw" );
	trans-= 97.81;
}
	});
		$("#past").on('click', function() {
		if (trans == 0) {
			$("#slidewrapper").css("margin-left",(-97.81*(count-1))+"vw" );
			trans = (97.81*(count-1));	
	}
	else{
	$("#slidewrapper").css("margin-left", (trans+97.81)+"vw" );
	trans+= 97.81;
}
	});
setInterval(function(){
	if (trans == (-97.81*(count-1))) {
			$("#slidewrapper").css("margin-left","0vw" );
			trans = 0;	
	}
	else{
	$("#slidewrapper").css("margin-left", (trans-97.81)+"vw" );
	trans-= 97.81;
}
}, 10000);
$(".number_2").on('click', function() {
	$(this).css("background-color","#4cb1ca");
	$(".number_1").css("background-color","#7db122");
	$(".number_3").css("background-color","#7db122");
	$("#img").attr('src', 'images/Layer_35_2.png');
});
$(".number_1").on('click', function() {
	$(this).css("background-color","#4cb1ca");
	$(".number_2").css("background-color","#7db122");
	$(".number_3").css("background-color","#7db122");
	$("#img").attr('src', 'images/Layer_35.png');
});
$(".number_3").on('click', function() {
	$(this).css("background-color","#4cb1ca");
	$(".number_1").css("background-color","#7db122");
	$(".number_2").css("background-color","#7db122");
	$("#img").attr('src', 'images/Layer_35_3.png');
});

 
