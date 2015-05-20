/**
 * Created by Amit Thakkar on 20/05/15.
 */
(function (ng) {
    var todoApp = ng.module("todo");
    todoApp.directive("keyEnter", function () {
        return {
            link: function (scope, element, attrs) {
                element.bind("keyup", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.keyEnter);
                        });
                        event.preventDefault();
                    }
                });
            }
        };
    });
})(angular);