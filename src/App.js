import {useState, useEffect} from "react";

function Hello(){
  console.log("Hello rendered")
  useEffect(() => {
    console.log("Created!! :D");
    return () => {
      console.log("Breaking... :(");
    };
  }, []);
  return <div>
    <h1>Hello!</h1>
  </div>
};

function App() {
  console.log("App rendered")
  const [shHi, setShHi] = useState(false);
  const onClick = () => setShHi(prev=>!prev);
  return (
    <div className="App">
      <button onClick={onClick}>{shHi?"Hide":"Show"}</button>
      {shHi?<Hello />:null}
    </div>
  );
}

export default App;
