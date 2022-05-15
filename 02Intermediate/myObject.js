let myYoutubeVideo = {
    title: 'Loops in Javascript',
    videoLength: 15,
    videoCreator: 'HC',
    videoDescription: 'This is a video description'
}

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)


// //Assignment
// let myCourse = {
//     courseName: 'JS Explained',
//     courseCreator: 'JL',
//     coursePrice: 199,
//     courseDescription: 'JS concepts explained in a way you will never forget'
// }

// console.log(`New course ${myCourse.courseName} by ${myCourse.courseCreator} for ${myCourse.coursePrice}. Description: ${myCourse.courseDescription}`)


let changeVideoLength = function(myObject){
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
    }
}

let result = changeVideoLength(myYoutubeVideo) 
console.log(result.formatOne)
console.log(result.formatTwo)