import axios from "axios";

export function Todos({ todos, setTodos }) {
  const handleClick = async function (e) {
    try {
    //   console.log(e.target);
      const completed = e.target.dataset.completed === "true" ? true : false;
      const id = e.target.getAttribute("id");
    //   console.log(completed, id);

      if (!completed) {
        await axios.post(`http://localhost:3000/todo/markComplete/${id}`);
      } else {
        await axios.post(`http://localhost:3000/todo/unmarkComplete/${id}`);
      }
      const indx = todos.findIndex((todo) => {
        return todo._id === id;
      });
      const newTodo = [...todos];
      newTodo[indx].completed = !newTodo[indx].completed;
      setTodos(newTodo);
    } catch (err) {
        console.log(err);
    }
  };
  return (
    <div>
      {todos.map((todo, indx) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={handleClick}
              id={todo._id}
              data-completed={todo.completed}>
              {todo.completed ? "completed ✅" : "mark complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
