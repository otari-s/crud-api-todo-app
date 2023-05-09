import React from "react";
import { Outlet } from "react-router-dom";

function TodoLayout() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export { TodoLayout };
