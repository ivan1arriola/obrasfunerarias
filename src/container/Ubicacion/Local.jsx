import Card from 'react-bootstrap/Card';
import Map from './Map'
import CardGroup from 'react-bootstrap/CardGroup';
import { SocialIcon } from 'react-social-icons';
import CarruselFotos from './CarruselFotos';


const Local = () => {
  const plaquitas = [
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

  const tubulares = [
    require("../../img/tubulares/tubular (1).jpg"),
    require("../../img/tubulares/tubular (2).jpeg"),
    require("../../img/tubulares/tubular (3).jpeg"),
    require("../../img/tubulares/tubular (4).jpeg"),
    require("../../img/tubulares/tubular (5).jpeg"),
    require("../../img/tubulares/tubular (6).jpeg"),
    require("../../img/tubulares/tubular (7).jpeg"),
    require("../../img/tubulares/tubular (8).jpeg"),
  ];
  
  const WhatsApp = <SocialIcon className='whatsApp-icon' fgColor="white" label bgColor="green" url="https://api.whatsapp.com/send/?phone=59898863473" target="_blank" />;

  return (
    <>
      <CardGroup>

        <Card bg="black" text="light">
          <Card.Body>
            <Card.Title as="h2" className=" bg-primary">Contactanos</Card.Title>
            <Card.Text>
              <p className="text-center"> Camelia Obras Funerarias </p>
              <p className="text-center"> {WhatsApp} 098-863-473 / 2219-4540 </p>

            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="black" text="light">
          <Card.Body>
            <Card.Title as="h2" className=" bg-primary">Horario</Card.Title>
            <Card.Text>
              <p>Todos los días de 8:00 a 17:00</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="black" text="light">
          <Card.Body>
            <Card.Title as="h2" className=" bg-primary">Ubicación</Card.Title>
            <Card.Text>
              <p>Avenida Burgués 4298, esquina Sorata. Montevideo, Uruguay</p>
            </Card.Text>
          </Card.Body>
        </Card>

      </CardGroup>
      <CardGroup>

        <Card as="div" bg="black" text="light" className="" id="fotos">
          <Card.Body>
            <Card.Title as="h2" className=" bg-primary">Placas Conmemorativas</Card.Title>
            <CarruselFotos fotos={plaquitas} />
          </Card.Body>
        </Card>

        <Card as="div" bg="black" text="light" id="fotos">
          <Card.Body>
            <Card.Title as="h2" className="bg-primary" >Trabajos en Tubulares</Card.Title>
            <CarruselFotos fotos={tubulares} />
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


      </CardGroup>
    </>
  );
};
export default Local;
