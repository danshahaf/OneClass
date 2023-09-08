import React from 'react';
import './ListObjectComponent.css'; // Import the CSS file
import { selectClasses } from '@mui/material';

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
const ListObjectComponent = ({ object, object_id, horizontalAlign, background_color, text_color, 
  setSelectedClass }) => {
  if (background_color == undefined) {
    background_color = '#FFA500';
  }
  if (text_color == undefined) {
    text_color = '#FFFFFF';
  }

  // if (horizontalAlign) {
  //   var elems = document.getElementsByClassName('horizontal-property-container');
  //   for (var i = 0; i < elems.length; i++) {
  //     elems[i].style.backgroundColor = background_color;
  //     elems[i].style.color = text_color;
  //   }
  // } else {
  //   var elems = document.getElementsByClassName('vertical-property-container')
  //   for (var i = 0; i < elems.length; i++) {
  //     elems[i].style.backgroundColor = background_color;
  //     elems[i].style.color = text_color;
  //   }
  // }

  if (setSelectedClass == undefined) {
    setSelectedClass = (x) => console.log('hello');
    object_id = -1;
  }

  object_id = -1;

  console.log("List component object_id:  ", object_id)
  return (
    <div className='list-object-component' > 
      { 
          (horizontalAlign) &&
          <div className="horizontal-property-container">
                <ul className="object-list-properties" onClick={setSelectedClass(object_id)}>
                  {object.encodedObject.map((_object, index) => (
                    <li key={index} className='object-list-property'>
                      <span className="object-list-property-header">{_object['value']}</span>
                    </li>
                  ))}
                </ul>
            </div>
          }
          { 
            (!horizontalAlign) &&
              <div className="vertical-property-container" >
                  <ul className="object-list-properties">
                    {object.encodedObject.map((_object, index) => (
                      <li key={index} className='object-list-property'>
                        <span className="object-list-property-header">{_object['name']}</span>
                        <span className="object-list-property-value">{_object['value']}</span>
                      </li>
                    ))}
                  </ul>            
              </div>
          }
    </div>

  );
};

export default ListObjectComponent;

