import React, { useState } from 'react';

import ProfileDetails from './ProfileDetails';
import CollapseComponent from '../collapse-list/CollapseComponent';

import './Profile.css';

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
    <div className='profile-page' >
      <div className="split-container" >
        <div className="upper_half">
          {/* Content for the upper half goes here */}        
          <ProfileDetails> </ProfileDetails> 

        </div>
        <div className="lower_half">
          {/* Content for the lower half goes here */}
          <CollapseComponent horizontalAlign={false}> </CollapseComponent>

        </div>
      </div>
    </div>
  );
};

export default Profile;
