import { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './data/api';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodos(data);
    }
    getTodos();
  }, []);

  const deleteTodo = async (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
    await fetch(`${API_URL}/${todoId}`, {
      method: 'DELETE',
    });
  };

  const updateTodo = async (todoToUpdate) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoToUpdate.id ? { ...todo, ...todoToUpdate } : todo
      )
    );
    await fetch(`${API_URL}/${todoToUpdate.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoToUpdate),
    });
  };

  const createTodo = async (newTodo) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setTodos(todos.concat(data));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">MCS Todos</h1>
        <TodoForm createTodo={createTodo} />
        <hr />
        <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </>
  );
}

export default App;
