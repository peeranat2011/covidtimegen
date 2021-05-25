import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
let timeline = [];
let patientArr = [];
function PatientCard({ returnPatientData, returnTimeLineData }) {

    const [patientData, setPatientData] = useState({});
    const [timeLineData, setTimeLineData] = useState([]);

    function handleOnChange({ target }) {
        const data = patientData;
        setPatientData({ ...data, [target.name]: target.value });

    }

    function addItem({ target }) {
        let genId = new Date().getTime();
        const timeData = timeLineData;
        setTimeLineData({ ...timeData, id: genId, [target.name]: target.value });

    }

    function subMitData() {
        patientArr.push(patientData)
        timeline.push(timeLineData);
        timeline.sort((a, b) => (a.datetime > b.datetime) ? 1 : ((b.datetime > a.datetime) ? -1 : 0))
        returnPatientData('patient', patientArr);
        returnTimeLineData('timeline', timeline);
    }


    return (

        <div>
            <div class="col-12">

                <div class="row input_container">
                    <div class="col-12" style={{ height: "3rem" }}>
                        <label className="patient_header">ข้อมูลผู้ป่วย</label></div>

                    <div class="col-sm-6 justify-content-center" >
                        <label>เพศ</label>
                        <select name="gender" onChange={handleOnChange} class="gender_option">
                            <option value=""></option>
                            <option value="ชาย">ชาย</option>
                            <option value="หญิง">หญิง</option>
                        </select></div>
                    <div class="col-sm-6 justify-content-center">
                        <label>
                            อายุ</label>
                        <input
                            name="age"
                            type="number"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div class="col-12" style={{
                        paddingTop: "3%",
                        paddingBottom: "9%"
                    }}>
                        <label>อาชีพ</label>
                        <input
                            name="career"
                            type="text"
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
            </div>

            <div class="col-12" style={{ paddingTop: "7%" }}>

                <div class="row input_container">
                    <div class="col-12" style={{ height: "3rem" }}>
                        <label className="patient_header">ข้อมูลไทม์ไลน์</label></div>

                    <div class="col-12">
                        <label >
                            วันเวลา
                            </label>
                        <input
                            name="datetime"
                            type="datetime-local"
                            onChange={addItem}
                            required="true"
                        />

                    </div>
                    <div class="col-12" style={{ paddingTop: "4%" }}>
                        <label>
                            รายละเอียด
                            </label>
                        <input
                            class="input_detailed"
                            name="detail"
                            onChange={addItem}
                            required="true"
                        />

                    </div>
                    <div class="col-12" style={{ paddingTop: "4%", paddingBottom: "4%" }}>
                        <button class="adding_button" onClick={subMitData}>+ เพิ่มข้อมูล</button></div>

                </div>
            </div>
        </div>

    );

}

export default PatientCard;