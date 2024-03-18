const Personajes = ({ propiedades }) => {
  console.log(propiedades);
  return (
    <div>
      <h2>{propiedades.name}</h2>
      <h2>{propiedades.status}</h2>
      <img src={propiedades.image} alt="RickSanchez" />
    </div>
  );
};

export default Personajes;
