const CohortManager = require("./cohortManager.js");
const Cohort = require("./Cohort.js");

class Student {
    constructor(studentID, firstName, lastName, githubUserName, email) {
        this.studentId = studentID
        this.firstName = firstName
        this.lastName = lastName
        this.githubUserName = githubUserName
        this.email = email

    }
}

module.exports = Student