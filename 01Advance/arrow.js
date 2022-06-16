//Normal function
// const sayHello = function(name){
//     return "Hey there, " + name + "!";
// }
// console.log(sayHello("JayLo"));


//Arrow function v01
// const sayHello = (name) => {
//     return `Hey there, ${name}!`;
// }
// console.log(sayHello("JayLo"));


//Arrow function v02
// const sayHello = (name) => `Hey there, ${name}!`
// console.log(sayHello("JayLo"));


// const todos = [{
//     title: "Buy bread",
//     isDone: true
// }, {
//     title: "Go to Gym",
//     isDone: true
// }, {
//     title: "Record yt videos",
//     isDone: false
// }]

// const thingsDone = todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone);



//Assignment:
//create an array with 6 objects (3 done and 3 not done)
//create a function to return the titles of objects that are done

const todos = [{
    title: "Buy bread",
    isDone: true
}, {
    title: "Go to Gym",
    isDone: true
}, {
    title: "Record yt videos",
    isDone: false
},{
    title: "Study JS",
    isDone: true
}, {
    title: "Attend a meeting",
    isDone: false
}, {
    title: "Rank up in game",
    isDone: false
}]

const thingsDone = todos.filter((todo) => todo.isDone === true).map(todo => todo.title)

console.log(thingsDone)