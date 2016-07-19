//Implement an algorithm to determine if a string has all uniquw characters
var notUniqueString = "Hello I am not unique"
var uniqueString = "Unique Str"
function check(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
			return false;
		}
	}
	return true;
}
print('The string \'Hello I am not unique\' is unique: ' + check(notUniqueString));
print('The string \'Unique Str\' is unique: ' + check(uniqueString));