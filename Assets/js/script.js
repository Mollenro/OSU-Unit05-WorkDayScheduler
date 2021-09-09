//COMPLETE the current day is displayed at the top of the calendar 
//I am presented with timeblocks for standard business hours (9am-5pm);
//each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock THEN I can enter an event
//WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
//WHEN I refresh the page THEN the saved events persist

let containerEl = $("#container");
let currentDayEl = $("#currentDay");

let workDay = [
    { time: "9AM", event: ""},
    { time: "10AM", event: ""},
    { time: "11AM", event: ""},
    { time: "12AM", event: ""},
    { time: "1PM", event: ""},
    { time: "2PM", event: ""},
    { time: "3PM", event: ""},
    { time: "4PM", event: ""},
    { time: "5PM", event: ""}
];

function setColor(){
    let currentTime = moment().format("HA");
    console.log(currentTime);
    
    
}

function displayTimeBlocks() {
    workDay,array.forEach(element => {
        let timeBlockEl = $("<div>");
        let hourEl = $("<p>");
        let eventBox = $("<input>");
        let saveBtn = $("<button>");
        
        timeBlockEl


    });
}

//saveBtn.on("click", function(){

//})








//.isBefore


currentDayEl.text(moment().format("dddd, MMMM Do"));

setColor();
displayTimeBlocks();

