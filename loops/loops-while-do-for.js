//review loops
//while
//do/while
//for (most popular) - initialize, test, update
//challenge
//create a while loop that runs 5 times 
var counter = 1;
while (counter <= 5) {
	print('This loop has ran ' + counter + ' times');
	counter++;
}
//challenge
//create a do/while loop that runs even through the while is false for the first instence
do {
	print('I am a do loop');
} while (false);
//challenge 
//creat an array with 5 numbers
//loop through the array with a for loop
//run each element of the array through an if, else, else if clause like in that last lab with at least two else if optiona 
array = [1,2,3,4,5];
for (i = 0; i<array.length; i++) {
	if (array[i] < 4) {
		print( 'the number is less than 4');
	}else if (array[i] == 5) {
		print('the number is 5')
	}else {
		print('the numnber is 4')
	}
}
