function init(){
//add your javascrip between these two lines of code
 
	var button= document.getElementById('entrybutton');
	var input = document.getElementById('entryinput');
	var output = document.getElementById('textoutput');
	button.addEventListener('click', function(){
	
		var alertText = "Jorge Anzaldo: " + input.value;
		alert(alertText);

	});





}
window.addEventListener('load', init);