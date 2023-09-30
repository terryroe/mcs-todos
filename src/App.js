import { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './data/api';
import Todos from './components/Todos';

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
    await fetch(`${API_URL}/${todoId}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">MCS Todos</h1>
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
