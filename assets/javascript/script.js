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
