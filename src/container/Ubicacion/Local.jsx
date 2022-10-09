import Card from 'react-bootstrap/Card';
import Map from './Map'
import CardGroup from 'react-bootstrap/CardGroup';

import CarruselFotos from './CarruselFotos';


const Local = () => {
  const fotos1 = [
    require("../../img/img (1).png"),
    require("../../img/img (2).png"),
    require("../../img/img (3).png"),
    require("../../img/img (4).png"),
    require("../../img/img (5).png"),
    require("../../img/img (6).png"),
    require("../../img/img (8).png"),
    require("../../img/img (9).png"),
    require("../../img/img (10).png"),
  ];


  return (
    <>
      <CardGroup>

        <Card bg="black" text="light">
          <Card.Body>
            <Card.Title as="h2">Horario</Card.Title>
            <Card.Text>
              Nuestro horario es de <br /> 08:00 a 17:00
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="black" text="light">
          <Card.Body>
            <Card.Title as="h2">Dirección</Card.Title>

            <Card.Text>Nos encontramos en el local de Floreria Camelia</Card.Text>
            <Card.Text>Av. Burgues 4298, Montevideo, Uruguay.</Card.Text>
            <Card.Text>En la esquina de Burgues y Sorata. </Card.Text>
            <Card.Text>Frente al Cementerio del Norte</Card.Text>

          </Card.Body>
        </Card>

      </CardGroup>

      <CardGroup>

        <Card bg="black" text="light" id="ubicacion">
          <Card.Body >
            <Card.Title as="h2" >Ubicación</Card.Title>
            <Map />
          </Card.Body>
        </Card>

        <Card as="div" bg="black" text="light" className="" id="fotos">
          <Card.Body>
            <Card.Title as="h2">Placas Conmemorativas</Card.Title>
            <CarruselFotos fotos={fotos1} />
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};
export default Local;
