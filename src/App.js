import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Container>
      <Row>
        <Col sm={5}>ข้อมูลผู้ป่วย</Col>
        <Col sm={7}>Timeline</Col>
      </Row>
    </Container>
  );
}

export default App;
