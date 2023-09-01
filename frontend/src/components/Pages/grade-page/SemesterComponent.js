import React from "react";
import './SemesterComponent.css';
import Semester from "../../types/semester";
const SemesterComponent = ({ semester }) => {

    return (
        <div className = 'semester'>
            <h4 className = 'id-term'>
                {semester.semesterTitle} {semester.studentYear}
            </h4>
            
            <div className = "class-list">
                <div className = "class">
                    <div className = 'titles'>
                        <h4>  </h4>
                        <p> Deep Learning </p>
                    </div>
                    
                </div>
                <div className='class'>
                    <div className = 'titles'>
                        <h4> CS599 </h4>
                        <p> Atificial General Intelligence </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassList;
