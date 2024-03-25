const Status = ({ status, fondo }) => {
  return (
    <div className="cajas2">
      <button
        onClick={() => status("alive")}
        style={{ background: fondo === "alive" && "red", cursor: "pointer" }}
        className="boton_filtro"
      >
        Alive
      </button>
      <button
        onClick={() => status("dead")}
        style={{ background: fondo === "dead" && "red", cursor: "pointer" }}
        className="boton_filtro"
      >
        Dead
      </button>
      <button
        onClick={() => status("unknown")}
        style={{ background: fondo === "unknown" && "red", cursor: "pointer" }}
        className="boton_filtro"
      >
        Unknown
      </button>
    </div>
  );
};

export default Status;
