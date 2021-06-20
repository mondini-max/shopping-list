const injector = document.getElementById("main");
const myarray = [1, 12, 3, 40, 15, 6, 10];
console.log("primative array", myarray);
console.log("ES7 includes methode for find ->", myarray.includes(1));

let double = [];
const multyply = myarray.forEach((a) => double.push(a * 2));
console.log("forEach", double);

const mapArray = myarray.map((a) => {
  return a * 2;
});
console.log("map", mapArray);

const filterArray = myarray.filter((num) => num > 5);
console.log("filter", filterArray);

const reduceArray = myarray.reduce((acc, num) => {
  return acc + num;
}, 2);
console.log("reduce", reduceArray);

myarray.sort((a, b) => a - b);
console.log("sorted array", myarray);

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);
console.log("sorted by value", items);

items.sort((a, b) => {
  let nameA = a.name;
  let nameB = b.name;
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(items);

// objects
class Player {
  constructor(name, type) {
    console.log("Player constructor", this);
    this.name = name;
    this.type = type;
  }

  presentation() {
    return `Hi I am ${this.name} and I am also ${this?.type} `;
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard constructor", this);
  }

  intro() {
    return `Hallaloya je suis ${this.name} et j'ai le pouvoir ${this?.type}`;
  }
}
class Prof extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Prof constructor", this);
  }
  teach() {
    return `hi I am your prof and my name is ${this.name} and i am ${this.type}`;
  }
}

let wizard1 = new Wizard("John", "Barbe Blanche");
// injector.innerHTML = wizard1.intro();
console.log(" method wizard pick from his parent -> ", wizard1.presentation());
console.log("intenctiation of new class Wizard -> ", wizard1.intro());
let wizard2 = new Wizard("shely", "Healer");
let prof1 = new Prof("Jean", "teacher for Chimie noire");
console.log(prof1.teach());

// ES7
const square = (x) => x ** 2;
console.log("carre de numbre 2 ", square(2));

const cube = (x) => x ** 3;
console.log("cube de numbre 2 ", cube(2));

//ES 8
// .padStart(10) ex: to make 10 espace in the start
// .padEnd() ex: to make 10 espace in the End

object.value;
object.entries;
object.keys;

const myobj2 = {
  username: "Sanata",
  username1: "john",
  username2: "Sara",
  username3: "cata",
};

myobj2.keys(myobj2).forEach((key, index) => console.log(key, myobj2[key]));
