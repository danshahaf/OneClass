import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './Grades.css';
import Class from '../../types/classes';
import Semester from '../../types/semester';
const Grades = ({ mainContentHeight }) => {
  
    const cs523 = new Class("CS523", "Deep Learning");
    const cs599 = new Class("CS599", "Artifical General Intelligence");

    const fall2024 = new Semester("Fall 2024", "Junior Year", [cs523,cs599]);

    const cs440 = new Class("cs440", "Introduction to Artifical Intelligence");
    const cs332= new Class("cs332", "Theory of Computation");
    const cs506 = new Class("cs506", "Foundations of Data Science");
    const spring2024 = new Semester("Spring 2024","Sophomore Year", [cs440, cs332, cs506])

    return (
        <div className='MainPage'>
        <div className = 'semester'>
                <h4 className = 'id-term'>
                    Fall 2024 (Junior Year)
                </h4>
                <div className = "class-list">
                    <div className = "class">
                        <div className = 'titles'>
                            <h4>CS523</h4>
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

            <div className = 'semester'>
                <h4 className = 'id-term'>
                    Spring 2024 (Sophomore Year)
                </h4>
                <div className = "class-list">
                    <div className = "class">
                        <div className = 'titles'>
                            <h4>CS440</h4>
                            <p> Introduction to Artificial Intelligence </p>
                        </div>
                    </div>

                    <div className='class'>
                        <div className = 'titles'>
                            <h4> CS332 </h4>
                            <p> Theory of Computation </p>
                        </div>
                    </div>

                    <div className='class'>
                        <div className = 'titles'>
                            <h4> CS506 </h4>
                            <p> Foundations of Data Science </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grades;
