/**
 * this is all from https://www.youtube.com/watch?v=Bv_5Zv5c-Ts
 *
 */
  
/*
 * variable scope, undefined, execution context, lexical context, scope chain 
function a(){
	function b(){
		console.log('Called b!');
		console.log(myVar);
	}
	var myVar=2;
	console.log(myVar);
	b();
}
console.log(myVar);
var myVar ='Hello World';
a();

/*synchronous asynchronous events - the event queue*/
//simulate long running function
function waitMs(ms){
	var time= ms+new Date().getTime(); 
	while (new Date()<time){}
	console.log('finished wait function');
	}
function clickHandle(){
	console.log('click event detected');
	}

//listen for the click
document.addEventListener('click',clickHandle);
waitMs(420);
console.log('finished execution');

//coercion and comparison operators
var a = 23, b = "string", c = true,d = "23";
if (a==d){
	console.log("Equal");
	}else{
	console.log("Not Equal");}

if (a===d){
	console.log("Equal");
	}else{
	console.log("Not Equal");}


/* some jquery for the ui*/
$(document).ready(function(){

$(".summary div.summary-input").addClass("hide");
/*first attempt
$(".summary h3").click(function(){
	$(this).next('div').toggleClass("hide");	
});
*/

$(".summary h3").click(function(){
	var summaryIn = $(this).next('div').html();	
	$('#summary-output').empty().html(summaryIn);
});
});
