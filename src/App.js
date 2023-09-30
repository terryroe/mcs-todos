import { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './data/api';

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

  return (
    <>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </>
  );
}

export default App;
