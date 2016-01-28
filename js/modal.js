//based on http://www.jacklmoore.com/notes/jquery-modal-tutorial/
var modal = (function(){
				var 
				method = {},
				$overlay,
				$modal,
				$content,
				$close,
				$next;

				// Center the modal in the viewport
				method.center = function () {
					var top, left;

					top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
					left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
					$modal.css({
						top:top + $(window).scrollTop(), 
						left:left + $(window).scrollLeft(),
					
					});
				};

				// Open the modal
				method.open = function (settings) {
					$content.empty().append(settings.content);
					$next.empty().append(settings.next);
					$modal.css({
						width: settings.width || 'auto', 
						height: settings.height || 'auto'
					});

					method.center();
					$(window).bind('resize.modal', method.center);
					$modal.show();
					$overlay.show();
					
				};

				// Close the modal
				method.close = function () {
					$modal.hide();
					$overlay.hide();
					$content.empty();
					$(window).unbind('resize.modal');
					/*return all thumbnails to normal opacity*/
					$('.images>div').fadeTo(700,1);
				};

				// Generate the HTML and add it to the document
				$overlay = $('<div id="overlay"></div>');
				$modal = $('<div id="modal"></div>');
				$content = $('<div class="content"></div>');
				$close = $('<a id="close" href="#">close</a>');
				$next = $('<span class="next">Next</span>');

				$modal.hide();
				$overlay.hide();
				$modal.append($content, $close, $next);

				$(document).ready(function(){
					$('body').append($overlay, $modal);						
				});

				$close.click(function(e){
					e.preventDefault();
					method.close();
				});

				return method;
			}());
			
$(document).ready(function(){
	$('.images img').hover(
		function (){
			var toolTip = $(this).attr("title");
			$('h2').replaceWith('<h2 class="toolTip">'+toolTip+'</h2>');
			$(this).parent().css('border','#aaa342 3px solid');
		},
		function (){
			$('.toolTip').replaceWith('<h2>Image Modal</h2>');
			$(this).parent().css('border','grey 3px solid');
			
		}
	)
	$('.images>div').bind({
			mousedown : function(){
					$(this).css('border','red 3px solid');
			},
			mouseup: function(){
				/*get image data from the image inside the just-clicked div*/
					var img = $(this).find('img');
					var imgSrc = $(this).find('img').attr("src");
					var imgTitle = $(this).find('img').attr("title");
					$(this).css('border','grey 5px solid');
					var height = $( window ).height()*0.88;
					var imgSrc = $(this).find('img').attr("src");
					var nextSrc =  $(this).next().find('img').attr("src");
					var prevSrc =  $(this).prev().find('img').attr("src");
					modal.open({content: $("<img style='max-height:"+height+"px;' src='"+imgSrc+"'>"), next:"<a href='#'>Next</a>"});
					//modal.open({content: $(this).find('img')});
					//$('.images').after('<p class="info--select">'+imgTitle+'  removed.</p>');
					$(this).fadeTo(300,0.1);
					//$(this).hide(300);
					/*todo:*/
					//get the src of the previous and next images from the sibling divs, if they exist*/
				
					//add the previous and next links to the modal
					//if they are clicked, then replace the modal content with the image src 
					$('.next').click(function() {
		
						$('#modal img').attr("src",nextSrc	);
		
					});
					
			}
		
	})

	
});


			/*
			
			// Wait until the DOM has loaded before querying the document
			$(document).ready(function(){

		

				$('.images>div').click(function(e){
					var height = $( window ).height()*0.88;
					var imgSrc = $(this).find('img').attr("src");
					modal.open({content: "<img style='max-height:"+height+"px;' src='"+imgSrc+"'>"});
					e.preventDefault();
				});
				
			
			});
*/
