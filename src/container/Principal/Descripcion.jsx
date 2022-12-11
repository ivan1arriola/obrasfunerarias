const Descripcion = () => {
    const style = {
    };
  const logotipo = require("../../img/favicon.png");
  return (
    <div className="descripcion" style={style}>
          <img className="w-25 rounded img-responsive mb-5" src={logotipo} alt="logotipo" />
      <p>
        Somos una empresa dedicada a la elaboración de obras funerarias, con más
        de 30 años de experiencia en el mercado.
      </p>
    </div>
  );
};

export default Descripcion;


