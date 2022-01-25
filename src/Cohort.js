const CohortManager = require("./cohortManager.js")
const Student = require("./student.js")

class Cohort {
    constructor(name) {
    this.name = name 
    this.student = []
    }
}

module.exports = Cohort;