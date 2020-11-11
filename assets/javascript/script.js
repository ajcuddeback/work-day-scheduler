$(".task-input").on("click", function() {
    var text = $(".taskEl").text().trim();

    var textInput = $("<textarea>").addClass("form-control").val(text);

    $(".taskEl").replaceWith(textInput);
    textInput.trigger("focus")
});

$(".saveBtn").on("click", function() {
    var text = $(".form-control").val().trim();

    var taskDiv = $("<p>").addClass("taskEl").text(text);

    $(".form-control").replaceWith(taskDiv)
});