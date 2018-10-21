import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Todo from './models/Todo';
import User from './models/User'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todos');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

// Add new user
router.route('/users/add').post((req, res) => {
            let user = new User();
            user.username = req.body.username;
            user.tasks = [];

            user.save()
                .then(user => {
                    res.status(200).send({'message': 'done'});
                })
                .catch(err => {
                    res.status(400).send('Failed to create new record');
                });
            
});

//Get user by name 
router.route('/users/:username').get((req, res) => {
    User.find({username: req.params.username}, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
            
        }
    });
});

// Get todo by id
router.route('/todos/:id').get((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err)
            console.log(err);
        else
            res.json(todo);
    });
});

//add new todo for user
router.route('/addtodo').post((req, res) => {
    let todo = new Todo();
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.severity = req.body.severity;
    todo.order = req.body.order;
    let todoId = todo._id;
    todo.save();

    User.findById(req.body.userid, (err, user) => {
        if(!user)
            return next(new Error('Could not find user'));
        else {
            let task = user.tasks;
            task.push(todoId);

            User.update(
                {_id: req.body.userid},
                {$set :
                        {
                            "tasks": task
                        }
                }
            , function(err, result){
                if(err){
                    console.log(err);
                }
                res.json('Done')
            });
        }
    });
});

// edit task
router.route('/todos/update/:id').post((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo)
            return next(new Error('Could not load document'));
        else {
            console.log(req.body);
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.severity = req.body.severity;
            todo.status = req.body.status;
            todo.order = req.body.order;

            todo.save().then(todo => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/todos/delete/:id/:userid').get((req, res) => {
    Todo.findByIdAndRemove({_id: req.params.id}, (err, todo) => {
        if (err)
            console.log(err);
        else {
        User.update(
                { _id: req.params.userid },
                { $pull: 
                    { 
                    "tasks": req.params.id 
                    } 
                },
                function (err, result){
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.json('Delete success');
                    }
                }
            );
        }
    });
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));