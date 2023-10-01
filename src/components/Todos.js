const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="d-flex list-group-item align-items-center justify-content-between"
        >
          {todo.title}

          <div>
            <div className="form-check form-check-inline">
              <input
                id={`completed-${todo.id}`}
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={() =>
                  updateTodo({ ...todo, completed: !todo.completed })
                }
              />
              <label
                htmlFor={`completed-${todo.id}`}
                className="form-check-label me-4"
              >
                Completed
              </label>
            </div>

            <button
              className="btn btn-danger"
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
