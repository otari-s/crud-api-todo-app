import React, { useState } from "react";
import { postData } from "./api/index";
import { MdLibraryAdd } from "react-icons/md";
function Form({ setTodos }) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const body = [
        {
          name: value,
          isComplete: false,
        },
      ];
      const { data } = await postData(body);
      setTodos((prev) => {
        return [...prev, ...data.items];
      });
      setValue("");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="formDiv">
      <form className="form" onSubmit={onSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="formInput"
          type="text"
          placeholder="Add todo"
        />
        <button
          disabled={isLoading || !value}
          className="formBtn"
          type="submit"
        >
          <MdLibraryAdd className="addBtn" />
        </button>
      </form>
    </div>
  );
}

export default Form;
