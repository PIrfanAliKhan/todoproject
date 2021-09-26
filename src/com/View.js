import React from "react";
import EachTodo from "./EachTodo";
import Header from "./Header";

export default function View({ todos, deletetodo}) {
  return (
    <div>
      <Header />
      <br />
      {todos.map((todo) => {
        return <EachTodo todo={todo} ondelete={deletetodo}/>;
      })}
    </div>
  );
}
