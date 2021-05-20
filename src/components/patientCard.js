import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PatientCard() {

    const [patientData, setPatientData] = useState({});

    function handleOnChange({ target }) {
        const data = patientData;
        setPatientData({ ...data,[target.name]: target.value });

    }
    return (
        <div>
            <select name="gender" onChange={handleOnChange}>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
            </select>
            <label>
                อายุ:
                <input
                    name="age"
                    onChange={handleOnChange}
                    type="number"
                />
            </label>
            <label>
                อาชีพ:
                <input
                    name="career"
                    onChange={handleOnChange}
                    type="text"
                />
            </label>
        </div>
    );

}

export default PatientCard;