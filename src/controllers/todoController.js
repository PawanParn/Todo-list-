
const { Todo  } = require('../models/index')

exports.createTodo = async (req, res ,next) => {
    try{
   
        const { title , completed } = req.body;

        const todo = await Todo.create({ title , completed , userId: req.user.id })
        res.status(201).json({ todo })

    }catch(err){
        next(err);
    }
}
exports.getAllTodo = async (req, res ,next) => {
    try{


    }catch(err){
        next(err);
    }
}
exports.getTodoById = async (req, res ,next) => {
    try{


    }catch(err){
        next(err);
    }
}
exports.updateTodo = async (req, res ,next) => {
    try{


    }catch(err){
        next(err);
    }
}
exports.deleteTodo = async (req, res ,next) => {
    try{


    }catch(err){
        console.log(err);
    }
}