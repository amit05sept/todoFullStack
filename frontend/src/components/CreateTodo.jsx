import { useState } from "react";
import axios from "axios";

export function CreateTodo({todos , setTodos}) {
  const [title, setTtile] = useState("");
  const [des, setDes] = useState("");

  const handleClick = async function () {
    try{

    if (title.trim().length === 0 || des.trim().length === 0) {
      return;
    }
    const res = await axios.post("http://localhost:3000/todo/create", {
      title:title,
      description:des,
    });
    // console.log(res.data.id);
    setTodos([...todos,{
        _id:res.data.id,
        title:title,
        description:des,
        completed:false
    }]);
}catch(err){
    console.log(err);       
}
  };
  return (
    <div>
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTtile(e.target.value);
        }}
      />{" "}
      <br />
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDes(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={handleClick}>
        Add todo
      </button>
    </div>
  );
}
