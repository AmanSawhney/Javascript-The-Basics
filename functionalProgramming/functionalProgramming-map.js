//review
//map
//higher order function
//does not delete but transforms the array

//practice
var testscores = [100,92,77,68,44,10];
var testfilter = function(score) {
	return score +=10;
}
var pertange = function(score) {
	return score+'%'
}
var testscoreAfterWeighting = testscores.map(testfilter).map(pertange);
print(testscoreAfterWeighting);
//challenge
//change an array of geetings to all upper case words
//save the first word in the array to a variable
var greetings = ['hello', 'hi', 'thanks'];
var shoutArray = greetings.map(function(salutation) {
	return salutation.toUpperCase();
})
print(shoutArray);
var firstWord = greetings[0];
print(firstWord);
