//review
//functional programing
//pillar of Javascipt
//functions are values and can be passed into other functions as arguments
//high order functions, pure functions
var weather = [72, 84, 34, 58, 92, 24, 47, 85, 72, 54];
var goOutside = [];
for (var i = 0; i<weather.length; i++) {
	if (weather[i] > 70){
		goOutside.push(weather[i]);
	}
}
print(goOutside);
//do it with the filter method
var weatherfilter = function(weatherLocal) {
		return weatherLocal > 70;
}
goOutside = weather.filter(weatherfilter);
print(goOutside)
//challenge
var forcast = [
	{day: 'Monday', sun: true},
	{day: 'Tuesday', sun: false},
	{day: 'Wednesday', sun: false},
	{day: 'Thursday', sun: true},
	{day: 'Friday', sun:false},
	{day: 'Saturday', sun: true},
	{day: 'Sunday', sun: false}

]
var sunnyDaysFilter = function(forcast) {
	if (forcast.sun) {
		return forcast;
	}
}
var sunnyDays = [];
sunnyDays = forcast.find(sunnyDaysFilter);
