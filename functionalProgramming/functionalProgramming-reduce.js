//review reduce
//higher order function
//two arguments
//highly customizable
//practice
var homeruns = [
	{batter: 12},
	{batter: 1},
	{batter: 22},
	{batter: 10},
	{batter: 28},
	{batter: 21},
	{batter: 14},
	{batter: 18}

];
var totalHomeRuns = homeruns.reduce(function(a, b) {
	return a + b.batter;
}, 0);
print(totalHomeRuns);
//challenge
//create an array of 5 elements
//find sum using reduce, product, and largest value
var numbers = [1,2,3,4,5];
var sum = numbers.reduce(function(a,b) {
	return a + b;
}, 0);
print('The sum of this array: ' + numbers + ' is ' + sum);
var product = numbers.reduce(function(a,b) {
	return a * b;
}, 1);
print('The product of this array: ' + numbers + '  is ' + product);
var largest = numbers.reduce(function(a,b) {
	if (b > a) {
		a = b;
		return a;
	}
}, 0);
print('The largest of this array: ' + numbers + '  is ' + largest);
//practice
//use map on all elements of an array
//use reduce method to return a single value
var chained = numbers.map(function(multi) {
	return multi * 2;
}).reduce(function(a,b) {
	return a*b
});
print('I am the result of a chained higher order function: ' + chained);

