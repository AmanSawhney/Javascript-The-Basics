//review
//push() pop() shift() unshift()
//practice
var shoppinglist = ['apples', 'pizza', 'chicken', 'mushrooms', 'organges', 'beef'];
//chanllenge
//insert crackers at the front of the array
shoppinglist.unshift('crackers');
//insert grapes at the back of the array
shoppinglist.push('grapes');
print(shoppinglist);
//practice
print(shoppinglist.length);
shoppinglist.push('popcorn', 'siracha');
shoppinglist.unshift('lemonade', 'orange juice');
print(shoppinglist);
//challenge
//remove an item from the front and the end of the array
shoppinglist.shift(); //removes from front
print(shoppinglist);
shoppinglist.pop(); //removes from the end
print(shoppinglist);
print(shoppinglist.length);
//practice
//capture shift and pop
var firstItem = shoppinglist.shift();
print(firstItem);
var lastItem = shoppinglist.pop();
print(lastItem);
print(shoppinglist.length)

