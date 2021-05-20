import React from 'react';
import ReactDOM from 'react-dom';

class patientCard extends React.Component {
    render() {
        return (
            <div>
                <select>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                </select>
                <label>
                    อายุ:
                      <input
                        name="อายุ"
                        type="number"
                    />
                </label>
                <label>
                    เพศ:
                     <input
                           type="text"
                    />
                </label>
            </div>
        );
    }
}

export default patientCard;