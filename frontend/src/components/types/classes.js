class ClassObj {
    constructor(classCode, className) {
        this.classCode = classCode;
        this.className = className;
        this.encodedObject = this.encodeObject();
    }
    encodeObject() {
        let encoded = [];
        encoded.push({
            'name': 'classCode', 
            'value': this.classCode
        });
        encoded.push({
            'name': 'className', 
            'value': this.className
        });
        return encoded;
    }
}
export default ClassObj;