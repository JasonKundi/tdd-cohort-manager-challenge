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
    searchForCohort(nameOf) {
        const searchCohort = this.cohorts.find((cohort) => cohort.name === nameOf);
        return searchCohort
        

    }
    
    //for (let i = 0; i < this.cohorts.length; i++) {
    //    if (this.cohorts[i] === nameOf) {
    //        return this.cohorts[i]
    //    }
   //}
}

module.exports = CohortManager;