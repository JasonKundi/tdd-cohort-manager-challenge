const Cohort = require("./Cohort.js")

class CohortManager {
    constructor() {
        this.cohorts =[]

    }

    createCohort(nameOf) {
        const cohort = new Cohort(nameOf)
        this.cohorts.push(cohort)
        return this.cohorts

    }
}

module.exports = CohortManager;