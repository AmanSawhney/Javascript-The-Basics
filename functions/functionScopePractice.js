'use strict'
//review function scope
//scope is determined where the variable is defined
//global and local
//scope chain
//'use strict' mode
// function roadTrip() {  commented out to try moving varibales to the gloabl scope
// 	var gallons = 12;
// 	var mpg = 34;
// 	return gallons * mpg;
// }
// print(roadTrip());
//chanllenge
//scope chain
//local scope => parent scope
var gallons = 12;
var mpg = 34;
function roadTrip() {
	return gallons*mpg;
}
print(roadTrip());
//challenge 
//build a nested functions 
//child scope => parent scope => global scope
//run the results of the child scope
function parentFunction() {
	function childFunction() {
		return 'I am a child';
	}
	return childFunction();
}
print(parentFunction());