import {useState, useEffect} from "react";
import "./App.css"

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  const onAdd = event=>{
    event.preventDefault();
    if(value === ''){return};
    const newlist = [value, ...list];
    setList(newlist);
    setValue('');
  };

  return (
    <div className="App">
      <h1>to do list</h1>
      <form onSubmit={onAdd}>
        <input type="text" value={value} placeholder="to do" onChange={event=>setValue(event.target.value)} />
        <button type="submit">add</button>
      </form>
      <ol>
        {list.map((elmt,idx)=><li key={idx}>{elmt}<form onSubmit={(event)=>{
          event.preventDefault();
          let newlist = [];
          console.log('elmt',elmt);
          list.forEach(element => {
            if(element+'' !== elmt+""){
              newlist.push(element);
              console.log(newlist);
            }
          });
          setList(newlist);
        }}><button type="submit">done</button></form></li>)}
      </ol>
    </div>
  );
}

export default App;
