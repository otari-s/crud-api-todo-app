import React, { useState } from "react";
import { deleteDAta } from "./api/index";
import { MdDeleteForever } from "react-icons/md";
function TodoCard({ name, setTodos, id }) {
  const [loading, setLoading] = useState(false);
  async function handleDelete() {
    try {
      setLoading(true);
      const res = await deleteDAta(id);
      setTodos((prev) => prev.filter((item) => item._uuid !== res.data._uuid));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  return (
    <div className="todoCArd">
      <p>{name}</p>
      <button className="formBtn" disabled={loading} onClick={handleDelete}>
        <MdDeleteForever className="delBtn" />
      </button>
    </div>
  );
}

export default TodoCard;
