//review
//challenge
//create a regular expression to count the As in Aman
var regEx = /a/g
var name = 'Aman'
print(name.toLowerCase().match(regEx).length);
//challenge 
//create a regular expresion to print all the charters in Aman that are not As
var regex = /[^a]/g
print(name.toLowerCase().match(regex));