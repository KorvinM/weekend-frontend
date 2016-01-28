/*set up a variable for the character count validation*/
var maxNum = 100;

$(document).ready(function(){
   	/* messing around with focus and blur
   	 *
   	 */
   	
   	$('input, textarea').bind('focus', function(){
		$(this).addClass('form-focus');
   	});
   	$('input, textarea').bind('blur', function(){
		$(this).removeClass('form-focus');
   	});
   	
   	/*character count*/
   	/*debugged version from smashing jquery*
   	 * doesnt work
   	 *
   	$('#status').bind({
		keypress : function(){
			var inputText = $(this).val();
			var numChar = inputText.length;
			var charRemain = numChar - maxNum;
			if (numChar <= maxNum){
				$('.counter').text(charRemain);
				}
			else if (numChar > maxNum){
				//e.preventDefault();//this line doesnt work regardless of event., e, or evt. syntax
				return false;//this line does work but is not reccommneded
				}
				
			}
		});
		/**/
	
		
		/*rewritten version
		 * works
		 */
		$('#status').keypress(function(e){
			var inputText = $(this).val();
			var numChar = inputText.length;
			var charRemain = numChar - maxNum;
			if (numChar <= maxNum){
				$('.counter').text(charRemain);
				}
			else if (numChar > maxNum){
				e.preventDefault();
				//return false;
				}			
			}
		);
		/**/
});
