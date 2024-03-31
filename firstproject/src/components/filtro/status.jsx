import { useState } from "react";

const Status = ({ status, fondo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cajas2">
      <div>
      <button className="accordion" onClick={toggleAccordion} style={{ cursor: "pointer" }}>Status</button>
      {isOpen && (
        <div>
      <button
        onClick={() => status("alive")}
        style={{ background: fondo === "alive" && "rgb(13, 110, 253)", cursor: "pointer" }}
        className="boton_filtro"
      >
        Alive
      </button>
      <button
        onClick={() => status("dead")}
        style={{ background: fondo === "dead" && "rgb(13, 110, 253)", cursor: "pointer" }}
        className="boton_filtro"
      >
        Dead
      </button>
      <button
        onClick={() => status("unknown")}
        style={{ background: fondo === "unknown" && "rgb(13, 110, 253)", cursor: "pointer" }}
        className="boton_filtro"
      >
        Unknown
      </button>
        </div>
      )}
    </div>
      </div>
  );
};

export default Status;