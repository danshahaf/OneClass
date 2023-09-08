import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './Classes.css';

import ObjectList from './collapse-list/ObjectList';
import ClassObj from '../types/classes';
import Semester from '../types/semester';


import Class from './Class';
const Classes = ({ mainContentHeight, changePage }) => {
  
    const tc1 = new ClassObj("code","thing2","thing3");
    const tc2 = new ClassObj("code2","thing5","thi23443ng3");
    const tc3 = new ClassObj("code3","thing6","thin234g3");
    const tc4 = new ClassObj("sdf,jkl,sdf",
    "dffg",
    "th33434ing3");
    const classes = [
      tc1, tc2,tc3,tc4
    ];
  
    const ts1 = new Semester("fall","20243","junior");  
    const ts2 = new Semester("spring","2013","freshman");
    const semesters = [ts1,ts2];


    const [selectedClass, setSelectedClass] = useState(-1);


    if (changePage == undefined) {
        changePage = (x) => { return x; };
    }
    console.log(selectedClass)

    return (
        <div className='MainPage' onClick={() => console.log(selectedClass)}>
            { selectedClass == -1 &&
                <div>
                    <ObjectList 
                        objects={classes} 
                        listTitle={ts1.semesterTitle} 
                        horizontalAlign={true} 
                        background_color={'#FFA500'}
                        text_color={'#FFFFFF'}
                        setSelectedClass={setSelectedClass}
                        />
                    <div>
                        Vertical test
                    </div>
                    <ObjectList 
                        objects={classes} 
                        listTitle={ts1.semesterTitle} 
                        horizontalAlign={false} 
                        background_color={'#FFA500'} 
                        text_color={'#FFFFFF'}
                        setSelectedClass={setSelectedClass}
                    />
                </div>
            }
            {selectedClass != -1 &&
                <Class 
                    class_id={selectedClass}>
                </Class>
            }

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

export default Classes;
