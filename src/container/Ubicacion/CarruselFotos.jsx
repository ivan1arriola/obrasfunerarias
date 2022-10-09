import Carousel from "react-bootstrap/Carousel";

const insertarFoto = (i) => {
  return (
    <Carousel.Item as="div" key={i.toString()} className="carrusel" >
      <img className="" src={i} alt="Foto" />
    </Carousel.Item>
  );
};

const CarruselFotos = ({ fotos }) => {
  return (<>

    <Carousel>
      {fotos.map(insertarFoto)}
    </Carousel>


  </>)
}
export default CarruselFotos;
