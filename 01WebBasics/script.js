//------------Ch 01------------

//document.title = 'i got changed'  //changing the HTML title

//console.log(document.getElementById('idone')); //accessing elements based on ID

//console.log(document.getElementsByClassName('classone'));


//const myElement = document.querySelector('p');   //selects the first <p> only

// const myElement = document.querySelectorAll('p');   //selects all <p>

// const myElement = document.querySelectorAll('#idone');   //selects particular id based on id-name

// const myElement = document.querySelectorAll('.classone');   //selects particular class based on class-name

// console.log(myElement); //myElement[1] if you want to read second <p> since we get result in from of an array in querySelectorAll()

//------------Ch 02------------

//Changing value for fisrt <p> tag
// const myPElements = document.querySelector('p');
// myPElements.textContent = 'Changed using JS';

//Changing values for all <p> tag
// const myPElements = document.querySelectorAll('p');
// myPElements.forEach(function(p){
//     p.textContent = 'Changed using loops'
// })

//Same as above but using arrow function
// const myPElements = document.querySelectorAll('p');
// myPElements.forEach((p) => p.textContent = 'Changed using loops')

//Removing all elements for <p> tag
// const myPElements = document.querySelectorAll('p');
// myPElements.forEach(function(p){
//     p.remove()
// })

//Adding a <p> tag at end of body
// const myNewPara = document.createElement('p');
// myNewPara.textContent = 'I was added via JS';
// document.querySelector('body').appendChild(myNewPara);

//Accessing <button> tag and changing its text/value on click (adding a listner to a button)
document.querySelector('button').addEventListener('click', (event)=>{
    console.log('button was pressed');
    event.target.textContent = 'I was clicked';
})

