const express = require('express');
const router = express.Router();

const todosCtrl = require("../controllers/todos");

//All actual paths start with "/todos"

//GET/todos
router.get("/", todosCtrl.index)
//GET /todos/new
router.get("/new", todosCtrl.new)
//Get /todos/:id
router.get("/:id", todosCtrl.show)

  // Post /todos
  router.post("/", todosCtrl.create);
//DELETE /todos/:id
router.delete("/:id", todosCtrl.delete);


module.exports = router;
