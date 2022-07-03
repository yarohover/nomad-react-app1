import {useState, useEffect} from "react";
import "./App.css"

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);

  function onAdd(event){
    event.preventDefault();
    if(todo === ""){return}
    console.log("Added todo:", todo);
    const newTodo = [...todos, mkNewObj(todo)];
    setTodos(newTodo);
    setTodo("");
  };

  function mkNewObj(content){
    let newId = 1;
    if (todos.length !== 0){
      newId = todos[todos.length -1].id + 1;
    }
    return {id:newId, content:content}
  };

  const onDone = (event, id, prevArr)=>{
    event.preventDefault();
    console.log("done!");
    const newArr = [];
    prevArr.forEach(element => {
      if(element.id !== id){
        newArr.push(element);
      }
    });
    setTodos(newArr);
  };

  useEffect(()=>{
    setTodoList(todos.map((elmt, idx)=>{
      return <li key={idx}><span>{elmt.content}</span><form onSubmit={event=>onDone(event, elmt.id, todos)}><button type="submit">Done</button></form></li>
    }));
    console.log("now to do list: ", todos);
  }, [todos]);
   
  return (
    <div className="App">
      <h1>My To Do List : {todos.length}</h1>
      <form onSubmit={onAdd}>
        <input type="text" placeholder="What's Next?" value={todo} onChange={event=>setTodo(event.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ol className="show">{todoList}</ol>
    </div>
  );
}

export default App;
