import React, { useState } from 'react';
import './Profile.css';
import schoolLogo from '../../attachments/bu-logo.png'; // Adjust path to your actual logo

const Profile = () => {
    const [activeSection, setActiveSection] = useState(""); // To manage which section is expanded
  
    const toggleSection = (section) => {
        if (activeSection === section) {
            setActiveSection("");
        } else {
            setActiveSection(section);
        }
    };

    return (
        <div className='profile-page'>
            <div className='profile-header'>
                <img src="../../attachments/profilephoto.jpeg" alt="Profile Picture" className="profile-pic"/>
                <div className="profile-details">
                    <h1>John Doe</h1>
                    <p>john.doe@school.edu</p>
                    <div className="school-info">
                        <img src={schoolLogo} alt="School Logo" className="school-logo"/>
                        <p>School Name</p>
                    </div>
                    <a href="path-to-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
            <div className='profile-content'>
                <div className={`collapsible ${activeSection === 'classes' ? 'active' : ''}`} onClick={() => toggleSection('classes')}>
                    <h2>Classes</h2>
                    {/* Timeline for classes when expanded */}
                </div>
                <div className={`collapsible ${activeSection === 'work' ? 'active' : ''}`} onClick={() => toggleSection('work')}>
                    <h2>Work Experience / Career</h2>
                    {/* Timeline for work experience when expanded */}
                </div>
                <div className={`collapsible ${activeSection === 'extra' ? 'active' : ''}`} onClick={() => toggleSection('extra')}>
                    <h2>Extracurriculars</h2>
                    {/* Timeline for extracurriculars when expanded */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
