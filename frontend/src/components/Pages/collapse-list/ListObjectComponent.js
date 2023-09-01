import React from 'react';
import './ListObjectComponent.css'; // Import the CSS file

const ListObjectComponent = ({ object }) => {
  return (
    <div className="object-list-container">
            <div className="object-list-property">
              <span className="object-list-property-header">Name:</span>
              <span className="object-list-property-value">{object.name}</span>
            </div>
            <div className="object-list-property">
              <span className="object-list-property-header">Age:</span>
              <span className="object-list-property-value">{object.age}</span>
            </div>
    </div>
  );
};

export default ListObjectComponent;



/*

            <div className="ObjectItemBox">
              <span className="ObjectListLabels">Name:</span>
              <span className="ObjectListValues">{object.name}</span>
            </div>
            <div className="ObjectItemBox">
              <span className="ObjectListLabels">Age:</span>
              <span className="ObjectListValues">{object.age}</span>
            </div>
*/