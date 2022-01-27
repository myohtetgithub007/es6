function map() {
  let num = [1, 2, 3, 4, 5];
  let result = num.map(function (n) {
    return n + 1;
  });
  console.log(result);
}
/* map function how is work

copy array crate new array eg ((result array)) is new

*/
function filter() {
  let num = [1, 2, 3, 4, 5];
  let result = num.filter(function (num) {
    if (num % 2 == 0) {
      return num;
    }
  });
  console.log(result);
}
// the result is  2 and 4

function reduce() {
  let num = [1, 2, 3, 4];
  let result = num.reduce(function (n1, n2) {
    let ans;
    ans = n1 * n2;
    return ans;
  });
  console.log(result);
}
//reduce functino acces two parameter and calculate tow parameter

//Arrow FUnction
let num = [1, 2, 3, 4];

let n = 10;
var result = num.map((n) => n - 2);
console.log(result);

//String g Interpolation

let name = "myo htet";
console.log(`${name} is my name`);

// Es6 class create

class eat {
  name = "fish";
  moringingEat = () => `${this.name} is eating`;
}
let fish = new eat();

console.log(fish.moringingEat());

//es6  tutorial

var calc = (num) => {
  if (num % 2 == 0) {
    return "even number";
  } else {
    return "odd number";
  }
};
var result = calc(5);
console.log(result);

//() is accept parameter value
//=> calculate operation

//this keywork

const person = {
  name: "myo htet",
  age: 24,
  showData() {
    console.log(this.name);
  },
};
person.showData();

// this keyboard work is called object parameter

//rest parameter

const restParameter = (...num) => {
  let total = 1;
  for (n of num) {
    total *= n;
  }
  return total;
};

let result1 = restParameter(1, 2, 3, 4, 5);
console.log(result1);

//rest parameter is how many parameter is insert わからないとき using rest parameter

//spread operator
//spread with arry example
let fruit = ["banana", "orange"];

let addFruit = [...fruit, "apple"];
console.log(addFruit);

//spread with object

let personData = { name: "myo", age: 25 };

let personDataAdd = { ...personData, hobby: "swimming" };
console.log(personDataAdd);
//console.log(personDataAdd.hobby);

//object literal
const objectPerson = (name) => {
  return {
    showName() {
      console.log("Hello world");
    },
  };
};

objectPerson().showName();

//destructing
//arrray destructing
var football = ["manu", "mancity"];
var [team1, team2] = football;
console.log(team1, team2);

//destructing meaning is destruct array and object to put in a variable

//object destructing
let football1 = { name: "manu", city: "london" };
let { name1, city } = football1;
console.log(city);
