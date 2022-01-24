const Cohort = require("./Cohort.js");

class CohortManager {
  constructor() {
    this.cohorts = [];
  }

  createCohort(nameOf) {
    const cohort = new Cohort(nameOf);
    this.cohorts.push(cohort);
    return this.cohorts;
  }
  searchForCohort(nameOf) {
    const searchCohort = this.cohorts.find((cohort) => cohort.name === nameOf);
    return searchCohort;
  }
  returnAllCohorts() {
    return this.cohorts;
  }

  removeCohort(removeName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i] === removeName) {
         this.cohorts[i].splice;
      }
      return this.cohorts
    }
  }
}

module.exports = CohortManager;
