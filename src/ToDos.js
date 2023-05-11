import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { getTodos } from "./api/index";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ToDos() {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
        {t("addNew")}
      </button>
      {loading ? (
        <Spinner width={70} height={70} />
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
