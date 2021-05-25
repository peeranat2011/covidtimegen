import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import PatientCard from './components/patientCard';
import DisplayCard from './components/displayCard';
function App() {
  const [inputData, setInputData] = useState();
  const [storePatientInfo, setStorePatientInfo] = useState({});
  const [storeTimeLineInfo, setTimeLineInfo] = useState([]);


  function getPatientData(key, value) {
    const data = inputData;
    setInputData({ ...data });
    setStorePatientInfo(value);
  }

  function getTimeLinetData(key, value) {
    const data = inputData;
    setInputData({ ...data });
    setTimeLineInfo(value);
  }


  const callbackDelete = (id) => {
    const tempArray = storeTimeLineInfo;
    tempArray.splice(
      tempArray.findIndex((v) => v.id === id),
      1
    );
    setTimeLineInfo(tempArray);
  };

  return (
      <div class="container-fluid app_container">
        <label class="topic">COVID Timeline Generator</label>
        <div class="row">
          <div class="col-sm-5">
            <PatientCard returnPatientData={getPatientData} returnTimeLineData={getTimeLinetData} />

          </div>
          <div div class="col-sm-7 app_container" style={{ border: "1px solid #ffc107"}}>
            <DisplayCard patientData={storePatientInfo} timeLineData={storeTimeLineInfo} onDelete={callbackDelete} />
          </div>
        </div>
      </div>
  );
}

export default App;
