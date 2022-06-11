let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(addMeet){
        this.meetings = this.meetings + addMeet;
    },

    doneMeeting: function(doneMeet){
        this.meetDone = this.meetDone + doneMeet;
    },

    resetDay: function(){
        this.meetings = 0;
        this.meetDone = 0;
    },

    summary: function(){
        console.log(`You have ${this.meetings} meetings today`)
        console.log(`${this.meetDone} meetings are done`)
        console.log(`${this.meetings - this.meetDone} meetings are left`)

    }
}

myTodos.addMeeting(4)
myTodos.doneMeeting(1)
myTodos.summary()
myTodos.resetDay()
myTodos.summary()

//Assignment
// Handle meeting done
// Create a function that can reset an entire day

