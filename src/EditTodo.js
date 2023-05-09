import { useState, useEffect } from "react";
import Form from "./Form";
import { getTodo } from "./api";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";

function EditTodo() {
  let { id } = useParams();
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);
  async function loadTodo() {
    try {
      setLoading(true);
      const { data } = await getTodo(id);
      setTodo(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadTodo();
  }, []);

  return (
    <div>
      {loading ? <Spinner /> : <Form initialValues={todo} type="edit" />}
    </div>
  );
}

export default EditTodo;
