import { useState } from "react";
import TodoListForm from "./components/TodoListForm";
import { TodoLists } from "./components/TodoLists";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Reading" },
    { id: 2, description: "Coding" },
  ]);
  return (
    <>
      <TodoListForm />
      <TodoLists
        todoTasks={tasks}
        onDelete={(id) => setTasks(tasks.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
