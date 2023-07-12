const Todo = require("../models/todo");
function index(req, res) {
    //req is the request a user is making
    //res is the response that helps us respond to the request
    res.render("todos/index", {
        todos: Todo.getAll(),// what's returned from the getAll() method in the models/todo file
        title: 'All To-Dos'
    })
}

function show(req, res) {
    res.render("todos/show", {
       todo: Todo.getOne(req.params.id), 
       title: 'To-Do Details'
    })
}

function newTodo(req, res) {
    res.render("todos/new", { title: "New Todo"});
  }

  function create(req, res) {
    Todo.create(req.body)
    

   res.redirect("/todos");
  }



function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id)
  res.redirect("/todos");
}

module.exports = {
    index,
    show, 
    new: newTodo,
    create,
    delete: deleteTodo
}


// function index(req, res) {
//     //req is the request a user is making
//     //res is the response that helps us respond to the request
//     res.render("todos/index", {
//         todos: Todo.getAll()// what's returned from the getAll() method in the models/todo file
//     });
// }

// res.render ("string", {})
//1. this string is the relative path that points to the .ejs template that we made earlier
//2. this is the object we are sending with the template that has the data the template needs to show
