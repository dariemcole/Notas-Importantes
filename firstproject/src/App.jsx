import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Personajes from "./components/personajes/personaje";
import Status from "./components/filtro/status";
import Species from "./components/filtro/species";
import Gender from "./components/filtro/gender";

const paginacion = 42;

const botones = [];
for (let i = 0; i < paginacion; i++) {
  botones.push(i + 1);
}

function App() {
  const [characters, setCharacters] = useState(null);
  const [fondo, setFondo] = useState(null);
  const [fondo2, setFondo2] = useState(null);
  const [fondo3, setFondo3] = useState(null);
  const [buscar, setBuscar] = useState(null);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const personajes = fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => setCharacters(response.results));
  }, []);
  const Filtro = async (estado) => {
    const temporal = await fetch(
      `https://rickandmortyapi.com/api/character/?name=&status=${estado}`
    );
    const data = await temporal.json();
    setCharacters(data.results);
    setFondo(estado);
  };
  const Filtro2 = async (estado2) => {
    const temporal2 = await fetch(
      `https://rickandmortyapi.com/api/character/?name=&species=${estado2}`
    );
    const data2 = await temporal2.json();
    setCharacters(data2.results);
    setFondo2(estado2);
  };
  const Filtro3 = async (estado3) => {
    const temporal3 = await fetch(
      `https://rickandmortyapi.com/api/character/?name=&gender=${estado3}`
    );
    const data3 = await temporal3.json();
    setCharacters(data3.results);
    setFondo3(estado3);
  };
  const originalState = async () => {
    const temporal4 = await fetch("https://rickandmortyapi.com/api/character");
    const data4 = await temporal4.json();
    setCharacters(data4.results);
  };
  const buscador = async (busca) => {
    const temporal5 = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${busca}`
    );
    const data5 = await temporal5.json();
    setCharacters(data5.results);
    setBuscar(busca);
  };
  const paginas = async (ele) => {
    const numeroPage = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${ele}`
    );
    const data6 = await numeroPage.json();
    setCharacters(data6.results);
    setPagina(ele);
  };

  const teclado = (e) => {
    if (e.key === "Enter") {
      buscador(buscar);
    }
  };
  return (
    <div className="app">
      <nav className="barra">
        <h1>
          Rick & Morty <span className="wiki">Wiki</span>
        </h1>
        <div className="links">
          <h2>Characters</h2>
          <h2>Episode</h2>
          <h2>Location</h2>
        </div>
      </nav>
      <h1 className="characters">Characters</h1>
      <div className="buscador">
        <input
          onChange={(e) => {
            setBuscar(e.target.value);
          }}
          className="input"
          type="text"
          placeholder="Search for characters..."
          onKeyPress={teclado}
        />
        <button
          className="boton"
          style={{ cursor: "pointer" }}
          onClick={() => {
            buscador(buscar);
          }}
        >
          Search
        </button>
      </div>
      <div className="contenedor">
        <div className="filtro">
          <div className="filter">Filter</div>
          <button
            onClick={() => {
              originalState();
            }}
            style={{ cursor: "pointer" }}
            className="clear_filters"
          >
            Clear Filters
          </button>
          <div className="box">
            <div className="box2">
              <Status status={Filtro} fondo={fondo} />
              <Species species={Filtro2} fondo={fondo2} />
              <Gender gender={Filtro3} fondo={fondo3} />
            </div>
          </div>
        </div>
        <div className="cards">
          {characters &&
            characters.map((elemento, indice) => {
              return <Personajes propiedades={characters && elemento} />;
            })}
        </div>
      </div>
      <div className="paginado">
        <button
          onClick={() => {
            pagina >= 2 && paginacion(pagina - 1);
          }}
        >
          Prev
        </button>
        {botones.map((ele, index) => {
          return (
            <button onClick={() => paginacion(ele)} key={index}>
              {ele}
            </button>
          );
        })}
        <button
          onClick={() => {
            pagina <= 41 && paginacion(pagina + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

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
