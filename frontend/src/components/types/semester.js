class Semester {
    constructor(semesterTitle, studentYear, classList) {
        this.semesterTitle = semesterTitle;
        this.studentYear = studentYear;
        this.classList = classList;
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
        return encoded;
    }
}

export default Semester;
