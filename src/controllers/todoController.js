
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
        const todos = await Todo.findAll({where : {
        userId :req.user.id},
        attributes : ['id', 'title' ,"completed"],
        order : [['id', 'desc']]

    })
        res.status(200).json({ todos })
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


exports.deleteTodo = async (req, res, next) => {
    try {
      const { id } = req.params;
      // const result = await Todo.destroy({ where: { id } });
      // if (result === 0) {
      //   return res
      //     .status(400)
      //     .json({ message: 'todo with this id does not exists' });
      // }
  
      const todo = await Todo.findOne({ where: { id } });
      if (!todo) {
        return res
          .status(400)
          .json({ message: 'todo with this id does not exists' });
      }
  
      if (todo.userId !== req.user.id) {
        res.status(400).json({ message: 'cannot delete todo' });
      }
  
      await todo.destroy();
  
      res.status(200).json({ message: 'success delete' });
    } catch (err) {
      next(err);
    }
  }