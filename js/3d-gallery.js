//based on  tutorial in web designer magazine, 2012
$(document).ready(function(){
	$('.thumblinks li a').click(function(){
		event.preventDefault();
		reference = $(this).attr("href");
		$('.thumblinks li a').removeClass("selected");
		$(this).addClass("selected");
		$('.thumbnails li:first').before($(reference));
		$('#gallery-bottom img').attr("src", $(reference+" img").attr("rel") );
		});
		
		winHeight = parseInt($(window).height());
		winWidth = parseInt($(window).width());
		if ((winWidth/16*9)<winHeight){
			$('#gallery-bottom img').css({height:winHeight});
			} else{
			$('#gallery-bottom img').css({width:winWidth});
		
			}
		$('#gallery-container').css({height:winHeight});	
		$('#gallery-bottom').css({transform:"rotateX(-90deg) translateZ(-"+(winHeight/2)+"px) translateY("+(winHeight/2)+"px)",height:winHeight});	

		$('.thumbnails').click(function(){
			$('#gallery-rotate').css({transform:"scale3d(1,1,1) rotateX(90deg) translateY(-"+(winHeight)+"px)"});
			
			});
			
		$('#gallery-bottom img').click(function(){
			$('#gallery-rotate').css({transform:"scale3d(1,1,1) rotate(0deg) translateZ(0px)"});
			
			});	
		

});
