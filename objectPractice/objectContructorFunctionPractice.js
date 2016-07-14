//review
//object contructor functions
//regulat functions with nre key worf
//create many objects

//practice litteral notation
var home = {
	rooms: 4,
	apartment: false,
	color: 'brown',
	swimmingPool: true,
	state: 'WA',
	city: 'Seatle'
};

print(home.toSource());

var home1 = {
	rooms: 2,
	apartment: false,
	color: 'white',
	swimmingPool: true,
	state: 'CA',
	city: 'Sacramento'
};

print(home1.toSource());

//builing object function contructor for less code

function Home(rooms, apartment, color, swimmingPool, state, city) {
	this.rooms = rooms;
	this.apartment = apartment;
	this.color = color;
	this.swimmingPool = swimmingPool;
	this.state = state;
	this.city = city;
}; 

var home1 = new Home (3, false, 'blue', true, 'Atlanta', 'GA');
print(home1.toSource());
//chanllenge
//build 3 more homes 
var home2 = new Home (5, false, 'green', true, 'New York', 'New Hyde Park');
var home3 = new Home (10, false, 'yellow', true, 'New York', 'Great Neck');
var home4 = new Home (50, false, 'yellow', true, 'California', 'Beverally Hills');
print(home2.toSource());
print(home3.toSource());
print(home4.toSource());