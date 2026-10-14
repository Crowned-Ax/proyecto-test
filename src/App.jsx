import { useState } from "react";
import "./App.css";

function Greeting({name,apellido}) {
  return <h2>Welcome back to Hell, {name} {apellido} Jajajaja</h2>;
}
function Greeting2(props) {
  return <h2>Bienvenido de nuevo al infierno {props.name} {props.apellido} Jajajaja</h2>;
}
function All(props){
  return(
    <div>
      <h1>Salut et Au  pour la vie</h1>
      <Greeting2 name="Juan" apellido="Olave"/>
       <h3>Contador: {props.count}</h3>
      <button onClick={props.accion}>
        Sumar
      </button>
    </div>
  );
}

function App() {
  const [clicked, setClicked] = useState(0)
  function accion() {
    let temp = clicked + 1;
    setClicked(temp);
  }
  return (
    <div>
      //<All count={clicked} accion={accion} />
    </div>
  );
}

export default App;
