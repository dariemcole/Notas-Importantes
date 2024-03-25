const Gender = ({ gender, fondo3 }) => {
  return (
    <div className="cajas2">
      <button onClick={() => gender("female")} className="boton_filtro">
        Female
      </button>
      <button onClick={() => gender("male")} className="boton_filtro">
        Male
      </button>
      <button onClick={() => gender("genderless")} className="boton_filtro">
        Genderless
      </button>
    </div>
  );
};

export default Gender;
