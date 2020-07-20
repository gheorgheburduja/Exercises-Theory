/* Getter functions are meant to simply return (get) the value of 
an object's private variable to the user without 
the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of
an object's private variable based on the value passed 
into the setter function. This change could involve calculations,
 or even overwriting the previous value completely.


class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut

Notice the syntax used to invoke the getter and setter.
They do not even look like functions. 
Getters and setters are important because they hide internal implementation details. 

Note: It is convention to precede the name of a private variable with an underscore (_). 
However, the practice itself does not make a variable private.
..............................................................................
Use the class keyword to create a Thermostat class.
The constructor accepts a Fahrenheit temperature.
Now create a getter and a setter in the class, to obtain the temperature in Celsius.
Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, 
where F is the value of temperature in Fahrenheit, 
and C is the value of the same temperature in Celsius.*/


// Only change code below this line
class Thermostat {
    constructor (F) {
      this._F = F;
    }
    get temperature() {
      return 5/9 * (this._F - 32);
    }
    set temperature(C) {
      this._F = C * 9.0 / 5 + 32
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
   