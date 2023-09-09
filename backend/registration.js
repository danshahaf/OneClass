const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.post('/new-university', (req, res) => {
        console.log(" >> BACKEND ACTIVATED");
        const { universityName, emailDomain } = req.body;

        // Validate the data first
        if (!universityName || !emailDomain) {
            return res.status(400).json({ error: 'University name and email domain are required.' });
        }

        // First, retrieve the max ID from the University table
        const getMaxIdSql = "SELECT IFNULL(MAX(ID), 0) AS maxId FROM University";
        db.query(getMaxIdSql, (err, results) => {
            if (err) {
                console.error("Error during DB query for max ID:", err);
                return res.status(500).json({ error: err.message });
            }

            // Get the max ID and add 1 to it
            const newId = results[0].maxId + 1;

            // Now, insert the new university with the new ID
            const insertSql = `
                INSERT INTO University (ID, Name, Domain, Timestamp_joined)
                VALUES (?, ?, ?, NOW())
            `;

            db.query(insertSql, [newId, universityName, emailDomain], (err, insertResults) => {
                if (err) {
                    console.error("Error during DB insertion:", err);
                    return res.status(500).json({ error: err.message });
                }
                res.json({ success: true, message: 'University added successfully!' });
            });
        });
    });


    router.get('/present-all-universities', (req, res) => {
        const sql = "SELECT * FROM University";  // Assuming your table is named 'University'
        db.query(sql, (err, results) => {
            if (err) {
                console.error("Error during DB query:", err);
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });

    // --- CURRENTLY NOT USED ---
    // ---- DELETE A UNIVERSITY FROM Overview.js
    router.delete('/delete-university/:id', (req, res) => {
        const universityId = req.params.id;
    
        const sql = "DELETE FROM University WHERE ID = ?";
        db.query(sql, [universityId], (err, results) => {
            if (err) {
                console.error("Error during DB deletion:", err);
                return res.status(500).json({ error: err.message });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'University not found.' });
            }
            res.json({ success: true, message: 'University removed successfully!' });
        });
    });
    

    // ------- DEACTIVATE UNIVERSITY ----- use this instead of deleting, keep data on file in case they want to return to the system
    router.put('/deactivate-university/:id', (req, res) => {
        const universityId = req.params.id;
    
        const sql = "UPDATE University SET Status = 'Inactive' WHERE ID = ?";
        db.query(sql, [universityId], (err, results) => {
            if (err) {
                console.error("Error during DB update:", err);
                return res.status(500).json({ error: err.message });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'University not found.' });
            }
            res.json({ success: true, message: 'University set to inactive successfully!' });
        });
    });
    


    // ------- UPDATE UNIVERSITY INFORMATION --------
    router.put('/update-university/:id', (req, res) => {
        const universityId = req.params.id;
        const { Name, Domain, Status } = req.body;
    
        const sql = "UPDATE University SET Name = ?, Domain = ?, Status = ? WHERE ID = ?";
        db.query(sql, [Name, Domain, Status, universityId], (err, results) => {
            if (err) {
                console.error("Error during DB update:", err);
                return res.status(500).json({ error: err.message });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'University not found.' });
            }
            res.json({ success: true, message: 'University updated successfully!' });
        });
    });
    
    return router;
};

