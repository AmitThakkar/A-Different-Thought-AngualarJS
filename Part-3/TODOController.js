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
            todoService.addTODOTask(todoController.newTask)
                .success(function (response) {
                    todoController.tasks.push(todoController.newTask);
                    todoController.newTask = '';
                })
                .error(function (error) {
                    // Handle error here.
                    console.log(error);
                });
        };
        todoController.removeTask = function (index) {
            todoService.deleteTODOTask(index)
                .success(function (response) {
                    todoController.tasks.splice(index, 1);
                })
                .error(function (error) {
                    // Handle error here.
                    console.log(error);
                });
        };
    }]);
})(angular);