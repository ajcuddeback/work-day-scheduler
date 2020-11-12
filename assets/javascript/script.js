var tasks = [];




var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


$(".saveBtn").on("click", function() {
    var taskInput = $("#taskInput").val().trim();

    var status = $(".task-input").attr("id").replace("task-", "")

    

    tasks.push(taskInput)

    saveTasks();
});


var currentDayP = $("#currentDay");
var currentDay = moment();

currentDayP.text(currentDay.format("MMMM Do YYYY"));

console.log(currentDay)

var currentTime = moment().hour();

var dueTimeStyle = function() {

    $(".taskInput").each(function() {
        if($(this).attr("id") === currentTime) {
            $(this).addClass("present")
        } else if($(this).attr("id") < currentTime) {
            $(this).addClass("past")
        } else if($(this).attr("id") > currentTime) {
            $(this).addClass("future")
        }
    });
    console.log(moment().second())
};
dueTimeStyle()

setInterval(dueTimeStyle, (1000 * 60) * 10);



