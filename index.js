// Variable Declaration - Recap
// 	1) Hoisted variables: var
// 		- Multiple Declarations allowed
// 	2) Constant variables: const
// 		- Does not allow multiple declarations
// 	3) Variable: let
// 		- Does not allow multiple declarations
		
// Arrow Functions -
// 	1) With const declarations 
// 		***sayColor***
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
		
// Destructuring - 
// 	1)  Destructuring Assignement
		let nums = [1,3,6,8,4,11] // x, y, z, rotation X, rotation y, rotation z 
		let [x,y,z] = nums
			// x = 1,  y = 3, z = 6
			
		let p = {name: "nancy", age: 62}
		let {name: otherName} = p
			// otherName = "nancy"
			
		let studentArray = ["Al", "Bob", "Charlie"]
    
        // let Andrew = studentArray[0]
        // let Bob = studentArray[1]
        // let Charlie = studentArray[2]
        
        let [Al, Bob, Charlie] = studentArray
			// Al = "Al", etc. 
			
		let studentObj = {name: 'Adam', grade: 12, section: 4}
		let {name, grade, section} = studentObj
			//variable must match the keys in the object
	    // let studentObj = {name: 'Adam', grade: 12, section: 4}
		let {name: firstName, grade: level, section: period} = studentObj
			//keys remapped to new variable names
		
			
	// 2) Destructuring for Arguments
		function getName({name,age}){
			return name
		}
			//Destructuring with key = variable name
		function getName({name: firstName,age: yrsOld}){
			return yrsOld
		}
			//Destructuring to new variable names
			
        function studentHtml({name, grade, section}){
            return 	`<div> 
                <p>Name: ${name}</p>
                <p>Grade: ${grade}</p>
                <p>Section: ${section}</p>
                </div>`
        }
			
	// 3) Destructuring with the Spread Operator 
        function removeTwo([x, y, ...rest]){
            return rest
        }
			
	// 4) Spread Operator to Append to an Array
		function addPerson(people, personToAdd){
			return [...people, personToAdd]
		}
        let people = addPerson([], {id: 1, name: "Nancy"})
        console.log(people)
        people = addPerson(people, {id: 2, name: "Alex"})
        console.log(people)
			
	// 5)	Assigning new properties to variables (Spread Operator vs Object.assign())
			let peep = {name: "N=Bob", age:10}
			let newObj = Object.assign({}, [peep, {favLang: "Ruby"}])
			console.log(newObj)
			// let newObj = {...peep, favLang: " Ruby"}
		

// Callbacks & Promises		
// 	1) 	Call back Functions / Nested Callback Functions
		const apiAdd = (x,y, callbackFn) => {
		setTimeout(() => {
				const result = x+y
				callBackFn(result)
			}, 3000)
		}

		apiAdd(8,11, (sum) => {
			console.log('The sum is ${sum}')
			
			apiAdd(8,11, (sum) => {
				console.log('My lucky number is ${sum}')
			})
		})
			
	// 2) Promises //Promise.js
	
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
			
// Classes

// 	1) Class Declarations and Extensions
class Pet{
    
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    bark(){
        console.log(`Woof, woof, My name is ${this.name}!`)
    }
    
    // set birthdate(birthdate){
    //     this.birthdate = birthdate
    //     this.age = getDate - bitrhdate; 
    // }
    
    // get owner(){
    //     return this.owner
    // }	
}

class Dog extends Pet{
    constructor(name,age,breed,favToy){
        super(name,age)
    this.breed = breed
    this.favToy = favToy
    }

havePuppy(name){
    let puppy = new Dog(name, 0, this.breed, null)
    puppy.whoIsMom = () => {
        console.log(`My mom is $(this,name)`)
    }
    return puppy
    }
}