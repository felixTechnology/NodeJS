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


/*
/!*Object....Method*!/

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
console.log(object.name, object.age);*/
/**********************************************************************/

/*
/!*ARRAYS*!/

const country = {
    country: 'Ghana',
    population: 20_000_000,
    history (){
        console.log('Hi, I am ' + this.country)
    }

};


const hobbies = ['Sports','Cooking', true, 23.00, {}]

/!*for (let hobby of hobbies){
    console.log(hobby);
}*!/

for (let i= 0; i < hobbies.length; i++){

    console.log(hobbies[i])
}

console.log(hobbies.map(hobby =>{
    return 'Hobby : ' + hobby;
}))*/
/*************************************************************************************************/

/*
/!*Arrays and Reference Types*!/

const country = ['Ghana', 'USA']

country.push('Germany');
console.log(country)*/

/*****************************************************************************************************************/

/*Rest and Spread Operators*/

const skills = ['computer', 'communication', 'negotiation', 'data management']

const copiedArray = skills.slice();
const copiedArrays = [skills];
const copiedArrays_ = [...skills];
console.log(copiedArray);
console.log(copiedArrays);
console.log(copiedArrays_);


const country = {
    country: 'Ghana',
    population: 20_000_000,
    history (){
        console.log('Hi, I am ' + this.country)
    }

};

const countryInfo = {...country};

console.log(countryInfo);
