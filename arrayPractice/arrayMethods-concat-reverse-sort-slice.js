//review
//concat - joins two or more arrays
//reverse - reverse values
//sort method - sort apha numeric
//slice method - returns but does not delete a section
//pratice
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indego', 'violet'];
//chanllenge
//build another array and add the two together
var colors2 = ['azure', 'kon-peki'];
var allColors = colors.concat(colors2);
print(allColors);
//chanllenge
//build another array of colors and add all the arrays together
var colors3 = ['oxblood', 'turquioise'];
allColors = colors.concat(colors2, colors3);
print(allColors);
//chanllenge
//reverse colors
var reverseColors = allColors.reverse();
print(reverseColors);
//sort all elements by apha
var sortColors = allColors.sort();
print(sortColors);
//practice
var weather = ['rainy', 'cold', 'chilly', 'cloudy'];
//challedge
//create a var winter to capture all winter values
var winter = weather.slice(1,3);
print(winter);
