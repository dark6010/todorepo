var TodoModel = require('../models/todoModel.js');

/**
 * todoController.js
 *
 * @description :: Server-side logic for managing todos.
 */
module.exports = {

    /**
     * todoController.list()
     */
    list: function (req, res) {
        TodoModel.find(function (err, todos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting todo.',
                    error: err
                });
            }

            return res.json(todos);
        });
    },

    /**
     * todoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        TodoModel.findOne({_id: id}, function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting todo.',
                    error: err
                });
            }

            if (!todo) {
                return res.status(404).json({
                    message: 'No such todo'
                });
            }

            return res.json(todo);
        });
    },

    /**
     * todoController.create()
     */
    create: function (req, res) {
        var todo = new TodoModel({
			title : req.body.title,
			description : req.body.description,
			date : req.body.date,
			state : req.body.state
        });

        todo.save(function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating todo',
                    error: err
                });
            }

            return res.status(201).json(todo);
        });
    },

    /**
     * todoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        TodoModel.findOne({_id: id}, function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting todo',
                    error: err
                });
            }

            if (!todo) {
                return res.status(404).json({
                    message: 'No such todo'
                });
            }

            todo.title = req.body.title ? req.body.title : todo.title;
			todo.description = req.body.description ? req.body.description : todo.description;
			todo.date = req.body.date ? req.body.date : todo.date;
			todo.state = req.body.state ? req.body.state : todo.state;
			
            todo.save(function (err, todo) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating todo.',
                        error: err
                    });
                }

                return res.json(todo);
            });
        });
    },

    /**
     * todoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        TodoModel.findByIdAndRemove(id, function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the todo.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
