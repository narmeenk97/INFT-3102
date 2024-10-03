console.log('I am running!')

// Variables & Data Types
// var - similar to let (previously global scope)
// let - generic declaration of a variable
// const - constant i.e. immutable i.e. cannot change the value of the variable after declaration


// Arrays
// let arr = [1,2,3,4,5]
// console.log(arr[2]) // element at index 2 = 3
// arr.push(6) // Appends to the end of an array
// arr.pop() // remove an item from the end of the array
// arr.shift() and arr.unshift() removes/adds from beginning of an array

// Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// var myCar = {
//     color: 'red',
//     type: 'ferrari',
//     year: 2025
// }

// Object.freeze(myCar)

// myCar.type = "plane"

// console.log(myCar)

// console.log([1,2,3])

// Conditions & Loops

// let weather = 'rain'
// let outfit
// if (weather == 'rain') {
//     outfit = "raincoat"
// } else {
//     outfit = "no raincoat"
// }

// const numberOne = parseInt(prompt("Please pick the first number"))
// const operator = prompt("Choose an operator from the following: + - / *")
// const numberTwo = parseInt(prompt("Please pick the second number"))

// let result;

// if (operator == '+') {
//     result = numberOne + numberTwo
// } else if (operator == '-') {
//     result = numberOne - numberTwo
// } else if (operator == '/') {
//     result = numberOne / numberTwo
// } else if (operator == '*') {
//     result = numberOne * numberTwo
// }

// console.log(`Your result is: ${result}`)


// Functions/Scope/Callback
// console.log(sum(5,10))

// Function Declarations -> Are HOISTED -> they have global scope
// function sum(a,b) {
//     return a + b
// }

// Function Expressions
// const sum = function (a, b) {
//     return a + b
// }

// Arrow Functions 
// const sum = (a,b) => a + b


// function outerFn() {
//     // let num1 = 5
//     var num1 = 5
//     function innerFn() {
//         // let num2 = 10
//         var num2 = 10
//         console.log(num1)
//     }
//     console.log(num2)
// }
// outerFn()


// Callback functions

// let arr = [1,2,3,4,5,6,7,8]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 5
// }

// arr.forEach(num => num + 5)
// let newArray = arr.map(function(num) {
//     return num + 5
// })

// console.log(forArray)
// console.log(newArray)

// console.log(sum(5,10))

// Classes/Inheritance

// class Car {
//     constructor(type){
//         this.type = type;
//         this.engineIsOn = false
//     }

//     turnEngineOn() {
//         this.engineIsOn = true
//         console.log("Engine has been turned on!")
//     }
// }

/* class Motorcycle extends Car () {

}

function Car(type) {
    this.type = type
    this.turnEngineOn = function () {
        this.engineIsOn = true
        console.log("Engine has been turned on!")
    }
}

let myCar = new Car("Ferrari")
myCar.turnEngineOn()


let car = {
    type: "ferrari",
    price: "$999999",
    client: "person",
    color: 'red',
    turnEngineOn: function() {

    }
}

let arr =[1,2, [], {}, () => {}] */




// Asynchronous/Promises/Fetch/Async Await JavaScript

// Error Handling (try/catch)

// DOM

// USER STORY
// as a user i want to search a pokemon by its name and see a picture of that pokemon 
// async fetch and display 

// 1. update HTML with a form (text input)
// 2. attach a click eventlistener to the form submission 
// 3. attach a callback function to the eventlistener 
// 4. store the user search text in a variable 
// 5. utilize the user search text in our API query
// 6. Once API data is returned we will display the data in the html dynamically using the DOM 

// Store the FORM HTML element in a variable 

//console.dir(formElement);

/* formElement.addEventListener('onsubmit', function(e) {
    e.preventDefault();
    console.log('Form was submitted!');
}) */
const formElement = document.querySelector(".pokemon-search-bar");
formElement.onsubmit = (e) => {
    e.preventDefault();
    //console.log("Form was submitted!");
}
const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", async function(e) {
    const searchBar = document.querySelector(".search-bar");
    console.log(searchBar.value);
    const pokemonName = searchBar.value;

    //Try/Catch
    try {
        //Fetch
            // async/await
            async function getPokemon(nameOfPokemon) {
                const pokemon = await fetch(`http://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`)
                return pokemon.json();
            }
            const pokemonData = await getPokemon(pokemonName)

            // callback functions 
            // chaining .then/.finally
            fetch(`http://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`)
            .then(response => {
                return response.json();
            }).then(pokemonData) => {
                console.log(pokemonData)
                
            }
            //-----------Rendering pokemon in HTML---------
            const h1 = document.querySelector(".pokemon-name")
            h1.innerText = pokemonData.name 
            const pokeImage = pokemonData.sprites.front_default
            const img = document.querySelector(".pokemon-image")
            img.setAttribute('src', pokeImage)
    } catch (err) {
        console.error(err)
        throw new Error("There was an issue fetching data!");
    }
})