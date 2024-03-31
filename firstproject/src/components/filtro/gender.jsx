import { useState } from "react";

const Gender = ({ gender, fondo }) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="cajas2">
        <div>
      <button className="accordion" onClick={toggleAccordion} style={{ cursor: "pointer" }}>Gender</button>
      {isOpen && (
        <div>
        <button onClick={() => gender("female")}
          style={{ background: fondo === "female" && "rgb(13, 110, 253)", cursor: "pointer" }}
          className="boton_filtro">
          Female
        </button>
        <button onClick={() => gender("male")}
          style={{ background: fondo === "male" && "rgb(13, 110, 253)", cursor: "pointer" }}
          className="boton_filtro">
          Male
        </button>
        <button onClick={() => gender("genderless")}
          style={{ background: fondo === "genderless" && "rgb(13, 110, 253)", cursor: "pointer" }}
          className="boton_filtro">
          Genderless
        </button>
      </div>
      )}
      </div>
      </div>
    );
  };
  
  export default Gender;
  