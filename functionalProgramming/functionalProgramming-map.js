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