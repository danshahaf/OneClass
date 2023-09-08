import { Button } from "@mui/material";
import "./CollapseComponent.css";
import ObjectList from "./ObjectList";
import Reac, { useState } from "react";
import CollapseListComponent from "./CollapseListComponent"

import ClassObj from "../../types/classes";
import Semester from "../../types/semester";
const CollapseComponent = ({ horizontalAlign }) => {
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

  return (
    <div className="collapse-component">
      { 
        (horizontalAlign) &&
          <div className="horizontal-aligned-container">
            <CollapseListComponent sampleObjects={classes} listTitle={"Classes"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={semesters} listTitle={"Semesters"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={classes} listTitle={"Classes"}> </CollapseListComponent>
          </div>
      } 
    
      { 
        (!horizontalAlign) &&
          <div className="vertical-aligned-container">
            <CollapseListComponent sampleObjects={classes} listTitle={"Classes"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={semesters} listTitle={"Classes"}> </CollapseListComponent>
            <CollapseListComponent sampleObjects={classes} listTitle={"Classes"}> </CollapseListComponent>
          </div>
      } 
    </div>
  );
};

export default CollapseComponent;
