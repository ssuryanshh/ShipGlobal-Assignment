"use client";
import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Task 1', status: 'backlog' },
    { id: 2, title: 'Task 2', status: 'backlog' },
    { id: 3, title: 'Task 3', status: 'backlog' },
    { id: 4, title: 'Task 4', status: 'todo' },
    { id: 5, title: 'Task 5', status: 'todo' },
    { id: 6, title: 'Task 6', status: 'todo' },
    { id: 7, title: 'Task 7', status: 'ongoing' },
    { id: 8, title: 'Task 8', status: 'ongoing' },
    { id: 9, title: 'Task 9', status: 'done' },
    { id: 10, title: 'Task 10', status: 'done' },
  ]);

  const handleMoveTodo = (id, direction) => {
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);
    const todo = updatedTodos[todoIndex];

    if (direction === 'left') {
      switch (todo.status) {
        case 'todo':
          todo.status = 'backlog';
          break;
        case 'ongoing':
          todo.status = 'todo';
          break;
        case 'done':
          todo.status = 'ongoing';
          break;
        default:
          break;
      }
    } else if (direction === 'right') {
      switch (todo.status) {
        case 'backlog':
          todo.status = 'todo';
          break;
        case 'todo':
          todo.status = 'ongoing';
          break;
        case 'ongoing':
          todo.status = 'done';
          break;
        default:
          break;
      }
    }

    updatedTodos[todoIndex] = todo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <div className="bg-gray-100 rounded p-4">
          <h2 className="text-center text-xl font-bold mb-2">Backlog</h2>
            {todos.filter((todo) => todo.status === 'backlog').map((todo) => (
              <div key={todo.id} className="bg-white rounded p-4 mb-2">
                <h3 className="text-lg font-bold">{todo.title}</h3>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    disabled
                  >
                    &#60;-
                  </button>
                  &nbsp;
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleMoveTodo(todo.id, 'right')}
                  >
                    -&gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <div className="bg-gray-100 rounded p-4">
          <h2 className="text-center text-xl font-bold mb-2">To Do</h2>
            {todos.filter((todo) => todo.status === 'todo').map((todo) => (
              <div key={todo.id} className="bg-white rounded p-4 mb-2">
                <h3 className="text-lg font-bold">{todo.title}</h3>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleMoveTodo(todo.id, 'left')}
                  >
                    &lt;-
                  </button>
                  &nbsp;
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleMoveTodo(todo.id, 'right')}
                  >
                    -&gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <div className="bg-gray-100 rounded p-4">
          <h2 className="text-center text-xl font-bold mb-2">Ongoing</h2>
            {todos.filter((todo) => todo.status === 'ongoing').map((todo) => (
              <div key={todo.id} className="bg-white rounded p-4 mb-2">
                <h3 className="text-lg font-bold">{todo.title}</h3>
                <div className="flex justify-end">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleMoveTodo(todo.id, 'left')}
                  >
                    &lt;-
                  </button>
                  &nbsp;
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleMoveTodo(todo.id, 'right')}
                  >
                    -&gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <div className="bg-gray-100 rounded p-4">
          <h2 className="text-center text-xl font-bold mb-2">Done</h2>
            {todos.filter((todo) => todo.status === 'done').map((todo) => (
              <div key={todo.id} className="bg-white rounded p-4 mb-2">
                <h3 className="text-lg font-bold">{todo.title}</h3>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleMoveTodo(todo.id, 'left')}
                  >
                    &lt;-
                  </button>
                  &nbsp;
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    disabled
                  >
                    -&gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;