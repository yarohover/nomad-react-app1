import {useState, useEffect} from "react";
import "./App.css"

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const onAdd = (event)=>{
    event.preventDefault();
    if (todo === ''){
      return;
    };
    let newId = 1;
    if (todos.length !== 0){
      newId = todos[0].id + 1;
    }
    const newTodo = {id:newId, content:todo};
    setTodos(prev=>[newTodo, ...prev]);
    setTodo("");
  };
  const todoList = todos.map((elmt,idx)=>{
    const newArr = [];
    todos.forEach(element => {
      if(element.id !== elmt.id){
        newArr.push(element);
      }
    });
    return <li key={idx}>{elmt.content}<form style={{display:"inline-block", paddingLeft:"10px"}} onSubmit={event=>{
      event.preventDefault();
      setTodos(newArr);
    }}><button type="submit">Done</button></form></li>;
  });

  useEffect(()=>console.log(todos), [todos]);
  return (
    <div className="App">
      <h1><strong>My To Do List</strong><span>{todos.length===0?null:"  "+todos.length}</span></h1>
      <form className="input" onSubmit={onAdd}>
        <input type="text" value={todo} placeholder="What's Next?" onChange={event=>setTodo(event.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ol>{todoList}</ol>
    </div>
  );
}

export default App;
