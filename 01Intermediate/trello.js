const myTodos = []

myTodos.push('Buy bread')
myTodos.push('Study JS')
myTodos.push('Go to Gym')

myTodos.forEach(function(todo,index){
    // console.log(`Your task number ${index + 1} is: ${todo}`);
})


//Assignment
for (let index = myTodos.length - 1; index >=0; index--) {
    console.log(`Yout task number ${index+1} is: ${myTodos[index]}`)
}