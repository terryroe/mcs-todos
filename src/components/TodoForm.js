import { useState } from 'react';

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      completed,
    };

    createTodo(newTodo);

    setTitle('');
    setCompleted(false);
  };

  return (
    <>
      <h3>New Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          id="completed"
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        <label htmlFor="completed">Completed</label>

        <button className="btn btn-primary">Add New Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
