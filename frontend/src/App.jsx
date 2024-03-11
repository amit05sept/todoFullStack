import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import "./App.css";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // fetch("http://localhost:3000/todo/getAllTodos").then(async function (
      //   res
      // ) {
      //   const data = await res.json();
      //   console.log(data.Todos);
      //   // console.log(setTodos(data.Todos));
      // });
      const res = await axios.get("http://localhost:3000/todo/getAllTodos");
      // console.log(res);
      // const data = await res.json();
        // console.log(res.data.Todos);
        setTodos(res.data.Todos);
    }
    fetchData();
  }, []);

  return (
    <>
      <CreateTodo todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
