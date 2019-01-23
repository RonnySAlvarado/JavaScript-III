/* The for principles of "this";
//initial commit for this assignment
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If you use "this" globally, the value of "this" is going to be the window/console itself.

* 2. Implicit Binding (much easily remembered as "automatic binding" by Josh Knell) is the concept that if you use a dot in between an object name and a key of the object, 
the object name is going to be "this".

* 3. New binding - If you create a new object via a constructor function, the "this" keyword references the newly-created object.

* 4. Explicit binding is the concept that if you use the call or apply method, "this" is defined.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this); //this should reference the window/console Object

// Principle 2
// code example for Implicit Binding
const ronnyObj = {
    name: 'Ronny',
    age: 28,
    job: 'Environmental Scientist',
    speak: function (){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I work as an ${this.job}.`)
    }
}
ronnyObj.speak();

// Principle 3
// code example for New Binding
function NewPerson (name){
    this.name = name;
    this.speak = function (){
        console.log(`Hello, I am ${this.name} and welcome to the creation of this new object. I have become self-aware.`);
    }
}
const Chance = new NewPerson('Chance');
const Ronny = new NewPerson('Ronny');
Chance.speak();
Ronny.speak();

// Principle 4
// code example for Explicit Binding

function testingExplicitBinding (){
    console.log(`Don't mind me. I'm just testing this out so that ${this.name} can see that I am doing this correctly.`);
}
testingExplicitBinding.call(Chance);
