/**
 * Created by Amit Thakkar on 19/05/15.
 */
(function (ng) {
    var todoApp = ng.module("todo");
    todoApp.service("TODOService", ["$http", function ($http) {
        var todoService = this;
        todoService.getTODOList = function() {
            return $http.get("todo.json")
        };
    }]);
})(angular);