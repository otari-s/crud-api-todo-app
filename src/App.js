import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToDos } from "./ToDos";
import { TodoLayout } from "./TodoLayout";
import { NewTodo } from "./NewTodo";
import EditTodo from "./EditTodo";
import { NotFound } from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoLayout />}>
        <Route index element={<ToDos />} />
        <Route path=":id" element={<EditTodo />} />
        <Route path="new" element={<NewTodo />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
