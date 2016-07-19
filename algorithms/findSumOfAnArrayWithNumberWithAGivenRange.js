var range1 = [1,50];
var range2 = [6,1];
function sumOfRange(range) {
	var sum =  0;
	for (var i =  Math.min(range[0], range[1]); i <= Math.max(range[0], range[1]); i++) {
		sum += i;
	}
	return sum;
}
print(sumOfRange(range1));