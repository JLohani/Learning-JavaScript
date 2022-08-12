const convertToRs = (dollar) => {
    if(typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error('Amount need to be in number')
    }
}

try {
    const myValue = convertToRs(5)          //this will work
    //const myValue = convertToRs('five')   //this will throw exception
    console.log(myValue)    
    
} catch (e) {
    console.log(e)
}
