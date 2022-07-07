//Map
//Map = objects, bt it is iterable and is auto aordered
//Mas has keys and values

//Init map
let myMap = new Map();

//.set( key & value )
myMap.set(1, 10);
myMap.set(2, 'Value ');

//.get( key )
console.log(myMap.get(2));

//.values() / .keys() 
console.log(myMap.keys());
console.log(myMap);

//.Foreach()
myMap.forEach((value, key) => {
    console.log(`Value are: ${value}, Keys are: ${key}`);
})

//.delete(key)
myMap.delete(2);
console.log(myMap.get(2));

//Sets
const MyArray = [1,2,3,4,4,5,5,6,6,6,7];
const mySet = new Set(MyArray);
console.log(mySet);

//.add
mySet.add(8);
mySet.add('Hello World!');
mySet.add(...[10,11,12,13]);
console.log(mySet);

//.has()
console.log(mySet.has(10));
console.log(mySet.has('Hello'));