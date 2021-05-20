import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import PatientCard from './components/patientCard';
import DisplayCard from './components/displayCard';
function App() {
  const [inputData, setInputData] = useState();
  const [storePatientInfo, setStorePatientInfo] = useState();

  function getData(key, value) {
    const data = inputData;
    setInputData({ ...data, [key]: value });
    if (key == 'patient') {
      setStorePatientInfo(value);
    }
  }


  return (
    <Container>
      <Row>
        <Col sm={5}>ข้อมูลผู้ป่วย
          <PatientCard returnData={getData} />
          {/* <PatientCard /> input 2 Dynamic */}
        </Col>
        <Col sm={7}>Timeline
          <DisplayCard patientData={storePatientInfo} /> output
        </Col>
      </Row>
    </Container>
  );
}

export default App;
