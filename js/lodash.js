const _ = require("lodash");

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
