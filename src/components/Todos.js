const Todos = ({ todos, deleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="row mb-4 border-bottom">
          <div className="col-md-6">{todo.title}</div>
          <div className="col-md-6">
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
