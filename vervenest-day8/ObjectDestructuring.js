let user={
    name:'kishore',
    age:33,
    email:'kishore@gmail.com',
    address:{
        city:'bangalore',
        state:'karnataka'
    }
}
let {name:username, age} = user;

let {city} = user.address;
console.log(username);

console.log(`City is ${city }`)


let printName = function({city}){
    console.log(city)
}

printName(user);