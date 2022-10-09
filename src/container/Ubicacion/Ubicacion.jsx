import Map from './Map'

const Ubicacion = () => {
  return (
    <>
      <h2>Ubicacion</h2>
      <div>
        <p>
          Nos encontramos en el local de Floreria Camelia, en la esquina de
          Av.Burgues y Sorata, frente al Cementerio del Norte
        </p>
        <div className='row mapa'>
          <Map className='col' />
        </div>
      </div>

    </>
  );
};
export default Ubicacion;
