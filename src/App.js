import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import PatientCard from './components/patientCard';
import DisplayCard from './components/displayCard';
function App() {
  return (
    <Container>
      <Row>
        <Col sm={5}>ข้อมูลผู้ป่วย 
          <PatientCard /> input 1 1 time Onchange
          
          {/* <PatientCard /> input 2 Dynamic */}
        </Col>
        <Col sm={7}>Timeline
          <DisplayCard /> output
        </Col>
      </Row>
    </Container>
  );
}

export default App;
