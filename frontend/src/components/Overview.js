import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';


const Overview = () => {
    const [showForm, setShowForm] = useState(false);
    const [universityName, setUniversityName] = useState('');
    const [emailDomain, setEmailDomain] = useState('');
    const [universities, setUniversities] = useState([]);
    const [editingUniversityId, setEditingUniversityId] = useState(null);


    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                const response = await fetch('http://localhost:1707/api/registration/present-all-universities');
                const data = await response.json();
                setUniversities(data);
            } catch (error) {
                console.error("Error fetching universities:", error);
                setUniversities();
            }
        };

        fetchUniversities();
    }, []);

    const submitNewSchool = async () => {
        console.log(" >> FUNCTION CALLED");
        try {
            const response = await fetch('http://localhost:1707/api/registration/new-university', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ universityName, emailDomain })
            });

            const data = await response.json();
            if (data.success) {
                alert(data.message);
                setShowForm(false);
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error(" >> Error:", error);
            alert("There was an error adding the university. Please try again.");
        }
    };

    // ------ Not used right now, deactivating university instead of deleting one -----
    const removeUniversity = async (universityId) => {
        try {
            const response = await fetch(`http://localhost:1707/api/registration/delete-university/${universityId}`, {
                method: 'DELETE'
            });
    
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                // Update the local state by filtering out the removed university
                setUniversities(prevUniversities => prevUniversities.filter(u => u.ID !== universityId));
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error removing university:", error);
            alert("There was an error removing the university. Please try again.");
        }
    };


    // ------ DEACTIVATE UNIVERSITY ------
    const deactivateUniversity = async (universityId) => {
        try {
            const response = await fetch(`http://localhost:1707/api/registration/deactivate-university/${universityId}`, {
                method: 'PUT'
            });
    
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                // Update the local state by setting the status of the university to 'inactive'
                setUniversities(prevUniversities => 
                    prevUniversities.map(u => u.ID === universityId ? { ...u, Status: 'inactive' } : u)
                );
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error deactivating university:", error);
            alert("There was an error deactivating the university. Please try again.");
        }
    };
    
    // ------ UPDATE UNIVERSITY INFORMATION ----
    const updateUniversity = async (universityId, updatedData) => {
        try {
            const response = await fetch(`http://localhost:1707/api/registration/update-university/${universityId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
    
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                setUniversities(prevUniversities => 
                    prevUniversities.map(u => u.ID === universityId ? { ...u, ...updatedData } : u)
                );
                setEditingUniversityId(null); // Stop editing mode
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error updating university:", error);
            alert("There was an error updating the university. Please try again.");
        }
    };

    const handleNameChange = (e, universityId) => {
        const newName = e.target.value;
        setUniversities(prevUniversities => 
            prevUniversities.map(u => u.ID === universityId ? { ...u, Name: newName } : u)
        );
    };
    
    const handleDomainChange = (e, universityId) => {
        const newDomain = e.target.value;
        setUniversities(prevUniversities => 
            prevUniversities.map(u => u.ID === universityId ? { ...u, Domain: newDomain } : u)
        );
    };
    
    const handleStatusChange = (e, universityId) => {
        const newStatus = e.target.value;
        setUniversities(prevUniversities => 
            prevUniversities.map(u => u.ID === universityId ? { ...u, Status: newStatus } : u)
        );
    };
    
    
    

    return (
        <div className="overview-container">
            <div className="present-all-schools">
                <table className="university-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Domain</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {universities.map((university) => (
                            <tr key={university.ID}>
                                <td>{university.ID}</td>
                                <td>
                                    {editingUniversityId === university.ID ? (
                                        <input type="text" value={university.Name} onChange={(e) => handleNameChange(e, university.ID)} />
                                    ) : (
                                        university.Name
                                    )}
                                </td>
                                <td>
                                    {editingUniversityId === university.ID ? (
                                        <input type="text" value={university.Domain} onChange={(e) => handleDomainChange(e, university.ID)} />
                                    ) : (
                                        university.Domain
                                    )}
                                </td>
                                <td>
                                    {editingUniversityId === university.ID ? (
                                        <select value={university.Status} onChange={(e) => handleStatusChange(e, university.ID)}>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    ) : (
                                        university.Status
                                    )}
                                </td>
                                <td>
                                    {editingUniversityId === university.ID ? (
                                        <button className="confirm-edit-btn" onClick={() => updateUniversity(university.ID, university)}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </button>
                                    ) : (
                                        <button className="edit-btn" onClick={() => setEditingUniversityId(university.ID)}>
                                            <FontAwesomeIcon icon={faPencilAlt} />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button className="remove-btn" onClick={() => deactivateUniversity(university.ID)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="add-new-school" onClick={() => setShowForm(true)}>
                Add New School
            </button>

            {showForm && (
                <div className="form-container">
                    <h2>Add New University</h2>
                    <input
                        type="text"
                        placeholder="University Name"
                        value={universityName}
                        onChange={(e) => setUniversityName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email Domain Name"
                        value={emailDomain}
                        onChange={(e) => setEmailDomain(e.target.value)}
                    />
                    <button onClick={submitNewSchool}>Submit</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Overview;
