import { useState } from 'react';

// Form to create a new todo.  Utilizes a function from the parent (createTodo)
// to perform the create/save action.
const TodoForm = ({ createTodo }) => {
  // Use state to handle the inputs from the form.
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  // Handle submit for the entire form so that hitting enter in will submit the
  // form as well.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure the user entered something in the form.
    if (title.length === 0) {
      alert('Please enter something for the todo.');
      return;
    }

    const newTodo = {
      title,
      completed,
    };

    // Call the parent function to create the new todo.
    createTodo(newTodo);

    // Clear out the entries in preparation for the new submission.
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
