//practice
function goodMorningNeighbor () {
	return 'Goood Morning Neighbor';
}
print(goodMorningNeighbor()); //invokes a call and prints it to the console

function goodEveningNeighbor() {
	return 'Good evening neighbor';
}
print(goodEveningNeighbor()); //invokes a call and prints it to the console
//challenge
//rewrite both functions inclusing a parameter and argument for name in both
//in the second function replace 'eveything' with a parameter and argument naming a task

function goodMorningNeighbor (timeOfDay, name, closingStatment) {
	return ('Good morning ' + name + ', ' + closingStatment);
}

print(goodMorningNeighbor('morning', 'Aman', 'You are cool' ));