result = 22/7

//console.log(result.toFixed(2));

let floatRes = result.toFixed(2);

//floor() brings everything to the lower side ( 3.14 -> 3)
//console.log(Math.floor(floatRes));

//ceil() brings everything to the upper side ( 3.14 -> 4)
//console.log(Math.ceil(floatRes));

// console.log(Math.random() * 5 + 1);

let upper = 6
let lower = 1

let myRandom = Math.floor(Math.random()  * (upper - lower + 1)) + lower

console.log(myRandom)
