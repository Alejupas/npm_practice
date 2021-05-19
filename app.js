const { add } = require("./functions");
const _ = require("lodash");
const { cloneDeep } = require("lodash");

// console.log("app.js");
// console.log(add(10, 10));

//pradeti organizuoti savo koda su NPM
//sukuria automatiskai package.json
// npm init

//lodash install https://www.npmjs.com/package/lodash

// NPM INSTALl line:
// npm install --save lodash

//node_modules direktorijoje yra visos projekto priklausomybes
//sitas folderis neturetu buti pridedamas su git, so .gitignore - faile nurodom failus ir direktorijas kuriu nenorim pushint i git

// su lodash random gauti skaiciu nuo 10 iki 30
const randomNumber = _.random(10, 30);
console.log(randomNumber);

//clone lodash funkcija (shallow)
// cloneDeep pakopijuos ir objekta
//padaryti deep a kintamojo kopija  su _.cloneDeep

const a = [{ age: 11 }, { age: 22 }, { age: 33 }];
const maybeCopy = _.cloneDeep(a);
console.log(maybeCopy);

// const maybeCopy = a;

maybeCopy[0].age = 100;

console.log("a[0].age", a[0].age);

if (maybeCopy[1] === a[1]) {
  console.log("lygu");
} else {
  console.log("nelygu");
}
