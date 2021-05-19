const { add } = require("./functions");
const _ = require("lodash");
const { cloneDeep } = require("lodash");

// console.log("app.js");
console.log(add(111, 50000));

//pradeti organizuoti savo koda su NPM
//sukuria automatiskai package.json
// npm init

//lodash install https://www.npmjs.com/package/lodash

// NPM INSTALl line:
// npm install --save lodash

//node_modules direktorijoje yra visos projekto priklausomybes
//sitas folderis neturetu buti pridedamas su git, so .gitignore - faile nurodom failus ir direktorijas kuriu nenorim pushint i git

// git clone ir repositorijos https paimam, ir kaime naujam kompe parpusta i vs projektas , tada is package json, suinstaliuojam dependencies su npm install
//parsisiuntus zipa, inicijuojam pirma karta git init

//idiegti nodemon kaip dev dependency - funkcionalumas naudojamas tik aplikacijos kurimo metu
// installiuojam su  --save-dev veliavele
// npm install -g nodemon (globaliai install)
// npm install nodemon --save-dev (lokaliai install)

//nodemon to stop it =  ctrl + c

//gauti is vartotojo sakini su prompt ir paversti ji visais case'ais ir atspausdinti concoleje
const {
  makeCamel,
  PascalCase,
  toSnakeCase,
  kebabCase,
} = require("../Git_practice/node_js uzduotis/js/functions");

let sakinys =
  "siandien buvo grazi diena ir silta apie trisdesimt penki laipsniai";
