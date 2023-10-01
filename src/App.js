import { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './data/api';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

function App() {
  // State for the list of todos
  const [todos, setTodos] = useState([]);

  // After the first render, get all the todos from the API and set them in
  // state
  useEffect(() => {
    async function getTodos() {
      // Wait for the data to come back...
      const response = await fetch(API_URL);
      const data = await response.json();
      // ...and then set the state
      setTodos(data);
    }
    getTodos();
  }, []);

  // Update the UI before deleting the todo from the API
  const deleteTodo = async (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
    await fetch(`${API_URL}/${todoId}`, {
      method: 'DELETE',
    });
  };

  // Update the UI before updating the todo to the API.  The only thing we
  // update is the completed value.
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

  // Create a new todo, but wait for the API call to return with the new ID
  // before adding the todo to the UI
  const createTodo = async (newTodo) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setTodos(todos.concat(data));
  };

  // Keep the render for this component small.  Pass functions to the
  // subcomponents so they can be called there to modify the state here, in this
  // component.
  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">MCS Todos</h1>
        <TodoForm createTodo={createTodo} />
        <hr className="my-4" />
        <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </>
  );
}

export default App;
