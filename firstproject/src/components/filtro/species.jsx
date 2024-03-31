import { useState } from "react";

const Species = ({ species, fondo }) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="cajas2">
        <div>
      <button className="accordion" onClick={toggleAccordion} style={{ cursor: "pointer" }}>Species</button>
      {isOpen && (
        <div>
        <button
          onClick={() => species("human")}
          style={{ background: fondo === "human" && "rgb(13, 110, 253)", cursor: "pointer" }}
          className="boton_filtro"
        >
          Human
        </button>
        <button
          onClick={() => species("alien")}
          style={{ background: fondo === "alien" && "rgb(13, 110, 253)", cursor: "pointer" }}
          className="boton_filtro"
        >
          Alien
        </button>
        <button
          onClick={() => species("animal")}
          style={{ background: fondo === "animal" && "rgb(13, 110, 253)", cursor: "pointer" }}
          className="boton_filtro"
        >
          Animal
        </button>
      </div>
      )}
      </div>
      </div>
    );
  };
  
  export default Species;
  