import React from "react";
// TODO: make restful api to actually call these functions 

// TODO: implement the db connect functionality here
export const connectDB = () => {
    return 
};

// TODO: must implement SingleObject to fully display classes, jobs and extras
// this is a simple data object used for testing purposes, 
const sampleLs = [
    {
        name: "Hayden",
        age: 21
    },
    {
        name: "Shahaf",
        age: 22
    },
    {
        name: "Jackson",
        age: 35
    },
    {
        name: "Martin",
        age: 25
    }
];


// TODO: implement this query --> probably should take a user id in order to locate the classes
export const getClasses = () => {
    // this function is called within the CollapseComp.js in order to get the classes 
    // a student is enrolled in or has been enrolled in
    return [sampleLs[0],sampleLs[3]];

};

// TODO: implement this query --> probably should take a user id in order to locate the classes
export const getJobs = () => {
    // this function is called within the CollapseComp.js in order to get the jobs 
    // a student has had
    return [sampleLs[2],sampleLs[0]];
};

// TODO: implement this query --> probably should take a user id in order to locate the Extracurriculars
export const getExtracurriculars = () => {
    // this function is called within the CollapseComp.js in order to get the Extracurriculars 
    // a student is taking or has taken
    return [sampleLs[0],sampleLs[3],sampleLs[1]];
};