import {Button, Form, Container } from 'react-bootstrap';


const Contacto = () => {
  return (
    <Container className="pt-5">
    <h1 className="mb-4 d-flex justify-content-center">Cuentanos, ¿en que te podemos ayudar?</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className='d-flex justify-content-center'>Correo:</Form.Label>
            <Form.Control type="email" placeholder="Correo" />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label className='d-flex justify-content-center'>Descripción:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <div className='text-center'>
          <Button type="submit" className='btn-lg btn-pink'>
            Enviar
          </Button>
          </div>
        </Form>
    </Container>
      );
    }
export default Contacto;