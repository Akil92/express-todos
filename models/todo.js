const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];

  function getAll() {
    return todos;
  };

  function getOne(id){
    id = parseInt(id);
    return todos.find(todo => todo.id === id);
    }

    function newTodo(req, res) {
      res.render("/todos/new", { title: "New Todo"});
    }

    function create(todo) {
      todo.id = Date.now() % 1000000;
      todo.done = false;
      todos.push(todo);
    }
    function deleteOne(id) {
      id= parseInt(id)
      const idx = todos.findIndex(todo => todo.id === id);
      todos.splice(idx, 1);
    }

  module.exports = {
    getAll,
    getOne,
    new: newTodo,
    create,
    deleteOne
  };