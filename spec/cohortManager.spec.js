const CohortManager = require("../src/cohortManager.js")
const Cohort = require("../src/Cohort.js")

describe("TodoList", () => {
    let cohortManager
  
    beforeEach(() => {
        cohortManager = new CohortManager()
    })
    
    it ("CohortManager - creates a new instance of the Cohort class by name", () => {

        //set up
        cohortManager.createCohort("A Class")

        //expected

        const expected = [new Cohort("A Class")]

        const result = cohortManager.cohorts
        
        expect(result).toEqual(expected)
    })
})