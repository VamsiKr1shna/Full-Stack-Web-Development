import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Card from "./Card";
import Com from "./Com";
function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      count = {count }
      <button onClick={() => {setCount(count + 1)}}>UpdateCount</button>
      <Card device={count}/>
      <Com age1 = {20}
           age2 = {30}
           age3 = {40} />
    </div>
  );
}

export default App;
