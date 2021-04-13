function init(){
//add your javascrip between these two lines of code
 
	var alertbutton = document.getElementById('entrybutton');
	var input = document.getElementById('entryinput');
	var output = document.getElementById('textoutput');
	alertbutton.addEventListener('click', function(){
	
		var alertText = "Jorge Anzaldo: " + input.value;
		alert(alertText);
		output.innerHTML = input.value;
		
	});





}
window.addEventListener('load', init);