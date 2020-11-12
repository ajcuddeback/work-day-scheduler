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

var m = moment();

var currentTime = moment().second();


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

setInterval(function() {
        dueTimeStyle()
}, 1000);



