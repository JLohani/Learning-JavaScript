function myValidation(){
    let myValue = document.getElementById('myForm').value;

    if (isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log('Not a valid input');
    }
    else{
        console.log("This input is Okay");
    }
}

//Form Validation

document.querySelector('.myForm').addEventListener('submit', (event)=> {
    event.preventDefault(); //removes the parameters from URL
    console.log(event.target.username.value);
    event.target.username.value = '';
})
