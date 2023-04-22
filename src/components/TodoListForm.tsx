const TodoListForm = () => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="plans" className="form-label">
          Add Todo
        </label>
        <input id="plans" type="text" className="form-control" />
      </div>
    </div>
  );
};

export default TodoListForm;
