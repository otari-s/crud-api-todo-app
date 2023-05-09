import { useState } from "react";
import { Spinner } from "./Spinner";
import { postData, updateTodo } from "./api/index";
import { useNavigate } from "react-router-dom";

function initialFormValues(values) {
  return {
    title: values?.title || "",
    name: values?.name || "",
    lastName: values?.lastName || "",
    duration: values?.duration || undefined,
    isCompleted: false,
  };
}

function Form({ initialValues, type }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState(initialFormValues(initialValues));

  function handleChange(key, value) {
    setValues((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (type === "new") {
        await postData([values]);
      } else {
        await updateTodo(values, initialValues._uuid);
      }
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      setIsLoading(false);
    }
  }

  return (
    <div className="formDiv">
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange("title", e.target.value)}
          value={values.title}
          className="formInput"
          type="text"
          placeholder="Todo Title"
        />
        <input
          type="number"
          placeholder="Duration (Day)"
          className="formInput"
          value={values.duration || false}
          onChange={(e) => handleChange("duration", e.target.value)}
        />
        <input
          onChange={(e) => handleChange("name", e.target.value)}
          value={values.name}
          className="formInput"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => handleChange("lastName", e.target.value)}
          value={values.lastName}
          className="formInput"
          type="text"
          placeholder="Last Name"
        />
        <button
          // disabled={isLoading || Object.values(values).some((el) => !el)}
          className="addBtn"
          type="submit"
        >
          {isLoading ? (
            <Spinner width={20} height={20} />
          ) : (
            <p>{type === "new" ? "Add" : "Edit"} Todo</p>
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
