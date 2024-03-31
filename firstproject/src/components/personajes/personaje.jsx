import "./personajes.css"


const Personajes = ({ propiedades }) => {
  console.log(propiedades);
  return (
    <div className="tarjetas">
      <img src={propiedades.image} alt="RickSanchez" className="imagenes"/>
      <h2 className="name_personaje">{propiedades.name}</h2>
      <h3 className="last_location_personaje">Last Location</h3>
      <h2 className="location_personaje">{propiedades.location.name}</h2>
    </div>
  );
};

export default Personajes;
