const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    router.post('/check-email', (req, res) => {
        const { email } = req.body;
    
        // Split the email into username and domain
        const [domainUsername, domainCheck] = email.split('@');
    
        // First, get the University ID based on the domain
        const getUniIDSql = `
            SELECT ID FROM University WHERE Domain = ?;
        `;
    
        db.query(getUniIDSql, [domainCheck], async (err, results) => {
            if (err) {
                console.error("Error during DB query:", err);
                return res.status(500).json({ error: err.message });
            }
    
            if (results && results.length > 0) {
                const UniID = results[0].ID;
    
                // Check the Student table
                const studentSql = `
                    SELECT * FROM Student WHERE Email = ? AND University_ID = ?;
                `;
    
                db.query(studentSql, [domainUsername, UniID], (err, studentResults) => {
                    if (err) {
                        console.error("Error during DB query:", err);
                        return res.status(500).json({ error: err.message });
                    }
    
                    if (studentResults && studentResults.length > 0) {
                        console.log(" >>  BACKEND, FOUND STUDENT");
                        req.session.accountType = 'student';
                        req.session.studentData = studentResults[0]
                        return res.json({
                            'account-type': 'student',
                            'data': studentResults[0]
                        });
                    } else {
                        // If not found in Student table, check the Staff table
                        const staffSql = `
                            SELECT * FROM Staff WHERE Email = ? AND University_ID = ?;
                        `;
    
                        db.query(staffSql, [domainUsername, UniID], (err, staffResults) => {
                            if (err) {
                                console.error("Error during DB query:", err);
                                return res.status(500).json({ error: err.message });
                            }
    
                            if (staffResults && staffResults.length > 0) {
                                return res.json({
                                    'account-type': 'staff',
                                    'data': staffResults[0]}
                                );
                            } else {
                                return res.json({ message: "Could not find user." });
                            }
                        });
                    }
                });
            } else {
                return res.json({ message: "Could not find university with the given domain." });
            }
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

    
    return router;
};

