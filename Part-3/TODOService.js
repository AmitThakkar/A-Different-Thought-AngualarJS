/**
 * Created by Amit Thakkar on 19/05/15.
 */
(function (ng) {
    var todoApp = ng.module("todo");
    todoApp.service("TODOService", ["$http", function ($http) {
        var API_URL = "todo";
        var todoService = this;
        todoService.getTODOList = function () {
            return $http.get(API_URL);
        };
        todoService.deleteTODOTask = function (index) {
            return $http.delete(API_URL + "/" + index);
        };
        todoService.addTODOTask = function (task) {
            return $http.post(API_URL, {task: task});
        };
    }]);
})(angular);