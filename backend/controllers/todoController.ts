import { Request, Response } from 'express';
import Todo from '../models/todoModel';

// @desc    Get all todos
// @route   GET /api/todos
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a todo
// @route   POST /api/todos
export const createTodo = async (req: Request, res: Response): Promise<any> => {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Please add a title' });
  }

  try {
    const newTodo = await Todo.create({
      title: req.body.title
    });
    res.status(201).json(newTodo);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update a todo
// @route   PUT /api/todos/:id
export const updateTodo = async (req: Request, res: Response): Promise<any> => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );

    res.status(200).json(updatedTodo);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
export const deleteTodo = async (req: Request, res: Response): Promise<any> => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    await todo.deleteOne();
    res.status(200).json({ id: req.params.id });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
