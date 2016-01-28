/*$(document).ready(function(){
	$('.images img').bind({
		mouseenter : function (){
			var toolTip = $(this).attr("title");
			$('.images').after('<p class="toolTip">'+toolTip+'</p>');
		},
		mouseleave : function (){
			$('p.toolTip').hide();
		}
	});
});
*/
var url = window.location.href;
$(document).ready(function(){
	// Will also work for relative and absolute hrefs
	//how to modify this to prevent default action on the link when active?
	$('nav a').filter(function() {
		return this.href == url;
	}).addClass('active');
	
	
    /*AJAX stuff.
     * Can't get the ajax loaded content to then respond to the javascript, even if preloaded in the head of the container document.
     * 
     * so is commented out
     
	$('nav a').click(function(event) {
      event.preventDefault();
	  
      $('main').load(this.href + ' main > *');
   });
   
   * todo: work out how to get js to work 
   * */	
});
