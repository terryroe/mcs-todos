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
      <h3>Enter New Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="form-check form-check-inline">
          <input
            id="completed"
            type="checkbox"
            className="form-check-input"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
          <label htmlFor="completed" className="form-check-label">
            Completed
          </label>
        </div>

        <button className="btn btn-primary">Add New Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
