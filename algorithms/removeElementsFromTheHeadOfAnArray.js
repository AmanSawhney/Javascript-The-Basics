var testArray = ['car', 'bus', 'boat'];
function removeFromHead(array, elementsToRemove) {
	return array.filter(function(element) {
		return array.indexOf(element) > (elementsToRemove - 1)
	})
}
print(removeFromHead(testArray, 2));