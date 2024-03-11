const todos = require("../models/todoModel");
// const mongoose = require("mongoose");

module.exports.createNewTodo = async function (req, res) {
  const createPayload = req.body;
  const todo = await todos.create(createPayload);
  res.status(200).json({ id: todo._id });
};
module.exports.markTodoComplete = async function (req, res) {
  try {
    const id = req.params.id;
    const todo = await todos.findById(id);
    // console.log(todo);
    todo.completed = true;
    await todo.save();
    res.status(200).json({ id });
  } catch (err) {
    console.log(err);
    res.status(411).json({msg:"invalid id"});
  }
};

module.exports.getTodoById = async function (req, res) {
  try {
    const id = req.params.id;
    const todo = await todos.findById(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(411).json({msg:"invalid id"});
  }
};
module.exports.getAllTodos = async function(req,res){
    const Todos = await todos.find({});

    res.status(200).json({Todos});

}
module.exports.unmarkTodoComplete = async function (req, res) {
  try {
    const id = req.params.id;
    console.log(id);
    const todo = await todos.findById(id);
    console.log(todo);
    todo.completed = false;
    await todo.save();
    res.status(200).json({ id });
  } catch (err) {
    console.log(err);
    res.status(411).json({msg:"invalid id"});
  }
};
module.exports.deleteTodo = function (req, res) {};
module.exports.deleteAll = function (req, res) {};
module.exports.editTodo = function (req, res) {};
