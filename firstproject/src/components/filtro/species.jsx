const Species = ({ status }) => {
  return (
    <div>
      <button onClick={status}>Human</button>
      <button>Alien</button>
      <button>Animal</button>
    </div>
  );
};

export default Species;
