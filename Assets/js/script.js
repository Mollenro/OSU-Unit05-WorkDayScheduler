//COMPLETE the current day is displayed at the top of the calendar 
//I am presented with timeblocks for standard business hours (9am-5pm);
//MAYBE? each timeblock is color coded to indicate whether it is in the past, present, or future
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

//Recall events from local storage!!!
storedWorkDay = JSON.parse(localStorage.getItem("Work_Day"));

if (storedWorkDay) {
    workDay = storedWorkDay;
}

function setColor(time){
    let current = moment().format("HA");
    let currentTime = moment(current, "HA");
    let selectedTime = moment(time, "HA");

    if (currentTime.isBefore(selectedTime)) {
        //console.log(currentTime + " vs " selectedTime);
        return "future";
    } else if (currentTime.isAfter(selectedTime)) {
        //console.log("Grey");
        return "past";
    } else {
        console.log("Red");
        return "present";
    }
}

workDay.forEach(function(workDay, index){
    let timeBlockEl = $("<div class='row time-block'>");
    let row = $("<div class='row no-gutters input-group'>")
    let hourEl = $("<div class='col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3'>");
    let eventBox = $("<textarea>");
    let saveBtn = $("<div class='col-sm col-lg-1 input-group-append'><button class='saveBtn btn-block' type='submit'><i class='fas fa-save'></i></button></div>")    
        
    hourEl.text(workDay.time);
    eventBox.text(workDay.event);
    eventBox.attr("class", "form-control " + setColor(workDay.time));

    timeBlockEl.attr("id", index);
    row.append(hourEl);
    row.append(eventBox);
    row.append(saveBtn);
    
    timeBlockEl.append(row);
    containerEl.append(timeBlockEl);
});

$(".saveBtn").on("click", function(){
    let eventId = parseInt($(this).closest(".time-block").attr("id"));
    let newEvent = $.trim($(this).parent().siblings("textarea").val());    

    workDay[eventId].event = newEvent;

    localStorage.setItem("Work_Day", JSON.stringify(workDay));
})

currentDayEl.text(moment().format("dddd, MMMM Do"));

