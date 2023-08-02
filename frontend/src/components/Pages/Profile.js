import React, { useState } from 'react';

import ProfileDetails from './ProfileDetails';
import CollapseComp from './CollapseComp';

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
    <view>
    <div className="split-container">
      <div className="upper_half">
        {/* Content for the upper half goes here */}        
        <ProfileDetails> </ProfileDetails> 

      </div>
      <div className="lower_half">
        {/* Content for the lower half goes here */}
        <CollapseComp> </CollapseComp>

      </div>
    </div>
    </view>
  );
};

export default Profile;
