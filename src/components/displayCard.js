import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
function DisplayCard({ patientData, timeLineData, onDelete }) {

    function dateFormat(timeLineData) {
        return timeLineData && timeLineData.slice(0, 10);
    }

    const uniqueSumDate = timeLineData && timeLineData
        .map((item) => dateFormat(item.datetime))
        .filter((v, i, s) => s.indexOf(v) === i);

    let filtered = {}

    for (let i = 0; i < uniqueSumDate.length; i++) {
        const arr = [];
        timeLineData.forEach((time, index) => {
            if (dateFormat(time.datetime) == uniqueSumDate[i]) {
                arr.push(time)
                filtered[dateFormat(time.datetime)] = arr;
            }
        })
    }
    const handleDelete = (id) => {
        onDelete(id);
    };
    return (
        <div class="app_container">
            <h1 class="text-center" style={{ color: "rgb(255, 193, 7)", padding: "4% 0px 1% 0px" }}>Timeline</h1>
            <div class="dis_patient_con">
                <h4 class="text-center">ผู้ป่วย{patientData[0] && [...patientData].pop().gender} อายุ {patientData[0] && [...patientData].pop().age} ปี</h4>
                <p style={{fontSize: "14px", fontWeight: "bold" }} class="text-center">อาชีพ {patientData[0] && [...patientData].pop().career}</p>
            </div>
            {
                Object.keys(filtered).map((date, i) => {
                    return (
                        <ShowTimeline key={i} header={date} items={filtered[date]} cbDelete={handleDelete} data={filtered} />
                    );
                })
            }
        </div >
    );
}

function ShowTimeline({ header, items, cbDelete, data }) {


    function onDelete(id) {
        cbDelete(id);
        const delLi = document.getElementById(id);
        delLi.className = 'fade-out-right';
        

    }
    const date = new Date(header).toLocaleDateString();
    return (
        <div>
            <ul class="timeline">
                <li class="event fade-in" data-date={date}>
                    <li class="fade-in">
                        {items &&
                            items.map((item, index) => {
                                return (
                                    <li class="fade-in detailed_cointainer right" id={item.id} key={index} >
                                        <div><label style={{color: "rgb(255, 193, 7)"}}>{item.datetime.slice(11, 16)}</label> {item.detail}</div>  <button onClick={(e) => onDelete(item.id)} style={{background:"transparent",border:"none",color:"white"}}>x</button>
                                    </li>
                                );
                            })}
                    </li>
                </li>
            </ul>
        </div>
    );
}


export default DisplayCard;