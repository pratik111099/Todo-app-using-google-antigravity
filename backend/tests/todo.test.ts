import request from 'supertest';
import app from '../app';
import * as dbHandler from './setup';
import Todo from '../models/todoModel';

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Todo API', () => {
  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({
        title: 'Test Todo',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toEqual('Test Todo');
    expect(res.body.completed).toEqual(false);
  });

  it('should get all todos', async () => {
    await Todo.create({ title: 'Todo 1' });
    await Todo.create({ title: 'Todo 2' });

    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
  });

  it('should update a todo', async () => {
    const todo = await Todo.create({ title: 'Old Title' });

    const res = await request(app)
      .put(`/api/todos/${todo._id}`)
      .send({
        title: 'New Title',
        completed: true,
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('New Title');
    expect(res.body.completed).toEqual(true);
  });

  it('should delete a todo', async () => {
    const todo = await Todo.create({ title: 'To Delete' });

    const res = await request(app).delete(`/api/todos/${todo._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', todo._id.toString());

    const findTodo = await Todo.findById(todo._id);
    expect(findTodo).toBeNull();
  });

  it('should return 400 if title is missing', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({});
    expect(res.statusCode).toEqual(400);
  });
});
