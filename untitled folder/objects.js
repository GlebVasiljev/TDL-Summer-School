//objects literals

let user = {
    name: 'Gleb',
    age: '18',
    email: 'gleb@gmail.com',
    blog: ['TDL School', 'Pizza blog'],
    login: function(){
        console.log('User logged in');
    },
    logBlogs: function(blog){
        console.log('This user written blog: ' + this.blog);
        this.blog.forEach(blog => {
            console.log(blog); 
        });
        
        
    },
    logOut: function() {
        console.log("User " + this.name + " logout ");
        
    },
}

//First access way
console.log(user);

//Second access way
console.log(user['name']);

user.logBlogs();
user.logOut();

//primitive value like int/string/bool

let scoreOne = 10;
let scoreTwo = scoreOne;

console.log(scoreOne,scoreTwo);

//reference value (array/obj)

const userOne = {
    name:'Alex',
    age:'20',
}

const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 4;

console.log(userOne,userTwo);