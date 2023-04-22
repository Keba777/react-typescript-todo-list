interface TodoTask {
  id: number;
  description: string;
}

interface Props {
  todoTasks: TodoTask[];
  onDelete: (id: number) => void;
}

export const TodoLists = ({ todoTasks, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <th>#</th>
        <th>Todo Lists</th>
        <th>Complete Task</th>
        <th></th>
      </thead>
      <tbody>
        {todoTasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.description}</td>
            <td></td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
