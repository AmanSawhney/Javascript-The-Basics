var stringWithWords = "I have words and I like the state Mississippi";
function findTheLongestWord(str) {
	var words = str.split(" ");
	return words.reduce(function(a,b) {
		if (b.length > a.length) {
			a = b;
		}
		return a;
	}, " ")
}
print(findTheLongestWord(stringWithWords));
