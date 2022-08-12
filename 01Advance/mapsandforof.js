var john = {
    name: "I am John",
    age: 24,
    isActive: true
}

var marry = {
    name: "I am Marry",
    age: 23,
    isActive: true
}

var sam = {
    name: "I am Sam",
    age: 29,
    isActive: false
}

let users = new Map()

//console.log(typeof users)

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

//console.log(users);

//console.log(users.size);

//console.log(users.get('sam'));

//console.log(users.values());

// for (const key of users.keys()) {
//     console.log(key);  
// }

// for (const value of users.values()) {
//     console.log(value.name);  
// }

// for (const [key, value] of users.entries()){
//     console.log(key + ' = ' + value.name);
// }

var arrofArr = [['one', '1'], ['two', 2], ['three', '3']]

var newMap = new Map(arrofArr)
//console.log(newMap)

for (const [key,value] of arrofArr.entries()){
    console.log(key + ' = ' + value[0]);
}