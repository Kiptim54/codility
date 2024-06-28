import cx from "classnames";
import { Component, useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [pendingTodos, setPendingTodos] = useState(0);

  const onChange = (event) => {
    setTodoInput(event.target.value);
  };

  const submitFunction = (e) => {
    e.preventDefault();
    if (todoInput) {
      setTodos([...todos, { name: todoInput, status: "new" }]);
      setTodoInput("");
    }
  };

  const setTodoToDone = (position) => {
    setTodos((prevState) => {
      return prevState.map((todo, index) => {
        if (index === position) {
          return {
            ...todo,
            status: todo.status === "new" ? "done" : "new",
          };
        }
        return todo;
      });
    });
  };

  // track todolist updates
  useEffect(() => {
    const countNewTasks = todos.filter(
      (todos) => todos.status === "new"
    ).length;
    setPendingTodos(countNewTasks);
  }, [todos]);
  return (
    <>
      <div>
        <h2>Todo List</h2>
        <form onSubmit={(e) => submitFunction(e)}>
          <input
            required
            type="text"
            name="todo"
            value={todoInput}
            onChange={onChange}
          />
          <input type="submit" />
        </form>
        <p className="task-counter">
          {pendingTodos} remaining out of {todos.length} tasks.
        </p>

        <ul>
          {todos.map((todo, index) => (
            <li
              className={todo.status === "done" && "is-done"}
              key={index}
              onClick={() => setTodoToDone(index)}
            >
              {todo.name}
            </li>
          ))}
        </ul>
      </div>
      <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
    </>
  );
}

export default TodoList;
