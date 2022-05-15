// && - AND Operator - Both sides need to be true
// || - OR Operator - One side need to be true

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting Message to user')
    console.log('Grant access to paid course')
} else if (isVerified || isGuest){
    console.log('Allow free previews')
} else{
    console.log('MESSAGE: please contact Admin')
}