const CohortManager = require("../src/cohortManager.js");
const Cohort = require("../src/Cohort.js");
const Student = require("../src/student.js")

describe("TodoList", () => {
  let cohortManager;

  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  it("CohortManager//createCohort() - creates a new instance of the Cohort class by name", () => {
    //set up
    cohortManager.createCohort("A Class");

    //expected

    const expected = [new Cohort("A Class")];

    const result = cohortManager.cohorts;

    expect(result).toEqual(expected);
  });
  it("CohortManager//searchForCohort() - searches for Cohort class by name", () => {
    //set up
    cohortManager.createCohort("A Class");
    cohortManager.createCohort("B Team");
    cohortManager.createCohort("C List");

    //expected

    const expected = new Cohort("B Team");

    const result = cohortManager.searchForCohort("B Team");

    expect(result).toEqual(expected);
  });
  it("CohortManager//returnAllCohorts() - returns all Cohorts", () => {
    //set up
    const class1 = new Cohort("A Class");
    const class2 = new Cohort("B Team");
    const class3 = new Cohort("C List");

    cohortManager.createCohort("A Class");
    cohortManager.createCohort("B Team");
    cohortManager.createCohort("C List");

    cohortManager.returnAllCohorts()

    //expected

    const expected = [class1, class2, class3]

    const result = cohortManager.returnAllCohorts("A Class","B Team","C List");

    expect(result).toEqual(expected);
  });
  it ("CohortManager//removeCohort() - removes cohort by name", () => {
  
      //set up
      const class1 = new Cohort("A Class")
      const class2 = new Cohort("B Team")
      const class3 = new Cohort("C List")
  
      cohortManager.createCohort("A Class")
      cohortManager.createCohort("B Team")
      cohortManager.createCohort("C List")
  
      cohortManager.removeCohort("C List")
  
  
      //expected
  
      const expected = [class1, class2]
  
      const result = cohortManager.returnAllCohorts()
  
      expect(result).toEqual(expected)
  })
  it ("CohortManager//addStudent() - add student to a specific cohort", () => {
  
      //set up
      const class1 = new Cohort("A Class")
      
      cohortManager.createCohort("A Class")
      cohortManager.addStudent(1234, "John","Cena","gitSmackDown","cantSeeMe@yahoo.com")
      
  
  
      //expected
  
      const expected = [class1, class2]
  
      const result = cohortManager.returnStudentList(1)
  
      expect(result).toEqual(expected)
  })
});
