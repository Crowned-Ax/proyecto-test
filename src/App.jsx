import { useState } from "react";
import "./App.css";

function Greeting({name,apellido}) {
  return <h2>Welcome back, {name} {apellido}</h2>;
}
function Greeting2(props) {
  return <h2>Welcome back 2, {props.name} {props.apellido}</h2>;
}
function All(props){
  return(
    <div>
      <h1>Salut et Au Revoir</h1>
      <Greeting2 name="Juan" apellido="Olave"/>
       <h3>Contador: {props.count}</h3>
      <button onClick={props.accion}>
        Sumar
      </button>
    </div>
  );
}

function App() {
  const vari = "ggg"
  const [count, setCount] = useState(0)
  function accion() {
    let temp = count + 1;
    console.log(temp);
    setCount(temp);
  }
  return (
    <div>
      //<All count={count} accion={accion} />
    </div>
  );
}

export default App;
