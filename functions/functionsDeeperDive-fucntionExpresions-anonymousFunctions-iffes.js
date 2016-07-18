//review
//function expression 
//anonymous expressions
//IFFEs
//practice
function knockKnock() {
	return 'Who\'s there?';
}
//chanenge 
//call the knockKnock function
print(knockKnock());
//challenge 
//turn knockKnock into an annoymous functionc within a function expressions
//call the funciton 
var knock = function() {
	return 'Who\'s there?';
}
print(knock());
//Immediately Invoked Function Expression 
//practice 
function dogWalker(person, dog) {
	return (person +' is talking ' + dog + ' for a walk');
}
print(dogWalker('Aman', 'Charlie'));
//challenge
//create an immediately invoked function expression
//store the IIFE within a variable and call it
var walkingTheDog = (function(person , dog) {
		return (person +' is talking ' + dog + ' for a walk');
}('Aman', 'Charlie'));
print(walkingTheDog);