//Generate Grade by Percentage and Total marks

let getMyGrade = function(currentMarks,totalMarks){
    let myPercentage = (currentMarks/totalMarks) * 100

    let myGrade = ''

    if (myPercentage >= 90) {
        myGrade = 'A'
    } else if (myPercentage >= 75) {
        myGrade = 'B'
    } else if (myPercentage >= 60) {
        myGrade = 'C'
    } else if (myPercentage >= 33) {
        myGrade = 'D'
    }
    else{
        myGrade = 'F'
    }

    return `Your grade is ${myGrade} and percentage is ${myPercentage}`

}

let yourResult = getMyGrade(50,100)

console.log(yourResult)