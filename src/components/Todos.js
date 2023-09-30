const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="row mb-4 border-bottom">
          <div className="col-md-6">{todo.title}</div>
          <div className="col-md-3">
            <label htmlFor={`completed-${todo.id}`}>Completed:</label>
            <input
              id={`completed-${todo.id}`}
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                updateTodo({ ...todo, completed: !todo.completed })
              }
            />
          </div>
          <div className="col-md-3 text-end">
            <button
              className="btn btn-danger mb-3"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
