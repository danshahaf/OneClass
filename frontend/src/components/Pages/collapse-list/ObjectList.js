import React from 'react';
import './ObjectList.css'; // Import the CSS file

import ListObjectComponent from './ListObjectComponent';

const ObjectList = ({ objects, listTitle }) => {
  if (listTitle == undefined) {
    listTitle = "Sample List";
  }
  return (
    <div className="object-list">
      <h2 className="object-list-header"> {listTitle} </h2>
      <ul className="object-list-list">
        {objects.map((_object, index) => (
          <li key={index} >
            <ListObjectComponent object={_object}> </ListObjectComponent>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;
