/**
 * Created by Amit Thakkar on 20/05/15.
 */
(function (require) {
    var todoTasks = [
        "AngularJS",
        "NodeJS",
        "MongoDB",
        "Radis",
        "Casendra"
    ];
    var express = require('express'),
        bodyParser = require('body-parser');
    var app = express();
    app.use(express.static('Part-3'));
    app.use('/lib', express.static('lib'));
    app.use(bodyParser.json());
    app.get('/todo', function (req, res) {
        res.json(todoTasks);
    });
    app.delete('/todo/:index', function (req, res) {
        todoTasks.splice(req.params.index, 1);
        res.send({status: 200});
    });
    app.post('/todo', function (req, res) {
        todoTasks.push(req.body.task);
        res.send({status: 200});
    });
    var server = app.listen(3000, function () {
        var port = server.address().port;
        console.log('TODO app listening at http://localhost:' + port);
    });
})(require);