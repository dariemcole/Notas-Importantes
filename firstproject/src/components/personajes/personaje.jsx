import "./personaje.css";

const Personajes = ({ propiedades }) => {
  console.log(propiedades);
  return (
    <div className="card">
      <img src={propiedades.image} alt="RickSanchez" className="imagen" />
      <h2>{propiedades.name}</h2>
      <h2>{propiedades.status}</h2>
    </div>
  );
};

export default Personajes;
