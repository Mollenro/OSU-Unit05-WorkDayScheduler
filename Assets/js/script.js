//COMPLETE the current day is displayed at the top of the calendar 
//I am presented with timeblocks for standard business hours (9am-5pm);
//MAYBE? each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock THEN I can enter an event
//WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
//WHEN I refresh the page THEN the saved events persist

let containerEl = $("#container");
let currentDayEl = $("#currentDay");
let saveBtn = $("<button>");

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

function checkStorage(){
    workDay = JSON.parse(localStorage.getItem("Work_Day"));
}
//Recall events from local storage!!!

function setColor(time){
    let current = moment();

    let currentTime = moment(current, "HA");
    let selectedTime = moment(time, "HA");
    if (currentTime.isBefore(selectedTime) === true) {
        //console.log("Green");
        return "Green";
    } else if (currentTime.isAfter(selectedTime) === true) {
        //console.log("Grey");
        return "Grey";
    } else {
        //console.log("Red");
        return "Red";
    }
}

function displayTimeBlocks() {
    workDay.forEach(function(workDay){
        let timeBlockEl = $("<div>");
        let hourEl = $("<div>");
        let eventBox = $("<textarea>");
        
        
        hourEl.text(workDay.time);
        //console.log(hourEl.text());
        //console.log(workDay.event);
        eventBox.text(workDay.event);
        eventBox.attr("class", setColor(workDay.time));
        saveBtn.text("Save");

        timeBlockEl.append(hourEl);
        timeBlockEl.append(eventBox);
        timeBlockEl.append(saveBtn);

        containerEl.append(timeBlockEl);
        containerEl.append("<p>Test</p>");
        //console.log(timeBlockEl);
    });
}

saveBtn.on("click", function(){
    localStorage.setItem("Work_Day", JSON.stringify(workDay));


})











currentDayEl.text(moment().format("dddd, MMMM Do"));

displayTimeBlocks();

