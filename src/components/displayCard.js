import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function DisplayCard({ patientData }) {

    return (
        <div>
            <h1>ผู้ป่วย{patientData && patientData.gender}</h1>
            <h1>อายุ{patientData && patientData.age}</h1>
            <h1>อาชีพ{patientData && patientData.career}</h1>
        </div>
    );
}

export default DisplayCard;