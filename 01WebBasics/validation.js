function myValidation(){
    let myValue = document.getElementById('myForm').value;

    if (isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log('Not a valid input');
    }
    else{
        console.log("This input is Okay");
    }
    }
