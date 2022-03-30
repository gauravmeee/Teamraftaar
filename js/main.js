$(document).ready(function(){

	console.log("Hello World");
	
	var open = 0;
	
	$('.dropb').click(function(){
		if(open==0){
		$('.links').css('max-height', '110000px');
			open = 1;
		}
		else{
			$('.links').css('max-height', '0px');
			open = 0;
		}
	});


	$(window).scroll(function(){

		i = $(window).scrollTop();

		if(i>0)
		{
			$('nav').css('background','#0f161e');
			$('nav').css('height','80px');
		}

		else if(i==0)
		{
			$('nav').css('background','');
			$('nav').css('height','140px');
		}

	});
	
	$('.link1').click(function(){
		x = $('.about').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.links').css('max-height', '0px');
			open = 0;
	});

	$('.link2').click(function(){
		x = $('.team').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.links').css('max-height', '0px');
			open = 0;
	});

	$('.link3').click(function(){
		x = $('.contup').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.links').css('max-height', '0px');
			open = 0;
	});
});
