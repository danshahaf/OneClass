import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './ClassesPage.css';

const ClassesPage = ({ mainContentHeight }) => {
  

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

export default ClassesPage;
