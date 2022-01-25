const Cohort = require("./Cohort.js");
const Student = require("./student.js")

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

  removeCohort(nameOf) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === nameOf) {
         this.cohorts.splice(i, 1);
      }
    }
  }
}

module.exports = CohortManager;
