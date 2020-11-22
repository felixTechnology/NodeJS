/*var  name = 'Felix Atsu';

var age = 29;

var houseHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return (`Name is ${userName}  and age is ${userAge}  hobby is  ${userHasHobby}`);
}
console.log(name, age, houseHobbies)
console.log(summarizeUser(name, age,houseHobbies));*/


/*
//Arrow Function
var  name = 'Felix Atsu';

var age = 29;

var houseHobbies = true;

const  summarizeUser =  (userName, userAge, userHasHobby) =>{

    return (`Name is ${userName}  and age is ${userAge}  hobby is  ${userHasHobby}`);
}

const add = (a,  b ) =>  a+ b

console.log(2,2)
console.log(add(2,2))


const sub = a =>  a - 2

const multiply = () => 10 * 10;

console.log(multiply());
console.log(sub(2))


console.log(name, age, houseHobbies)
console.log(summarizeUser(name, age,houseHobbies));*/


/*Object....Method*/

const object = {

    name: 'Felix',
    age: 29
}

const person = {
    name: 'felix',
    YearsStay: 40,
    greet (){
         console.log('Hi, I am ' + this.name)
    }

};


const country = {
    country: 'Ghana',
    population: 20_000_000,
    history (){
        console.log('Hi, I am ' + this.country)
    }

};

person.greet();

country.history();





console.log(object.name);
console.log(object.name, object.age);