import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
//import Card from "./Card";
//import Com from "./Com";
import Product from './Product';
function App() {
  //let [count, setCount] = useState(0);


  const fetchAPI = ()=>{
    let ran = Math.floor(Math.random()*100)+1;
    console.log(ran);
    fetch('https://jsonplaceholder.typicode.com/todos/'+ran)
      .then(response => response.json())
      .then(json => console.log(json)) 
  }
   
  return (
    <div className="App">
      <button onClick={() =>fetchAPI()}>Update</button>
      {/* <Product param = json/> */}
    </div>
  );
}

export default App;
