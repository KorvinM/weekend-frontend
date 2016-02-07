/* vanilla js autofocus
 * from https://www.youtube.com/watch?v=vPf_4fo0zOA
 */

//http://stackoverflow.com/questions/588040/window-onload-vs-document-onload

window.onload = function(){
	if (document.forms.form.firstname.value === "") {
		document.forms.form.firstname.focus();
		}
};




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
   	 *nb var maxNum was declared globally
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
			var maxNum = 100;
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

