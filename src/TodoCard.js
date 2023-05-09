import React, { useState } from "react";
import { deleteDAta, updateTodo } from "./api/index";
import { MdDeleteForever, MdEdit, MdDoneAll } from "react-icons/md";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";
import "./App.css";
function TodoCard({ todo, setTodos, id }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  async function completeTodo() {
    try {
      const isComplete = { ...todo, isCompleted: true };
      const res = await updateTodo(isComplete, todo._uuid);
      setTodos((prevValue) => {
        return prevValue.map((item) =>
          item._uuid === todo._uuid ? res.data : item
        );
      });
    } catch (e) {}
  }

  return (
    <div className="todoCArd">
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
      <div className="userInfo">
        <ul>
          <li>{todo.name}</li>
          <li>{todo.lastName}</li>
          <li>{todo.duration} Day</li>
        </ul>
        {/* <p>name: {todo.name}</p> */}
        {/* <p>{todo.lastName}</p>
        <p>{todo.duration}</p> */}
      </div>
      <div className="TodoCardButtonsDiv">
        <button className="formBtn" disabled={loading} onClick={handleDelete}>
          {loading ? (
            <Spinner width={20} height={20} />
          ) : (
            <MdDeleteForever className="delBtn" />
          )}
        </button>
        <button className="formBtn" onClick={() => navigate(todo._uuid)}>
          <MdEdit className="editBtn" />
        </button>

        <button className="formBtn" onClick={completeTodo}>
          <MdDoneAll className="editBtn" />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
