//Coercion = technique where JS tries to interpret and do something for you

// console.log('5' - 5)    //JS predicts that both should be integer

// console.log('5' + 5)    //JS predicts that both should be string


const adder = true + 5
// console.log(adder);     //JS treats true as 1 (similarly false will be interpreted as 0)

const loginDetails = []     //login for getting details from DB

const  loginID = loginDetails[0]

if (loginID !== undefined) {    //can also use  if(loginID)
    console.log("Allow user to login");
} else {
    console.log("Auth failed");
}

// Values that JS interpret as false:
//false
//0
//''
//null
//undefined
