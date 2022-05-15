let sayHello = function(name) {
    console.log(`greeting message for ${name}`);
    console.log(`Hey ${name}`);
}

// sayHello('John')


let fullNameMaker = function(firstname, lastname){
    console.log(`Happy to have you, ${firstname} ${lastname}`)
}

// fullNameMaker('John','Doe')


let myAdder = function(num1, num2){
    let added = num1+num2
    return added
}

// console.log(myAdder(1,4))


let myMultiplier = function(num1, num2){
    return num1 * num2
}

// console.log(myMultiplier(2,3))

let guestUser = function(name = 'unName', courseCount = 0){
    return 'Hello ' + name + ' and you course count is ' + courseCount
}

console.log(guestUser(1))