const Species = ({ species, fondo }) => {
  return (
    <div className="cajas2">
      <button
        onClick={() => species("human")}
        style={{ background: fondo === "human" && "red", cursor: "pointer" }}
        className="boton_filtro"
      >
        Human
      </button>
      <button
        onClick={() => species("alien")}
        style={{ background: fondo === "alien" && "red", cursor: "pointer" }}
        className="boton_filtro"
      >
        Alien
      </button>
      <button
        onClick={() => species("animal")}
        style={{ background: fondo === "animal" && "red", cursor: "pointer" }}
        className="boton_filtro"
      >
        Animal
      </button>
    </div>
  );
};

export default Species;
