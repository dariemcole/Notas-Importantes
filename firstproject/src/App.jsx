// import { useState } from "react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1>{count}</h1>
//      <button onClick={() => setCount(count + 1)}>suma</button>
//      <button onClick={() => setCount(count - 1)}>resta</button>
//     </>
//   )
// }

// export default App

// function App() {
//   const [name, setName] = useState(" ")
//   const [aaa, setAaa] = useState(" ")
// function sds(e) {
//   setAaa(e.target.value)
// }
//   return (
//     <>
//      <h1>{name}</h1>
//      <input type="text" onChange={sds} />
//      <button onClick={() => setName(aaa)}>añadir</button>
//     </>
//   )
// }

// export default App

function App() {
  return (
    <div className="app">
      <nav className="barra">
        <h1>Rick & Morty Wiki</h1>
        <div className="links">
          <h2>Characters</h2>
          <h2>Episode</h2>
          <h2>Location</h2>
        </div>
      </nav>
      <h1 className="characters">Characters</h1>
      <div className="buscador">
        <input className="input" type="text" placeholder="Buscar" />
        <button className="boton">Search</button>
      </div>
      <div className="contenedor">
        <div className="filtro">
          <div>Filters</div>
          <div>Clear Filters</div>
          <div>Box</div>
        </div>
        <div className="cards">Cards</div>
      </div>
    </div>
  );
}

export default App;
