// At method

const person = ["arslan", "akbar", "adil", "akram", "ahmad"];
console.log(person.at(-2));

//update an array

person[2] = "samad";
console.log(person);

// for of loop

const fruit = ["apple", "banana", "kiwi", "tamarind", "orange", "pineApple"];

for (let item of fruit) {
  console.log(item);
}

// for in loop

const fruits = ["apple", "banana", "kiwi", "tamarind", "orange", "pineApple"];

for (let item in fruits) {
  console.log(item);
}

// for Each function

const forfruits = [
  "apple",
  "banana",
  "kiwi",
  "tamarind",
  "orange",
  "pineApple",
];

forfruits.forEach((curElem, index, arr) => {
  console.log(`${curElem} ${index} ${arr}`);
});

// map function

const mapfruits = [1, 2, 3, 4, 5, 6];

const newfruits = mapfruits.map((curElem, index, arr) => {
  return `${curElem * 2}`;
});
console.log("map", newfruits);

//push method add one or more elements at the end of an array

const persons = ["a", "b", "c", "d"];
persons.push("e", "f");
console.log(persons);

//pop method add one  element at the end of an array

const persons1 = ["a", "b", "c", "d"];
persons1.pop("d");
console.log(persons1);

//splice is allrounder start,deletecount,add return [] array if not found

const persons2 = ["a", "b", "c", "d"];
persons2.splice("-2", "2", "f", "g");
console.log(persons2);

const persons3 = ["a", "b", "c", "d"];
console.log("person3", persons3.splice(1));

// indexOf(searchElement ,fromIndex)  => return -1 if not found
//lastIndexof reverse searching  => return -1 if not found
//includesd retur true or false

let mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("IndexOf", mynumbers.indexOf(4, 2));

//find ,findIndex , filter

let mynumbers2 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
let findnumber = 6;

const updatednumber = mynumbers2.filter((curElem) => {
  return curElem !== findnumber;
});
console.log(updatednumber);

const products = [
  {
    name: "Laptop",
    price: 1500,
  },
  {
    name: "Laptop",
    price: 1800,
  },
  {
    name: "Laptop",
    price: 500,
  },
  {
    name: "Laptop",
    price: 400,
  },
];

const updatedproduct = products.filter((curElem) => {
    return curElem.price <=500;
});
console.log(updatedproduct);

//remove Duplicates

let filterUnique = [2,3,4,4,5,5,6,6,7,8,8]
const filteroutput = filterUnique.filter((curelem , index ,arr) => {
    return arr.indexOf(curelem) === index;
});
console.log(filteroutput);
console.log([...new Set(filterUnique)]);

// square only even numbers

let squareNumber = [2,3,4,5,6,7,8];
const evennumber = squareNumber.filter((cur) => {
    return cur % 2 == 0
}).map((ce) => {
    return  ce * ce;
});
console.log(evennumber);

let squareNumber2 = [2,3,4,5,6,7,8];
const evennumber2 = squareNumber2.map((cur) => {
    if(cur % 2 === 0){
        return cur * cur;
    }
}).filter((cur) => {
    return  cur !== undefined;
});
console.log(evennumber2);

// add some text in names

const mywords = ["arslan" , "moosa" , "danyal"]
const updatedword = mywords.map((cur) => {
    return `Mr.${cur}`
});
console.log(updatedword);