//-----------------------------------------------------------------------
// Variable Declaration - Recap -- LET & CONST -new to ES6
//-----------------------------------------------------------------------

// 	1) Hoisted variables: var
// 		- Multiple Declarations allowed

function example(){
	var sample = 2
	console.log(sample)
	var sample = 10 
	console.log(sample)
	sample = 30
	console.log(sample)
}


// *** VAR IS HOISTED, WILL BE IN JS ASSESSMENT AND INTERVIEWS

function someVar(){
	console.log(some)
	var some = "something"
}
// 	2) Constant variables: const
// 		- Does not allow multiple declarations

function exampleConst(){
	const sample = 2
	console.log(sample)
	sample = 10 
	console.log(sample)
}
// 	3) Variable: let
// 		- Does not allow multiple declarations


//-----------------------------------------------------------------------
// Arrow Functions - INHERENTLY ANONYMOUS -new to ES6
//-----------------------------------------------------------------------


// Traditional Declaration:

// function sayColor(color){
// 	return color
// }



// Function Expressions
const sayColor = (color) => {
	return color;
	}

// const sayColor = color => color;


const isNumEven = num => num % 2 === 0 ? "yes" : "No"
	
// ***setTimeout***()

setTimeout(function(){
	console.log("Hello")
	}, 500)
	
setTimeout(() => console.log("Hello"), 500)

function hello(){
	console.log("Hello")
}

setTimeout(hello, 500)

//-----------------------------------------------------------------------
// Destructuring 
//-----------------------------------------------------------------------

// 	1)  Destructuring Assignment
	let nums = [1,3,6,8,4,11] // x, y, z
	let [x,y,z] = nums
		// x = 1,  y = 3, z = 6
		
	let p = {name: "nancy", age: 62}
	let {name, age} = p
	let {name: otherName} = p
		// otherName = "nancy"
		//name = "nancy"
		
	let studentArray = ["Al", "Bob", "Charlie"]

	// let Andrew = studentArray[0]
	// let Bob = studentArray[1]
	// let Charlie = studentArray[2]
	
	let [Al, Bob, Charlie] = studentArray
	let [x, y] = studentArray
	let[a, , b] = studentArray
	studentArray = ["Kamrin", ...studentArray]
		
	let studentObj = {name: 'Adam', grade: 12, section: 4}
	let {name, grade, section} = studentObj

	// variable must match the keys in the object
	// let studentObj = {name: 'Adam', grade: 12, section: 4}

	let {name: firstName, grade: level, section: period} = studentObj
	//keys remapped to new variable names

			
// 2) Destructuring for Arguments

	//Destructuring with key = variable name
	function getName({name,age}){
		return name
	}
		
	//Destructuring to new variable names
	function getName({name: firstName, age: yrsOld}){
		return yrsOld
	}
		
		
	function studentHtml({name, grade, section}){
		return 	`<div> 
			<p>Name: ${name}</p>
			<p>Grade: ${grade}</p>
			<p>Section: ${section}</p>
			</div>`
	}
		
// 3) Destructuring with the Rest Parameter 
	let rest = [1, 2, 3, 4, 5, 6]
	function removeTwo([x, y, ...rest]){
		console.log(x)
		console.log(y)
		return rest
	}
	//RETURNS [3, 4, 5, 6]

	let arr = [1, 2, 3, 4, 5, 6]
	let [a, b, ...c] = arr
	// (left side of equation)
	
		
// 4) Spread Operator to Append to an Array() (right side of equation)
	function addPerson(people, personToAdd){
		return [...people, personToAdd]
	}
	let people = addPerson([], {id: 1, name: "Nancy"})
	console.log(people)
	people = addPerson(people, {id: 2, name: "Alex"})
	console.log(people)
		
// 5)	Assigning new properties to variables (Spread Operator vs Object.assign())
		let peep = {name: "Bob", age:10}

		//Older Syntax
		let newObj = Object.assign(peep, {favLang: "Ruby"})
		//changes peep, so instead:
		let copy = Object.assign({}, peep)
		let newObj = Object.assign(copy, {favLang: "Ruby"})
		console.log(newObj)

		//With ES6 Spread Operator
		let newerObj = Object.assign({}, {...peep, favLang: "Ruby"})

		// Newer syntax, not using Object.assign
		let newestObj = {...peep, favLang: " Ruby"}


		// Sample of how you will use this concept, esp in React/Redux --> Always make a copy, memory is cheap --> VERY easy to mutate data accidentally

		const initialState = {
			loggedIn: false,
			toys: ["a"]
		}
		
		let state = {...initialState}  //make a copy
		
		state = {
			...state,
			 toys: [...state.toys, "Buzz", "Woody"],
			 locked: true
			}
		// console.log(state)
		
		state = {
			...state,
			loggedIn: true
		}
		// console.log(state)
		
		state = {
			...state,
			username: "Charlotte"
		}
		// console.log(state)
	
	
//-----------------------------------------------------------------------
// Callbacks & Promises(new to ES6)	
//-----------------------------------------------------------------------

// 	1) 	Call back Functions / Nested Callback Functions
	const apiAdd = (x,y, callbackFn) => {
	setTimeout(() => {
			const result = x+y
			callbackFn(result)
		}, 3000)
	}

	apiAdd(8,11, (sum) => {
		console.log('The sum is ${sum}')
		
		apiAdd(sum,11, (sum2) => {
			console.log(`My lucky number is ${sum2}`)
			apiAdd(sum2 ,11, (sum3) => {
				console.log(`My VERY lucky number is ${sum3}`)
			})
		})
	})
			
	// 2) Promises //Promise.js --> when making a new promise, you hit aa constructor function that takes in 2 parameters resolve aand reject (call whatever you want)
	
	const apiPromiseAdd = (
	x, y) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const result = x + y 
				resolve(result)
			}, 2000)
		})
		
	}
			
	apiPromiseAdd(8, 4)
	.then((data) => {
		console.log(`The sum is ${data}`)
		return apiPromiseAdd(data, 10)
	})

//-----------------------------------------------------------------------
// Classes - new to ES6
//-----------------------------------------------------------------------

//  Class Declarations
// constructor is like initialize
class Pet{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    bark(){
        console.log(`Woof, woof, My name is ${this.name}!`)
    }
}
// Class Extensions 
// super calls parent constructor

class Dog extends Pet{
    constructor(name, age, breed){
        super(name, age)
    	this.breed = breed
    }

	havePuppy(name){
		let puppy = new Dog(name, 0, this.breed, null)
		puppy.whoIsMom = () => {
			console.log(`My mom is $(this,name)`)
		}
		return puppy
	}
	get nameBreed(){
		console.log(this.name)
		return `${this.name} and ${this.breed}`
	}

	get birthYear(){
		console.log(2021-this.age)
	}

	set eyeColor(color){
		this.eyeColor = color
	}
}


// WHAT IS THIS?

// A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

//BEFORE ES6 and Arrow Functions

// A simplistic object with its very own "this".
var obj = {
    num: 100
}

// A simple traditional function to operate on "this"
var add = function (a, b, c) {
  return this.num + a + b + c;
}


	// call - The call() method calls a function with a given this value and arguments provided individually.
	var result = add.call(obj, 1, 2, 3) // establishing the scope as "obj"
	console.log(result) // result 106

	// apply - The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

	const arr = [1, 2, 3]
	var result = add.apply(obj, arr) // establishing the scope as "obj"
	console.log(result) // result 106

	// bind - The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

	var result = add.bind(obj) // establishing the scope as "obj"
	console.log(result(1, 2, 3)) // result 106
	

// CALL, BIND, APPLY NOT TO BE USED WITH ARROW FUNCTIONS

//CODEPEN

// HTML
/* <div id="meals">
</div> */

// fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
// .then(resp => {
//   return resp.json()
// })
// .then(data => {
//   data.meals.forEach(meal => {
//     document.getElementById("meals").innerHTML += `<li>${meal.strMeal}</li>`
//   })
// })