import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { getTodos } from "./api/index";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";

function ToDos() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  async function loadTodos() {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data.data.items);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <button
        className="addNewTodoBtn"
        onClick={() => {
          navigate("/new");
        }}
      >
        add new
      </button>
      {loading ? (
        <Spinner />
      ) : (
        todos.map((todo) => (
          <TodoCard
            todo={todo}
            id={todo._uuid}
            key={todo._uuid}
            setTodos={setTodos}
          />
        ))
      )}
    </div>
  );
}

export { ToDos };
