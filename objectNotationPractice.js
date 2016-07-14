var car = { //defining objects through literal notation
	color: 'red',
	manufacture: 'toyota'
};

var truck = {}; //defining objects with dot notation
truck.wheels = 6;
truck.color = 'blue';
truck.weight = "10 million pound";
truck.cool = false;

var van = {};
van['color'] = 'purple';
van['creepy'] = false;
van['doors'] = 4;

print(car.toSource()); //method for Rhino interperator to print object properties
print(truck.toSource());
print(van.toSource());

//pratice of building objects with literal notation 
 
var snowman = {
	isSnow: true,
	color: 'white',
	madeOfSnowballs: 3,
	'first name': 'Frosty'
};

//practice accessing properties

print(snowman.isSnow);
print(snowman.color);
print(snowman.madeOfSnowballs);
print(snowman['first name']);

// change property values

snowman.isSnow = 'yes';
snowman.color = 'orange';
snowman.madeOfSnowballs = 8;
snowman['first name'] = 'Jack Frost'

print(snowman.toSource())

//challenge
//build a house object 
//add 4 properties with dot notations using types string, number, and boolean 
//add 3 property values with bracket notaion with invaild names

house = {};
house.bricks = 500;
house.location = "New York";
house.color = "Red";
house.isCool = true;
house['number of cars'] = 3;
house['owner\'s sur name'] = 'Sawhney';
house['has a dog'] = true;

print(house.toSource())



