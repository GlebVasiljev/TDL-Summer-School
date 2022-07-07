console.log("Hello world!")

// let = local variable
// var = global variable

let Name = "Gleb";
let Surname = "V";
let Email = "gleb@gmail.com";
let nameAndemaile = `Your name is ${Name},your email is ${Email} `;

//string concatenation
let Fullname = Name + " " + Surname;

console.log(Fullname);
console.log(nameAndemaile);

//getting characters
console.log(Name[3]);

//string lenght
console.log("Name lenght is: "+Name.length);

//string methods
console.log(Name.toLocaleUpperCase());
console.log(Name.toLocaleLowerCase());

//string manipulation
let result = Email.indexOf('@');
console.log(result);

result = Email.slice(2,5);
console.log(result);

result = Email.substr(2,5);
console.log(result);