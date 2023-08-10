import React from "react";
import CollapseListDisplay from "./profile_collapse/components/CollapseListDisplay";
import "./CollapseComp.css";

import { getJobs, getClasses, getExtracurriculars } from "../../../rest/restful";

const CollapseComp = () => {
  const classes = getClasses();
  const jobs = getJobs();
  const extracurriculars = getExtracurriculars();

  return (
    <div className="lower-half-container">
      <div className="child-container">
        <CollapseListDisplay sampleObjects={classes} title="Classes"> </CollapseListDisplay>
      </div>
      <div className="child-container">
        <CollapseListDisplay sampleObjects={jobs} title="Work Experience"> </CollapseListDisplay>
      </div>
      <div className="child-container">
        <CollapseListDisplay sampleObjects={extracurriculars} title="Extracurriculars"> </CollapseListDisplay>
      </div>
    </div>
  );
};

export default CollapseComp;
