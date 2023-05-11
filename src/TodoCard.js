import React, { useState } from "react";
import { deleteDAta, updateTodo } from "./api/index";
import { MdDeleteForever, MdEdit, MdDoneAll, MdDone } from "react-icons/md";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";
import "./App.css";
function TodoCard({ todo, setTodos, id }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [completeLoading, setCompleteLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);
      const res = await deleteDAta(id);
      setTodos((prev) => prev.filter((item) => item._uuid !== res.data._uuid));
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  async function completeTodo(isCompleted) {
    try {
      setCompleteLoading(true);
      const isComplete = { ...todo, isCompleted };
      const res = await updateTodo(isComplete, todo._uuid);
      setTodos((prevValue) => {
        return prevValue.map((item) =>
          item._uuid === todo._uuid ? res.data : item
        );
      });
      setCompleteLoading(false);
    } catch (e) {
      setCompleteLoading(false);
    }
  }

  return (
    <div className="todoCArd">
      <div>
        <p
          style={
            todo.isCompleted
              ? { textDecoration: "line-through", color: "gray" }
              : null
          }
          className="todoTitle"
        >
          {todo.title}
        </p>
        <h4>{todo.name}</h4>
        <h4>{todo.lastName}</h4>
        <h4>{todo.duration} day</h4>
      </div>
      <div className="TodoCardButtonsDiv">
        <button className="formBtn" disabled={loading} onClick={handleDelete}>
          {loading ? (
            <Spinner width={24} height={24} />
          ) : (
            <MdDeleteForever className="delBtn" />
          )}
        </button>
        <button className="formBtn" onClick={() => navigate(todo._uuid)}>
          <MdEdit className="editBtn" />
        </button>

        <button
          className="formBtn"
          onClick={() => completeTodo(true)}
          disabled={completeLoading}
        >
          {completeLoading ? (
            <Spinner width={18} height={18} />
          ) : todo.isCompleted ? (
            <MdDoneAll
              className="editBtn"
              onClick={() => completeTodo(false)}
            />
          ) : (
            <MdDone className="editBtn" />
          )}
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
