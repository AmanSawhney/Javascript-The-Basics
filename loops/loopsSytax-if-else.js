//review 
//evalute conditions 
//like a path
//==, ===
//if, else, else if
//challenge
//change the code to the expressions to make them true
//(5>7)
//(7 === '7')
//(7 === 'seven')
//(false)
print(!(5>7));
print((7 == '7'));
print(!(7 === 'seven'));
print(!false);
//challenge
//use logical operators && and || to show different examples for each
if (1<2 && 2<3) {
	print('numbers work');
}
if (3<4 || 1>2) {
	print('Well so do or statments');
}
//challenge 
//create an if, else, else if statement
//use at least one logical operator
var testScore = 99;
if (testScore > 90 && testScore <= 100) {
	print('You got an A');
}else if (testScore >= 80) {
	print('You got a B');
}else if (testScore >= 70) {
	print('You got a C');
} else if (testScore >= 65) {
	print('You got a D!');
}