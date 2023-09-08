import React from 'react';
import './ObjectList.css'; // Import the CSS file

import ListObjectComponent from './ListObjectComponent';


// ListObjectComponent will cause error if the type of the list objects is not a custom type with a encodedObject initialized.
/* example 
class Class {
    constructor(classCode, className) {
        this.classCode = classCode;
        this.className = className;
        this.encodedObject = this.encodeObject();
    }

    encodeObject() {
        let encoded = [];
        encoded.push({
            'name': 'semesterTitle', 
            'value': this.semesterTitle
        });
        encoded.push({
            'name': 'classList', 
            'value': this.classList
        });
        encoded.push({
            'name': 'studentYear', 
            'value': this.studentYear
        });
    }
}
}
*/
const ObjectList = ({ objects, listTitle, horizontalAlign, 
  background_color, text_color, 
  setSelectedClass }) => 
  {
    if (listTitle == undefined) {
      listTitle = "Sample List";
    }
    if (objects == undefined && objects.length <= 0) {
      return;
    }
    
    return (
      <div className="object-list">
          { 
        (horizontalAlign) &&
          <div className="horizontal-object-list-container">
            <h2 className="horizontal-object-list-header"> {listTitle} </h2>
            <ul className="horizontal-object-list-list">
              {objects.map((_object, index) => (
                <li key={index}>
                    <ListObjectComponent 
                      object={_object} 
                      horizontalAlign={true} 
                      background_color={background_color}
                      text_color={text_color}

                      setSelectedClass={setSelectedClass}
                      object_id={index}

                      > 
                    </ListObjectComponent>
                </li>
              ))}
            </ul>
          </div>
      } 
    
      { 
        (!horizontalAlign) &&
          <div>
            <h2 className="vertical-object-list-header"> {listTitle} </h2>
            <ul className="vertical-object-list-list">
              {objects.map((_object, index) => (
                <li key={index} >
                  <ListObjectComponent 
                    object={_object} 
                    horizontalAlign={false}
                    background_color={background_color}
                    text_color={text_color}

                    setSelectedClass={setSelectedClass}
                    object_id={index}
                    
                    >
                  </ListObjectComponent>

                </li>
              ))}
            </ul>
          </div>
      } 
      </div>
    );
  };  

export default ObjectList;
