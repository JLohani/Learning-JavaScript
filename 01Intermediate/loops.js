const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

//ForEach loop
days.forEach(function(day,index){
    // console.log(`starts with ${index+1} -- ${day}`);
})

//For loop
for (let index = 0; index < days.length; index++) {
    // console.log(days[index]);
}

for (let index = days.length -1; index >=0; index--) {
    console.log(days[index]);
}