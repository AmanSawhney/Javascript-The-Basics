//Implement an algorithm to determine the largest word in a
var stringWithWords = "I have words and I like the state Mississippi";
function findTheLongestWord(str) {
	var words = str.split(" ");
	var longestWord = words.reduce(function(a,b) {
		if (b.length > a.length) {
			a = b;
		}
		return a;
	}, " ")
	return 'The longest word is ' + longestWord + ', and it has ' + longestWord.length + ' characters'
}
print(findTheLongestWord(stringWithWords));
