const convertToRs = (dollar) => {
    if(typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error('Amount need to be in number')
    }
}

try {
    const myValue = convertToRs()
    console.log(myValue)    
    
} catch (e) {
    console.log(e)
}
