/**
 * Created by Amit Thakkar on 19/05/15.
 */
(function (ng) {
    var todoApp = ng.module("todo", []);
    todoApp.controller("TODOController", ["TODOService", function (todoService) {
        var todoController = this;
        todoController.tasks = [];
        todoService.getTODOList()
            .success(function (todo) {
                todoController.tasks = todo;
            })
            .error(function (error) {
                // Handle error here.
                console.log(error);
            });
        todoController.addTask = function () {
            todoController.tasks.push(todoController.newTask);
            todoController.newTask = '';
        };
        todoController.removeTask = function (index) {
            todoController.tasks.splice(index, 1);
        };
    }]);
})(angular);