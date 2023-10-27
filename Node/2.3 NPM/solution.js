// var generateName = require("sillyname");
import generateName from "sillyName"; // import x from y (x kafana göre değişken, y module name'dir)

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);

//Node Package Manager (NPM)
//https://www.npmjs.com     -->  !!PACKAGES WORLD!!