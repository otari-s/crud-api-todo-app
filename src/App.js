import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import TodoCard from "./TodoCard";
import { getTodos } from "./api/index";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  async function loadTodos() {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data.data.items);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="App">
      <Form setTodos={setTodos} todo={todos} />
      {loading ? (
        <div>loading ....</div>
      ) : (
        todos.map((todo) => (
          <TodoCard
            name={todo.name}
            id={todo._uuid}
            key={todo._uuid}
            setTodos={setTodos}
          />
        ))
      )}
    </div>
  );
}

export default App;
