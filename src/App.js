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

  return (
    <>
      <h1>MCS Todos</h1>
      <Todos todos={todos} />
    </>
  );
}

export default App;
