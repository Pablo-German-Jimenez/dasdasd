import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import SalemQuebrao from '../assets/salemquebrao.bmp'
import DoctoresPet from '../assets/doctorespets.bmp'
import SalemPolenta from '../assets/salempolenta.bmp'
import BagheeraBella from '../assets/bagheerabella.bmp'

function FormCitas() {

  
  return (
    <>
      <Navbar expand="lg" className="d-flex shadow-lg p-3 mb-5 bg-body rounded border border-3 border-success-subtle">
        <Container>
          <Navbar.Brand  href="#home">🐈‍⬛Veterinaria Bagheera🐾</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">💫Menu🐾</Nav.Link>
              <Nav.Link href="#link">🐾Consultas Online📲💕</Nav.Link>
              <NavDropdown
                title="Para nuestros peluditos💫"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Pilchita facheraa
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Gorrito cheto
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Snacks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Juguetitos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card className="text-center container mt-4 rounded-4 shadow-lg p-3 mb-5 bg-body rounded border border-3 border-success-subtle">
        <Card.Body>
          <Card.Title>🐶Veterinaria Online: Atención profesional para tu mascota, estes donde estés!🐱🐾</Card.Title>
          <Card.Subtitle className="mb-2 b-2 text-success">
            📲Consulta Veterinaria online 24/7💕
          </Card.Subtitle>
          <Card.Text className="fs-5 text-danger">
            Sin salir de casa, sin estrés para tu mascota, con resultados inmediatos.
          </Card.Text>
          <div className="d-flex justify-content-center obj-align-center  flex-wrap gap-3 ">
         <Col xs={8} md={4}>
         <Image id="bagheera-bella" src={BagheeraBella} roundedCircle/>
         </Col>
         <Col xs={8} md={4}>
          <Image id="salem-polenta" src={SalemPolenta} roundedCircle />
        </Col>
         <Col xs={8} md={4}>
          <Image  id="DrPichichu" src={DoctoresPet} roundedCircle  />
        </Col>
          <Col xs={8} md={4}>
          <Image id="salem-quebrao" src={SalemQuebrao} roundedCircle />
        </Col>
          </div>
        </Card.Body>
      </Card>
      <Form className="container shadow-lg p-3 mb-5 bg-body rounded-3 border border-3 border-success-subtle">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tu Email </Form.Label>
          <Form.Control type="email" placeholder="Tu Email!" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="celNumber">
          <Form.Label>Cel para contactarte</Form.Label>
          <Form.Control type="number" placeholder="Ingresá tu numero de cel!" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="celNumber">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="number" placeholder="Iremos en caso de ser necesario" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="celNumber">
          <Form.Label>Edad,peso,síntomas</Form.Label>
          <Form.Control type="number" placeholder="Excluyentes, ingresar estimativos" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="celNumber">
          <Form.Label>Cel para contactarte</Form.Label>
          <Form.Control type="number" placeholder="Ingresá tu numero de cel!" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-3">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormCitas;
