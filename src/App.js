import {useState, useEffect} from "react";
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(response=>response.json())
    .then(json=>{setData(json);setLoad(false)});
  }, [])
  return (
    <div className="App">
      <h1>The Coins</h1>
      <select>{load?'Loading...':data.map((elmt,idx)=>{
        return <option key={idx}>
                {elmt.name}: {elmt.symbol}, ($ {elmt.quotes.USD.price.toFixed(2).toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")})
               </option>})}
      </select>
    </div>
  );
}

export default App;
